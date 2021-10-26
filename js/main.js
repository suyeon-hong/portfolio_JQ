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

//swiper
let swiper = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

// calendar
const $calendar = $("#news .calendar");
const $day = $calendar.find(".day");
const $date = $calendar.find(".date");
const $month = $calendar.find(".month");
const $year = $calendar.find(".year");
const day = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
let date = new Date();

$day.text(day[date.getDay()]);
$date.text(date.getDate());
$month.text(date.getMonth() + 1);
$year.text(date.getFullYear());
