let enableClick = true;

//slidebox slide
$(".mento .slider-wrapper .slide").last().prependTo(".mento .slider-wrapper");

let timer = setInterval(function(){
    movingRight(".mento .slider-wrapper", ".slider", -100, -50);
}, speed*2);

$(".mento .prev").on("click", function(e){
    e.preventDefault();

    if(enableClick){
        enableClick = false;
        
        clearInterval(timer);
        movingLeft(".mento .slider-wrapper", ".slider", -50);
    }
});

$(".mento .next").on("click", function(e){
    e.preventDefault();

    if(enableClick){
        enableClick = false;
        
        clearInterval(timer);
        movingRight(".mento .slider-wrapper", ".slider", -100, -50)
    }
});

// box1 slide
$(".box1 .btns li").on("click", function(){

    if(enableClick){
        enableClick =false;
        let index = $(this).index();

        $(".box1 .btns li").removeClass("on");
        $(this).addClass("on");
        $(".slider-wrapper").animate({left: -(100 * index) +"%"}, speed/2, function(){
            enableClick = true;
        });
    }
});

//box3 slide
$(".box3 .slider-wrapper .slider").last().prependTo(".box3 .slider-wrapper");

let timer2 = setInterval(function(){
    movingRight(".box3 .slider-wrapper", ".slider", -100, 0);
}, speed*3);

$(".box3 .frame .prev").on("click", function(e){
    e.preventDefault();

    if(enableClick){
        enableClick = false;
        
        clearInterval(timer2);
        movingLeft(".box3 .slider-wrapper", ".slider", -100);
    }
});

$(".box3 .frame .next").on("click", function(e){
    e.preventDefault();

    if(enableClick){
        enableClick = false;
        
        clearInterval(timer2);
        movingRight(".box3 .slider-wrapper", ".slider", -200, -100);
    }
});



function movingLeft(frame, slider, def_percent){
    $(frame).animate({marginLeft: 0}, speed/2, function(){
        $(this).css({marginLeft: def_percent +"%"});
        $(frame).children(slider).last().prependTo(frame);
        enableClick = true;
    })
}

function movingRight(frame, slider, percent, def_percent){
    $(frame).animate({marginLeft: percent +"%"}, speed/2, function(){
        $(this).css({marginLeft: def_percent +"%"});
        $(frame).children(slider).first().appendTo(frame);
        enableClick = true;
    })
}