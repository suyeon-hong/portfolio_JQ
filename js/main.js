


// box1 slide
$(".box1 .btns li").on("click", function(){
    let index = $(this).index();

    $(".box1 .btns li").removeClass("on");
    $(this).addClass("on");
    $(".slide-wrapper").animate({left: -(100 * index) +"%"}, 500);
});

//slidebox slide
$(".slidebox .slide-wrapper .slide").last().prependTo(".slidebox .slide-wrapper");

$(".slidebox .prev").on("click", function(e){
    e.preventDefault();

    $(".slidebox .slide-wrapper").animate({marginLeft: 0}, 500, function(){
        $(this).css({marginLeft: "-50%"});
        $(".slidebox .slide-wrapper .slide").last().prependTo(".slidebox .slide-wrapper");
    })
});

$(".slidebox .next").on("click", function(e){
    e.preventDefault();

    $(".slidebox .slide-wrapper").animate({marginLeft: "-100%"}, 500, function(){
        $(this).css({marginLeft: "-50%"});
        $(".slidebox .slide-wrapper .slide").first().appendTo(".slidebox .slide-wrapper");
    })
});