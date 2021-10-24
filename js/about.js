const $btns_service = $(".about .services ul li");

$btns_service.on("click", function(e){
    e.preventDefault();

    let isOn = $(this).hasClass("on");
    let id = $(this).children("a").attr("href");
    
    if(isOn) return;

    $btns_service.children("a").removeClass("on");
    $(this).children("a").addClass("on");
    $(".services img").hide();
    $(id).fadeIn(500);
});

// project 더보기 버튼
const $projectBtn = $(".about .projects .btnMore");
const $moreClose = $(".about .projects .btnClose");

$projectBtn.on("click", function(e){
    e.preventDefault();

    $(".about .projects .swiper").addClass("on");
});
$moreClose.on("click", function(e){
    e.preventDefault();

    $(".about .projects .swiper").removeClass("on");
});

let swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// team 더보기버튼
const $teamBtn = $(".about .team .btnMore");
const $orgClose = $(".about .team .orgchart .close");

$teamBtn.on("click", function(e){
    e.preventDefault();

    $(".team .orgchart").addClass("on");
});

$orgClose.on("click", function(e){
    e.preventDefault();

    $(".team .orgchart").removeClass("on");
});