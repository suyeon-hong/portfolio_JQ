const btnMo = document.querySelector(".btnMo");
const gnbMo = document.querySelector(".gnbMo");

btnMo.addEventListener("click", e=>{
    e.preventDefault();

    btnMo.classList.toggle("on");
    gnbMo.classList.toggle("on");
});

// index visual slide
const $visual = $("#visual");
const $wrap = $visual.find(".wrap");
const $imgs = $visual.find("img");
const $btnLeft = $visual.find(".left");
const $btnRight = $visual.find(".right");
let index = 0;
let len = $imgs.length - 1;
let timer;

$imgs.last().prependTo($wrap);
timer = setInterval(function(){
    movingRight();
}, 2500);

$btnLeft.on("click", function(e){
    e.preventDefault();

    clearInterval(timer);
    movingLeft();
});

$btnRight.on("click", function(e){
    e.preventDefault();

    clearInterval(timer);
    movingRight();
});

function movingRight(){
    let target = $wrap.find(".on").index();

    if (target > 4){
        $wrap.animate({marginLeft: "calc(-100% / 7)"}, 0, function(){
            $wrap.css({marginLeft: 0});
            $wrap.find("img").first().appendTo($wrap);
            $imgs.removeClass("on");
            if (index == len){
                index = 0;
            }else{
                index++;
            }
            $imgs.eq(index).addClass("on");
        });
    } else{
        $imgs.removeClass("on");
        if (index == len){
            index = 0;
        }else{
            index++;
        }
        $imgs.eq(index).addClass("on");
    }
}

function movingLeft(){
    let target = $wrap.find(".on").index();

    if (target < 2){
        $wrap.animate({marginLeft: "calc(100% / 7)"}, 0, function(){
            $wrap.css({marginLeft: 0});
            $wrap.find("img").last().prependTo($wrap);
            $imgs.removeClass("on");
            if (index == 0){
                index = len;
            }else{
                index--;
            }
            $imgs.eq(index).addClass("on");
        });
    } else{
        $imgs.removeClass("on");
            if (index == 0){
                index = len;
            }else{
                index--;
            }
            $imgs.eq(index).addClass("on");
    }
}

// index scroll효과
const $btnScroll = $("#navi li");
let posArr = [];
let boxs = $(".myScroll");
let baseLine = -200;

for (let i = 0; i < boxs.length; i++){
    posArr.push($($btnScroll.eq(i).children("a").attr("href")).offset().top);
}

$(window).on("resize", function(){
    posArr = [];
    
    for (let i = 0; i < boxs.length; i++){
        posArr.push($($btnScroll.eq(i).children("a").attr("href")).offset().top);
    }
});

$(window).on("scroll", function(){
    let scroll = $(window).scrollTop();

    for (let i = 0; i < posArr.length; i++){
        if (scroll >= posArr[i] + baseLine){
            $btnScroll.children("a").removeClass("on");
            $btnScroll.eq(i).children("a").addClass("on");
        }
    }
});

$btnScroll.children("a").on("click", function(e){
    e.preventDefault();

    let target = $(this).parent().index();
    $("html, body").animate({
        scrollTop : posArr[target]
    }, 1000);
});


// community tab메뉴
const $btns = $(".community .inner .tabmenu li a");
const $boxs = $(".community .inner>div");

$btns.on("click focus", function(e){
    e.preventDefault();

    let target = $(this).attr("href");
    let isOn = $(this).hasClass("on");
    if (isOn) return;

    $btns.removeClass("on");
    $(this).addClass("on");

    $boxs.hide();
    $(target).show();
});

// community QnAbox 토글 설정
const $qbox = $("#faq .qna dt");
const $abox = $("#faq .qna dd");

$qbox.on("click", function(e){
    e.preventDefault();

    let target = $(this).parent().index();
    let isOn = $(this).hasClass("on");
    
    if (isOn) {
        $qbox.removeClass("on");
        $(this).next().slideUp();
    } else{
        $qbox.removeClass("on");
        $abox.slideUp();
        $(this).addClass("on");
        $(this).next().slideDown(500);
    }
});