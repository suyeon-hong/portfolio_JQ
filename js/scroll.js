// index scroll효과

function MyScroll(){
    this.initDOM();
    this.initScroll();
    this.bindingEvent();
}

MyScroll.prototype.initDOM = function(){
    this.btns = $("#navi li");
    this.posArr = [];
    this.boxs = $(".myScroll");
    this.baseLine = -300;
}

MyScroll.prototype.bindingEvent = function(){
    $(window).on("resize", function(){
        this.posArr = [];
        let activeIndex = this.btns.find("a").filter(".on").parent().index();
    
        this.initScroll();
        this.moveScroll(activeIndex);
    }.bind(this));
    
    $(window).on("scroll", function(){
        let scroll = $(window).scrollTop();
    
        this.activation(scroll);
    }.bind(this));
    
    this.btns.on("click", function(e){
        e.preventDefault();
        let index = $(e.currentTarget).index();
    
        this.moveScroll(index);
    }.bind(this));
}

MyScroll.prototype.initScroll = function(){
    for (let i = 0; i < this.boxs.length; i++){
        let id = this.btns.eq(i).children("a").attr("href");
        this.posArr.push($(id).offset().top);
    }
}

MyScroll.prototype.activation = function(scroll){
    for (let i = 0; i < this.posArr.length; i++){
        if(scroll >= this.posArr[i] + this.baseLine){
            activeBtn(this.btns, i);
            activeBtn(this.boxs, i);
        }
        if(scroll >= this.posArr[1] + this.baseLine && scroll < this.posArr[2]){
            $(".box2").addClass("on");
        }else{
            $(".box2").removeClass("on");
        }
    }
}

MyScroll.prototype.moveScroll = function(index){
    $("html, body").animate({
        scrollTop : this.posArr[index]
    }, speed);
}


