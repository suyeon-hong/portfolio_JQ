


// box1 slide
$(".box1 .btns li").on("click", function(){
    let index = $(this).index();

    $(".box1 .btns li").removeClass("on");
    $(this).addClass("on");
    $(".slide-wrapper").animate({left: -(100 * index) +"%"}, 500);
});
