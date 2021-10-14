// btnMo button
const btnMo = document.querySelector(".btnMo");
const gnbMo = document.querySelector(".gnbMo");
const gnb = document.querySelector("#gnb");

btnMo.addEventListener("click", e=>{
    e.preventDefault();

    btnMo.classList.toggle("on");
    gnbMo.classList.toggle("on");
});

// gnbMo tabmenu
const gnbMo_tabs = gnbMo.querySelectorAll(".arrow");
const gnbMo_boxs = gnbMo.querySelectorAll("ul");

for(let i=0; i<gnbMo_tabs.length; i++){
    gnbMo_tabs[i].addEventListener("click", ()=>{
        gnbMo_tabs[i].classList.toggle("on");
        gnbMo_boxs[i].classList.toggle("on");
    });
}

// index visual slide
    const $visual = $("#visual");
    const $wrap = $visual.find(".wrap");
    const $imgs = $visual.find("img");
    const $btnLeft = $visual.find(".left");
    const $btnRight = $visual.find(".right");
    let index = 0;
    let len = $imgs.length - 1;
    let timer;
    let speed = 1000;
    
    initVisual($wrap, $imgs);
    
    $btnLeft.on("click", function(e){
        e.preventDefault();
    
        clearInterval(timer);
        prevPic($wrap, $imgs);
    });
    
    $btnRight.on("click", function(e){
        e.preventDefault();
    
        clearInterval(timer);
        nextPic($wrap, $imgs);
    });
    
    function activeBtn(item, index){
        item.removeClass("on");
        item.eq(index).addClass("on");
    }

    function nextPic(frame, imgs){
        let target = frame.find(".on").index();
    
        if (target > 4){
            frame.animate({marginLeft: "calc(-100% / 7)"}, 0, function(){
                frame.css({marginLeft: 0});
                frame.find("img").first().appendTo(frame);
                (index == len) ? index = 0 : index++;
                activeBtn(imgs, index);
            });
        } else{
            (index == len) ? index = 0 : index++;
            activeBtn(imgs, index);
        }
    }
    
    function prevPic(frame, imgs){
        let target = frame.find(".on").index();
    
        if (target < 2){
            frame.animate({marginLeft: "calc(100% / 7)"}, 0, function(){
                frame.css({marginLeft: 0});
                frame.find("img").last().prependTo(frame);
                (index == 0) ? index = len : index--;
                activeBtn(imgs, index);
            });
        } else{
            (index == 0) ? index = len : index--;
            activeBtn(imgs, index);
        }
    }

    function initVisual(frame, imgs){
        imgs.last().prependTo(frame);
        timer = setInterval(function(){
            nextPic(frame, imgs);
        }, speed*1.5);
    }


// index scroll효과
const $btnScroll = $("#navi li");
let posArr = [];
let $boxs = $(".myScroll");
let baseLine = -300;

initScroll();

$(window).on("resize", function(){
    posArr = [];
    initScroll();
});

$(window).on("scroll", function(){
    let scroll = $(window).scrollTop();

    for (let i = 0; i < posArr.length; i++){
        if (scroll >= posArr[i] + baseLine){
            activeBtn($btnScroll, i);
            activeBtn($boxs, i);
        }
    }
});

$btnScroll.children("a").on("click", function(e){
    e.preventDefault();

    moveScroll($(this));
});

function initScroll(){
    for (let i = 0; i < $boxs.length; i++){
        let $id = $btnScroll.eq(i).children("a").attr("href");
        posArr.push($($id).offset().top);
    }
}

function moveScroll(el){
    let target = el.parent().index();

    $("html, body").animate({
        scrollTop : posArr[target]
    }, speed);
}

// index #topic tab버튼
const $btns_topic = $("#topic dl dt .btn");
const $boxs_topic = $("#topic dl dd");

$btns_topic.on("click", function(e){
    e.preventDefault();

    let i = $(this).parent().index() / 2;
    let isOn = $(this).hasClass("on");
    

    if (isOn) {
        $(this).removeClass("on");
        $boxs_topic.eq(i).slideUp(speed/2, function(){
                posArr = [];
                initScroll();
        });
    }else{
        $(this).addClass("on");
        $boxs_topic.eq(i).slideDown(speed/2, function(){
                posArr = [];
                initScroll();
        });
    }
});

// cookie popup
const $popup = $("#popup");
const $popup_close = $popup.find(".close");
let isCookie = document.cookie.indexOf("popup=done");

if(isCookie == 0){
    $popup.hide();
}else{
    $popup.show();
}

$popup_close.on("click", function(e){
    e.preventDefault();

    let isChecked = $popup.find("input[type=checkbox]").is(":checked");

    if(isChecked) setCookie(1);
    $popup.hide();
});

function setCookie(time){
    let today = new Date();
    let data = today.getDate();
    
    today.setDate(data + time);

    let duedate = today.toGMTString();

    document.cookie = "popup=done; expires=" + duedate;
}