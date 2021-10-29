const $submitBtn = $(".join input[type=submit]");
let result = [];


letter(".join h1", 0.1);

$submitBtn.on("click", function(e){
    result = [];

    if(!isId("userid")) e.preventDefault();
    if(!isPw("userpw1", "userpw2")) e.preventDefault();
    if(!isSelect("pwQ")) e.preventDefault();
    if(!isTxt("pwA")) e.preventDefault();
    if(!isTxt("usernameKR")) e.preventDefault();
    if(!isTxt("usernameEN")) e.preventDefault();
    if(!isTxt3("postcode","address1", "address2")) e.preventDefault();
    if(!isTxt2("phone", "phone1", "phone2")) e.preventDefault();
    if(!isEmail("email1", "email2", "email")) e.preventDefault();
    if(!isCheck("snsAd", "sns 수신여부")) e.preventDefault();
    if(!isCheck("emailAd", "이메일 수신여부")) e.preventDefault();
    if(!isCheck("terms", "이용약관 동의")) e.preventDefault();
    if(!isCheck("privacy", "개인정보 수집 및 이용 동의")) e.preventDefault();
    if(result.length) alert("아래 항목의 필수 입력값을 확인해 주세요\n\n" + result);
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
        result.push($("label[for="+ name +"]").text());
        return false;
    }else{
        $("[name="+ name +"]").parent().find("p").remove();
        $("[name="+ name +"]").parent().append(
            "<p class='caution'>아이디를 입력해 주세요.</p>"
        );
        result.push($("label[for="+ name +"]").text());
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
            result.push($("label[for="+ name1 +"]").text());
            return false;
        }
    }else if(txt1 === txt2){
        $("[name="+ name1 +"]").parent().find("p").remove();
        $("[name="+ name2 +"]").parent().find("p").remove();
        $("[name="+ name1 +"]").parent().append(
            "<p class='caution'>영문 대소문자, 숫자, 또는 특수문자 중 2가지 이상 조합하여 8~16자로 입력해 주세요.</p>"
        );
        result.push($("label[for="+ name1 +"]").text());
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
        result.push($("label[for="+ name1 +"]").text());
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
        result.push($("label[for="+ name +"]").text());
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
            "<p class='caution'>필수 입력값을 입력해 주세요.</p>"
        )
        result.push($("label[for="+ name +"]").text());
        return false;
    }
}

function isCheck(name, text){
    let txt = $("[name="+ name +"]").is(":checked");
    if(txt){
        $("[name="+ name +"]").parent().find(".caution").remove();
        return true;
    }else{
        $("[name="+ name +"]").parent().find(".caution").remove();
        $("[name="+ name +"]").parent().append(
            "<p class='caution'>"+ text +"에 체크해 주세요.</p>"
            )
            result.push(text);
        return false;
    }
}

function isTxt2(name1, name2, name3){
    let txt2 = $("[name="+ name2 +"]").val();
    let txt3 = $("[name="+ name3 +"]").val();

    if(isSelect(name1) && txt2 !== "" && txt3 !== ""){
        $("[name="+ name2 +"]").parent().find("p").remove();
        $("[name="+ name2 +"]").parent().find("p").remove();
        return true;
    }else{
        $("[name="+ name2 +"]").parent().find("p").remove();
        $("[name="+ name2 +"]").parent().append(
            "<p class='caution'>필수 입력값을 입력해 주세요.</p>"
        )
        result.push($("label[for="+ name1 +"]").text());
        return false;
    }
}

function isTxt3(name1, name2, name3){
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
        result.push($("label[for="+ name1 +"]").text());
        return false;
    }
}

function isEmail(name1, name2, name3){
    let txt1 = $("[name="+ name1 +"]").val();
    let txt2 = $("[name="+ name2 +"]").val();
    let txt3 = isSelect(name3);
    
    if(txt1 !== "" && txt2 !== "" || txt3){
        $("[name="+ name1 +"]").parent().find("p").remove();
        return true;
    }else{
        $("[name="+ name1 +"]").parent().find("p").remove();
        $("[name="+ name1 +"]").parent().append(
            "<p class='caution'>필수 입력값을 입력해 주세요.</p>"
        )
        result.push($("label[for="+ name1 +"]").text());
        return false;
    }
}

function letter(item, interval){
    let txt = $(item).text();
    let num = 0;

    txt = txt.split(" ");
    console.log(txt);
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