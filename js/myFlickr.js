/*
https://www.flickr.com/services/rest/?method=flickr.photos.search
https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg

21be590b77fb11bd12a7266f99a2f2d8
*/
function MyFlickr(opt){
    this.init(opt);
    this.bindingEvent();
}

MyFlickr.prototype.init = function(opt){
    this.gallery = $(opt.selector);
    this.tabBox = $(opt.tabBox);
    this.photoBox = $(opt. photoBox);
    this.loadingImg = $(opt. loadingImg);
    this.api_key = opt.api_key,
    this.user_id = opt.user_id;
    this.type = opt.type;
    this.tag = opt.tag;
    this.totalImg = opt.totalImg;
}

MyFlickr.prototype.bindingEvent = function(){
    this.getList();
    
    this.gallery.find("button").on("click", function(){
        this.tag = this.gallery.find("input").val();
    
        if(!this.tag){
            alert("검색어를 입력해 주세요.");
            return;
        }
        this.loadingImg.removeClass("off");
        this.photoBox.removeClass("on");
        this.user_id = undefined;
    
        this.getList();
    }.bind(this));
    
    $(window).on("keypress", function(e){
        if(e.key == "Enter"){
            this.tag = this.gallery.find("input").val();
    
            if(!this.tag){
                alert("검색어를 입력해 주세요.");
                return;
            }
            this.loadingImg.removeClass("off");
            this.photoBox.removeClass("on");
            this.user_id = undefined;
    
            this.getList();
        }
    }.bind(this));
    
    $("body").on("click", this.photoBox.selctor +(" li"), function(e){
        e.preventDefault();
    
        let imgSrc = $(e.currentTarget).find("a").attr("href");
    
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
    
    this.tabBox.find("li a").on("click", function(e){
        e.preventDefault();
        this.tag = $(e.currentTarget).text();
        this.loadingImg.removeClass("off");
        this.photoBox.removeClass("on");
        this.tabBox.find("li a").removeClass("on");
        $(e.currentTarget).addClass("on");
    
        this.getList();
    }.bind(this));
}

MyFlickr.prototype.getList = function(){
    let result_opt = {};

    if(this.type == "interest"){
        result_opt = {
            url: "https://www.flickr.com/services/rest/?method=flickr.interestingness.getList",
            datatype: "json",
            data: {
                api_key: this.api_key,
                per_page: this.totalImg,
                format: "json",
                nojsoncallback: 1,
                privacy_filter: 1,
            }
        }
    }
    if(this.type == "search"){
        if(this.user_id == undefined) this.user_id = ""
        result_opt = {
            url: "https://www.flickr.com/services/rest/?method=flickr.photos.search",
            datatype: "json",
            data: {
                api_key: this.api_key,
                per_page: this.totalImg,
                format: "json",
                nojsoncallback: 1,
                privacy_filter: 1,
                tags: this.tag,
                user_id: this.user_id
            }
        }
    }

    $.ajax(result_opt)
    .success(function(data){
        let items = data.photos.photo;
        
        $(this.photoBox).empty();
        $(items).each(function(_,data){
            let title = data.title;
    
            if(!data.title){
                title = "No description in this photo"
            }

            $(this.photoBox).append(
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
                        $("<span>").text(this.tag),
                        $("<span class='id'>").text(data.owner)
                    )
                )
            )
        }.bind(this));
    
        this.loadImg();
    }.bind(this)).error(function(err){
        console.error("데이터를 불러오지 못했습니다.");
    });
}

MyFlickr.prototype.loadImg = function(){
    let imgNum = 0;

    this.photoBox.find("img").each(function(_, data){
        data.onload = function(){
            imgNum++;

            if (imgNum == this.totalImg){
                this.loadingImg.addClass("off");
            }
            this.photoBox.addClass("on");
        }.bind(this);
    }.bind(this));
}