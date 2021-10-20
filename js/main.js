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
    let num = 0;
    
    $imgs.last().prependTo($wrap);

    $imgs.on("mouseenter", function(){
        $imgs.removeClass("on");
        $(this).addClass("on");
    });

    $imgs.on("click", function(){
        let imgSrc = $(this).attr("src");
        let txt = $(this).attr("alt")

        $("body").append(
            $("<div class='detail'>").append(
                $("<div class='pic'>").append(
                    $("<img>").attr({src: imgSrc})
                ),
                $("<h2>").text(txt),
                $("<a href='#' class='close'>").text("CLOSE")
            )
        );
    });

    $("body").on("click", ".detail .close", function(e){
        e.preventDefault();

        $('.detail').remove();
    });

    $btnLeft.on("click", function(e){
        e.preventDefault();
    
        prevPic($wrap);
    });
    
    $btnRight.on("click", function(e){
        e.preventDefault();

        nextPic($wrap);
    });
    
    function activeBtn(item, index){
        item.removeClass("on");
        item.eq(index).addClass("on");
    }

    function nextPic(frame){
        frame.animate({marginLeft: "calc(-100% / 7)"}, 0, function(){
            frame.css({marginLeft: 0});
            frame.find("img").first().appendTo(frame);
        });
    }
    
    function prevPic(frame){
        frame.animate({marginLeft: "calc(100% / 7)"}, 0, function(){
            frame.css({marginLeft: 0});
            frame.find("img").last().prependTo(frame);
        });
    }


// index scroll효과
const $btnScroll = $("#navi li");
let posArr = [];
let $boxs = $(".myScroll");
let baseLine = -300;

initScroll();
console.log(posArr);

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
const $delCookie = $(".delCookie");
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

$delCookie.on("click", function(e){
    e.preventDefault();

    setCookie(0);
    alert("쿠키삭제완료");
});

$("#popup label").on("click", function(){
    let isOn = $(this).hasClass("on");

    (isOn) ? $(this).removeClass("on") : $(this).addClass("on");
});

function setCookie(time){
    let today = new Date();
    let date = today.getDate();
    
    today.setDate(date + time);

    let duedate = today.toGMTString();

    document.cookie = "popup=done; expires=" + duedate;
}

// calendar
const $calendar = $("#news .calendar");
const $day = $calendar.find(".day");
const $date = $calendar.find(".date");
const $month = $calendar.find(".month");
const $year = $calendar.find(".year");
const day = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
let date = new Date();

$day.text(day[date.getDay()]);
$date.text(date.getDate());
$month.text(date.getMonth() + 1);
$year.text(date.getFullYear());
