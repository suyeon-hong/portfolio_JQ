// box1 slide
$(".box1 .btns li").on("click", function(){
    let index = $(this).index();

    $(".box1 .btns li").removeClass("on");
    $(this).addClass("on");
    $(".slide-wrapper").animate({left: -(100 * index) +"%"}, 500);
});

//slidebox slide
$(".slidebox .slide-wrapper .slide").last().prependTo(".slidebox .slide-wrapper");

let enableClick = true;
let timer = setInterval(function(){
    movingRight(".slidebox .slide-wrapper", ".slide", -100);
}, 2000);

$(".slidebox .prev").on("click", function(e){
    e.preventDefault();

    if(enableClick){
        enableClick = false;
        
        clearInterval(timer);
        movingLeft(".slidebox .slide-wrapper", ".slide");
    }
});

$(".slidebox .next").on("click", function(e){
    e.preventDefault();

    if(enableClick){
        enableClick = false;
        
        clearInterval(timer);
        movingRight(".slidebox .slide-wrapper", ".slide", -100)
    }
});

function movingLeft(frame, slide){
    $(frame).animate({marginLeft: 0}, 500, function(){
        $(this).css({marginLeft: "-50%"});
        $(frame).children(slide).last().prependTo(frame);
        enableClick = true;
    })
}

function movingRight(frame, slide, percent){
    $(frame).animate({marginLeft: percent +"%"}, 500, function(){
        $(this).css({marginLeft: "-50%"});
        $(frame).children(slide).first().appendTo(frame);
        enableClick = true;
    })
}