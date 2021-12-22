class Tab{
    constructor(opt){
        if(!opt.btns || !opt.boxs){
            console.error("btns와 boxs는 필수 입력사항 입니다.");
            return;
        }
        const defaults = {
            speed: 500
        }
        let result = Object.assign({}, defaults, opt);

        this.init(result);
        this.bindingEvent();
    }
    init(opt){
        this.btns = $(opt.btns);
        this.boxs = $(opt.boxs);
        this.speed = opt.speed;
    }
    bindingEvent(){
        this.btns.on("click focus", e=>{
            e.preventDefault();

            this.activation(e.currentTarget);
            this.showBox();
        });
    }
    activation(e){
        this.target = $(e).children("a").attr("href");
        this.isOn = $(e).hasClass("on");
        if (this.isOn) return;
    
        this.btns.removeClass("on");
        $(e).addClass("on");
    }
    showBox(){
    this.boxs.hide();
    $(this.target).show();
    }
}
