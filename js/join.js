class MyForm{
    constructor(){
        this.init();
        this.eventBinding();
    }
    init(){
        this.submitBtn = $(".join input[type=submit]");
        this.result = [];
    }
    
    eventBinding(){
        this.submitBtn.on("click", e=>{
            this.result = [];
        
            if(!this.isId("userid")) e.preventDefault();
            if(!this.isPw("userpw1", "userpw2")) e.preventDefault();
            if(!this.isSelect("pwQ")) e.preventDefault();
            if(!this.isTxt("pwA")) e.preventDefault();
            if(!this.isTxt("usernameKR")) e.preventDefault();
            if(!this.isTxt("usernameEN")) e.preventDefault();
            if(!this.isTxt3("postcode","address1", "address2")) e.preventDefault();
            if(!this.isTxt2("phone", "phone1", "phone2")) e.preventDefault();
            if(!this.isEmail("email1", "email2", "email")) e.preventDefault();
            if(!this.isCheck("snsAd", "sns 수신여부")) e.preventDefault();
            if(!this.isCheck("emailAd", "이메일 수신여부")) e.preventDefault();
            if(!this.isCheck("terms", "이용약관 동의")) e.preventDefault();
            if(!this.isCheck("privacy", "개인정보 수집 및 이용 동의")) e.preventDefault();
            if(this.result.length) {
                $(window).scrollTop(0);
                alert("아래 항목의 필수 입력값을 확인해 주세요\n\n" + this.result);
            }
        });
    }
    
    isId(name){
        let txt = $("[name="+ name +"]").val();
        let eng = /[a-z]/;
        let num = /[0-9]/;
    
        if(txt.length >= 4 && txt.length <= 16 && eng.test(txt) || num.test(txt)){
            $("[name="+ name +"]").parent().find("p").remove();
            return true;
        }else if(txt.length >= 4 && txt.length <= 16){
            $("[name="+ name +"]").parent().find("p").remove();
            $("[name="+ name +"]").parent().append(
                "<p class='caution'>영문소문자/숫자를 포함한 4~16자 이내로 입력해 주세요.</p>"
            );
            this.result.push($("label[for="+ name +"]").text());
            return false;
        }else{
            $("[name="+ name +"]").parent().find("p").remove();
            $("[name="+ name +"]").parent().append(
                "<p class='caution'>아이디를 입력해 주세요.</p>"
            );
            this.result.push($("label[for="+ name +"]").text());
            return false;
        }
    }
    
    isPw(name1, name2){
        let txt1 = $("[name = "+ name1 +"]").val();
        let txt2 = $("[name = "+ name2 +"]").val();
        let eng = /[a-zA-Z]/;
        let num = /[0-9]/;
        let spc = /[~!@#$%^&*()_+]/;
    
        if(txt1 === txt2 && txt1.length >= 8 && txt1.length <= 16){
            if(eng.test(txt1) && num.test(txt1)){
                $("[name="+ name2 +"]").parent().find("p").remove();
                $("[name="+ name1 +"]").parent().find("p").remove();
                return true;
            }else if(num.test(txt1) && spc.test(txt1)){
                $("[name="+ name2 +"]").parent().find("p").remove();
                $("[name="+ name1 +"]").parent().find("p").remove();
                return true;
            }else if(eng.test(txt1) && spc.test(txt1)){
                $("[name="+ name2 +"]").parent().find("p").remove();
                $("[name="+ name1 +"]").parent().find("p").remove();
                return true;
            }else{
                $("[name="+ name2 +"]").parent().find("p").remove();
                $("[name="+ name1 +"]").parent().find("p").remove();
                $("[name="+ name1 +"]").parent().append(
                    "<p class='caution'>영문 대소문자, 숫자, 또는 특수문자 중 2가지 이상 조합하여 8~16자로 입력해 주세요.</p>"
                );
                this.result.push($("label[for="+ name1 +"]").text());
                return false;
            }
        }else if(txt1 === txt2){
            $("[name="+ name1 +"]").parent().find("p").remove();
            $("[name="+ name2 +"]").parent().find("p").remove();
            $("[name="+ name1 +"]").parent().append(
                "<p class='caution'>영문 대소문자, 숫자, 또는 특수문자 중 2가지 이상 조합하여 8~16자로 입력해 주세요.</p>"
            );
            this.result.push($("label[for="+ name1 +"]").text());
            return false;
        }else{
            $("[name="+ name1 +"]").parent().find("p").remove();
            $("[name="+ name2 +"]").parent().find("p").remove();
            $("[name="+ name1 +"]").parent().append(
                "<p class='caution'>영문 대소문자, 숫자, 또는 특수문자 중 2가지 이상 조합하여 8~16자로 입력해 주세요.</p>"
            );
            $("[name="+ name2 +"]").parent().append(
                "<p class='caution'>동일한 비밀번호를 입력해 주세요.</p>"
            );
            this.result.push($("label[for="+ name1 +"]").text());
            return false;
        }
    }
    
    isSelect(name){
        let txt = $("[name="+ name +"]").find("option:selected").val();
        
        if(txt !== ""){
            $("[name="+ name +"]").parent().find("p").remove();
            return true;
        }else{
            $("[name="+ name +"]").parent().find("p").remove();
            $("[name="+ name +"]").parent().append(
                "<p class='caution'>항목을 선택해 주세요.</p>"
            )
            this.result.push($("label[for="+ name +"]").text());
            return false;
        }
    }
    
    isTxt(name){
        let txt = $("[name="+ name +"]").val();
        
        if(txt !== ""){
            $("[name="+ name +"]").parent().find("p").remove();
            return true;
        }else{
            $("[name="+ name +"]").parent().find("p").remove();
            $("[name="+ name +"]").parent().append(
                "<p class='caution'>필수 입력값을 입력해 주세요.</p>"
            )
            this.result.push($("label[for="+ name +"]").text());
            return false;
        }
    }
    
    isCheck(name, text){
        let txt = $("[name="+ name +"]").is(":checked");
        if(txt){
            $("[name="+ name +"]").parent().find(".caution").remove();
            return true;
        }else{
            $("[name="+ name +"]").parent().find(".caution").remove();
            $("[name="+ name +"]").parent().append(
                "<p class='caution'>"+ text +"에 체크해 주세요.</p>"
                )
                this.result.push(text);
            return false;
        }
    }
    
    isTxt2(name1, name2, name3){
        let txt2 = $("[name="+ name2 +"]").val();
        let txt3 = $("[name="+ name3 +"]").val();
    
        if(this.isSelect(name1) && txt2 !== "" && txt3 !== ""){
            $("[name="+ name2 +"]").parent().find("p").remove();
            $("[name="+ name2 +"]").parent().find("p").remove();
            return true;
        }else{
            $("[name="+ name2 +"]").parent().find("p").remove();
            $("[name="+ name2 +"]").parent().append(
                "<p class='caution'>필수 입력값을 입력해 주세요.</p>"
            )
            this.result.push($("label[for="+ name1 +"]").text());
            return false;
        }
    }
    
    isTxt3(name1, name2, name3){
        let txt1 = $("[name="+ name1 +"]").val();
        let txt2 = $("[name="+ name2 +"]").val();
        let txt3 = $("[name="+ name3 +"]").val();
        
        if(txt1 !== "" && txt2 !== "" && txt3 !==""){
            $("[name="+ name1 +"]").parent().find("p").remove();
            return true;
        }else{
            $("[name="+ name1 +"]").parent().find("p").remove();
            $("[name="+ name1 +"]").parent().append(
                "<p class='caution'>필수 입력값을 입력해 주세요.</p>"
            )
            this.result.push($("label[for="+ name1 +"]").text());
            return false;
        }
    }
    
    isEmail(name1, name2, name3){
        let txt1 = $("[name="+ name1 +"]").val();
        let txt2 = $("[name="+ name2 +"]").val();
        let txt3 = this.isSelect(name3);
        
        if(txt1 !== "" && txt2 !== "" || txt3){
            $("[name="+ name1 +"]").parent().find("p").remove();
            return true;
        }else{
            $("[name="+ name1 +"]").parent().find("p").remove();
            $("[name="+ name1 +"]").parent().append(
                "<p class='caution'>필수 입력값을 입력해 주세요.</p>"
            )
            this.result.push($("label[for="+ name1 +"]").text());
            return false;
        }
    }    
}





letter(".join h1", 0.1);


function letter(item, interval){
    let txt = $(item).text();
    let num = 0;

    txt = txt.split(" ");
    $(item).empty();

    for(let el of txt){
        $(item).append(
            $("<span>").text(el).css({
                transitionDelay: num*interval +"s",
                transform: "translateY(-200px)",
                opacity: 0
            })
        )
        num++;

        $(item).find("span").stop().animate({
            opacity: 1
        }, 500, function(){
            $(this).css({transform: "translateY(0)"})
        });
    }
}