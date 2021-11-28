class CookiePopup{
    constructor(selector, opt){
        if(!selector){
            console.error("selector값은 필수 입력값입니다.");
            return;
        }
        this.init(selector, opt);
        this.bindingEvent();
    }
    init(selector, opt){
        this.popup = $(selector);
        this.popup_close = this.popup.find(opt.btnClose);
        this.isCookie = document.cookie.indexOf(opt.name +"="+ opt.value);
        this.name = opt.name;
        this.value = opt.value;
        this.delay = opt.delay;
    }
    bindingEvent(){
        (this.isCookie == 0) ? this.popup.hide() : this.popup.show();

        this.popup_close.on("click", e=>{
            e.preventDefault();
        
            let isChecked = $(this.popup).find("input[type=checkbox]").is(":checked");
        
            if(isChecked) this.setCookie(this.delay);
            this.popup.hide();
        });
        
        this.popup.find("label").on("click", e=>{
            $(e.currentTarget).toggleClass("on");
        });
    }
    setCookie(time){
        let today = new Date();
        let date = today.getDate();
        
        today.setDate(date + time);
    
        let duedate = today.toGMTString();
    
        document.cookie = this.name +"="+ this.value +"; expires=" + duedate;
    }
}





