/*
https://www.flickr.com/services/rest/?method=flickr.photos.search
https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg

21be590b77fb11bd12a7266f99a2f2d8
*/
let tag = "castle";
let totalImg = 11;
let imgNum = 0;

$.ajax({
    url: "https://www.flickr.com/services/rest/?method=flickr.photos.search",
    datatype: "json",
    data: {
        api_key: "21be590b77fb11bd12a7266f99a2f2d8",
        per_page: totalImg,
        format: "json",
        nojsoncallback: 1,
        privacy_filter: 5,
        tags: tag,
    }
}).success(function(data){
    let items = data.photos.photo;

    $(items).each(function(index,data){
        let title = data.title;

        if(!data.title){
            title = "No description in this photo"
        }
        $(".gallery .photos").append(
            $("<li class='item'>").append(
                $("<a>").attr({
                    href: "https://live.staticflickr.com/"+ data.server +"/"+ data.id +"_"+ data.secret +"_b.jpg",
                    title: "새창열림"
                }).append(
                    $("<img>").attr({
                        src: "https://live.staticflickr.com/"+ data.server +"/"+ data.id +"_"+ data.secret +"_m.jpg"
                    })
                ),
                $("<h2>").text(title),
                $("<h3>").text("CATEGORY |  " + tag).append(
                    $("<span>").text(data.owner)
                )
            )
        )
    });

    $(".photos img").each(function(index, data){
        data.onload = function(){
            imgNum++;

            if (imgNum == totalImg){
                $(".gallery .loading").addClass("off");
            }
            $(".gallery .photos").addClass("on");
        }
    });
}).error(function(err){
    console.error("데이터를 불러오지 못했습니다.");
})

$("body").on("click", ".gallery .photos li", function(e){
    e.preventDefault();

    let imgSrc = $(this).find("a").attr("href");

    console.log(imgSrc);
    $(".pop").remove();
    $("body").append(
        $("<div class='pop'>").append(
            $("<img>").attr({src: imgSrc}),
            $("<span>").text("CLOSE")
        )
    )
})

$("body").on("click", ".pop span", function(){
    $(".pop").remove();
})

$(".tab li a").on("click", function(e){
    e.preventDefault();

    tag = $(this).text();
})