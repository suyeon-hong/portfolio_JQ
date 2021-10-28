// index visual
$(window).ready(function(){
    $(".bg ul").addClass("on");
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
