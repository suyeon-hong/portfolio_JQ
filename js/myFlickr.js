/*
https://www.flickr.com/services/rest/?method=flickr.photos.search
https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg

21be590b77fb11bd12a7266f99a2f2d8
*/
const gallery = $(".gallery");
const tabBox = gallery.find(".tab");
const photoBox = gallery.find(".photos");
const loadingImg = gallery.find(".loading");
let totalImg = 11;
let tag = "landscape";

getList({
    type: "search",
    tag: tag,
    user_id: "194091829@N05"
});

gallery.find("button").on("click", function(){
    tag = gallery.find("input").val();

    if(!tag){
        alert("검색어를 입력해 주세요.");
        return;
    }
    loadingImg.removeClass("off");
    photoBox.removeClass("on");

    getList({
        type: "search",
        tag: tag
    });
});

$(window).on("keypress", function(e){
    if(e.key == "Enter"){
        tag = gallery.find("input").val();

        if(!tag){
            alert("검색어를 입력해 주세요.");
            return;
        }
        loadingImg.removeClass("off");
        photoBox.removeClass("on");

        getList({
            type: "search",
            tag: tag
        });
    }
});

$("body").on("click", ".photos li", function(e){
    e.preventDefault();

    let imgSrc = $(this).find("a").attr("href");

    $(".pop").remove();
    $("body").append(
        $("<div class='pop'>").append(
            $("<img>").attr({src: imgSrc}),
            $("<span>").text("CLOSE")
        )
    )
});

$("body").on("click", ".pop span", function(){
    $(".pop").remove();
});

tabBox.find("li a").on("click", function(e){
    e.preventDefault();
    tag = $(this).text();
    loadingImg.removeClass("off");
    photoBox.removeClass("on");
    tabBox.find("li a").removeClass("on");
    $(this).addClass("on");

    getList({
        type: "search",
        tag: tag,
        user_id: "194091829@N05"
    });
});

function getList(opt){
    let result_opt = {};

    if(opt.type == "interest"){
        result_opt = {
            url: "https://www.flickr.com/services/rest/?method=flickr.interestingness.getList",
            datatype: "json",
            data: {
                api_key: "21be590b77fb11bd12a7266f99a2f2d8",
                per_page: totalImg,
                format: "json",
                nojsoncallback: 1,
                privacy_filter: 1,
            }
        }
    }
    if(opt.type == "search"){
        if(opt.user_id == undefined) opt.user_id = ""
        result_opt = {
            url: "https://www.flickr.com/services/rest/?method=flickr.photos.search",
            datatype: "json",
            data: {
                api_key: "21be590b77fb11bd12a7266f99a2f2d8",
                per_page: totalImg,
                format: "json",
                nojsoncallback: 1,
                privacy_filter: 1,
                tags: opt.tag,
                user_id: opt.user_id
            }
        }
    }

    $.ajax(result_opt)
    .success(function(data){
        let items = data.photos.photo;
        
        photoBox.empty();
        $(items).each(function(index,data){
            let title = data.title;
    
            if(!data.title){
                title = "No description in this photo"
            }

            photoBox.append(
                $("<li class='item'>").append(
                    $("<a>").attr({
                        href: "https://live.staticflickr.com/"+ data.server +"/"+ data.id +"_"+ data.secret +"_b.jpg",
                        title: "새창열림"
                    }).append(
                        $("<img>").attr({
                            src: "https://live.staticflickr.com/"+ data.server +"/"+ data.id +"_"+ data.secret +"_w.jpg"
                        })
                    ),
                    $("<h2>").text(title),
                    $("<h3>").text("CATEGORY |").append(
                        $("<span>").text(tag),
                        $("<span class='id'>").text(data.owner)
                    )
                )
            )
        });
    
        loadImg();
    }).error(function(err){
        console.error("데이터를 불러오지 못했습니다.");
    })
}

function loadImg(){
    let imgNum = 0;

    photoBox.find("img").each(function(_, data){
        data.onload = function(){
            imgNum++;

            if (imgNum == totalImg){
                loadingImg.addClass("off");
            }
            photoBox.addClass("on");
        }
    });
}