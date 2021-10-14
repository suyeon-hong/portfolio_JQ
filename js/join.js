const $submitBtn = $(".join input[type=submit]");

$submitBtn.on("click", function(e){
    e.preventDefault();

    if(!isId("userid")) e.preventDefault();
    if(!isPw("userpw1", "userpw2")) e.preventDefault();
    if(!isSelect("pwQ")) e.preventDefault();
    if(!isTxt("pwA")) e.preventDefault();
    if(!isTxt("usernameKR")) e.preventDefault();
    if(!isTxt("usernameEN")) e.preventDefault();
    if(!isTxt("postcode")) e.preventDefault();
    if(!isTxt("phone1")) e.preventDefault();
    if(!isTxt("email")) e.preventDefault();
    if(!isCheck("snsAd", "수신여부를 선택해 주세요.")) e.preventDefault();
    if(!isCheck("emailAd", "수신여부를 선택해 주세요.")) e.preventDefault();
    if(!isCheck("terms", "필수항목입니다.")) e.preventDefault();
    if(!isCheck("privacy", "필수항목입니다.")) e.preventDefault();
});

function isId(name){
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
        return false;
    }else{
        $("[name="+ name +"]").parent().find("p").remove();
        $("[name="+ name +"]").parent().append(
            "<p class='caution'>아이디를 입력해 주세요.</p>"
        );
        return false;
    }
}

function isPw(name1, name2){
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
            return false;
        }
    }else if(txt1 === txt2){
        $("[name="+ name1 +"]").parent().find("p").remove();
        $("[name="+ name2 +"]").parent().find("p").remove();
        $("[name="+ name1 +"]").parent().append(
            "<p class='caution'>영문 대소문자, 숫자, 또는 특수문자 중 2가지 이상 조합하여 8~16자로 입력해 주세요.</p>"
        );
    }else{
        $("[name="+ name1 +"]").parent().find("p").remove();
        $("[name="+ name2 +"]").parent().find("p").remove();
        $("[name="+ name1 +"]").parent().append(
            "<p class='caution'>영문 대소문자, 숫자, 또는 특수문자 중 2가지 이상 조합하여 8~16자로 입력해 주세요.</p>"
        );
        $("[name="+ name2 +"]").parent().append(
            "<p class='caution'>동일한 비밀번호를 입력해 주세요.</p>"
        );
        return false;
    }
}

function isSelect(name){
    let txt = $("[name="+ name +"]").find("option:selected").val();
    
    if(txt !== ""){
        $("[name="+ name +"]").parent().find("p").remove();
        return true;
    }else{
        $("[name="+ name +"]").parent().find("p").remove();
        $("[name="+ name +"]").parent().append(
            "<p class='caution'>항목을 선택해 주세요.</p>"
        )
        return false;
    }
}

function isTxt(name){
    let txt = $("[name="+ name +"]").val();
    
    if(txt !== ""){
        $("[name="+ name +"]").parent().find("p").remove();
        return true;
    }else{
        $("[name="+ name +"]").parent().find("p").remove();
        $("[name="+ name +"]").parent().append(
            "<p class='caution'>빈 칸을 채워 주세요.</p>"
        )
        return false;
    }
}

function isCheck(name, text){
    let txt = $("[name="+ name +"]").is(":checked");
    if(txt){
        $("[name="+ name +"]").parent().parent().find(".caution").remove();
        return true;
    }else{
        $("[name="+ name +"]").parent().parent().find(".caution").remove();
        $("[name="+ name +"]").parent().parent().append(
            "<p class='caution'>"+ text +"</p>"
        )
        return false;
    }
}