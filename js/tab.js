class Tab{
    constructor(opt){
        if(opt.motion = "show"){
            this.init(opt);
            this.bindingEvent();
        }
        if(opt.motion = "slideDown"){
            this.init(opt);
            this.bindingEvent();
        }
    }
    init(opt){
        this.$tabBtns = $(opt.btns);
        this.$tabBoxs = $(opt.boxs);
    }

    bindingEvent(){
        this.$tabBtns.on("click focus", e=>{
            e.preventDefault();
            this.activation(e.currentTarget);
            this.showBox();
        });
    }

    activation(e){
        this.target = $(e).children("a").attr("href");
        this.isOn = $(e).hasClass("on");
        if (this.isOn) return;
    
        this.$tabBtns.removeClass("on");
        $(e).addClass("on");
    }

    showBox(){
    this.$tabBoxs.hide();
    $(this.target).show();
    }
}


class Tab2{
    constructor(opt){
        this.init(opt);
        this.bindingEvent();
    }
    init(opt){
        this.$qbox = $(opt.btns);
        this.$abox = $(opt.boxs);
        this.speed = opt.speed;
    }
    bindingEvent(){
        this.$qbox.on("click", e=>{
            e.preventDefault();
        
            let i = $(e.currentTarget).index();
            let isOn = $(e.currentTarget).hasClass("on");
            
            if (isOn) {
                this.slideUp(e.currentTarget);
            } else{
                this.slideDown(e.currentTarget, i);
            }
        });
    }
    slideUp(e){
        $(e).removeClass("on");
        $(e).next().slideUp();
    }
    slideDown(e, i){
        activeBtn(this.$qbox, i/2);
        this.$abox.slideUp();
        $(e).next().slideDown(this.speed);
    }
}