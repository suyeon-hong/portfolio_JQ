// index visual
$(document).ready(function(){
    $("#visual").addClass("on");
});

$(".next").on("click", function(e){
    e.preventDefault();

    $(this).addClass("on");
    $("#visual .frame .wrap").animate({marginLeft: "-100%"}, 500, function(){
        $(this).css({marginLeft: 0})
        $("#visual .frame .wrap").find("img").first().appendTo("#visual .frame .wrap");
        $(".next").removeClass("on");
    })
});

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
