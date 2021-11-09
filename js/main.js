// visual letter motion
const letter1 = $("#visual .inner >h1");
const letter2 = $("#visual .inner >h2");

letterMotion(letter1, 0.1);
letterMotion(letter2, 0.2);


function letterMotion(item, delay){
    let txt = item.text().split("");
    let bg = $(item).css("color");
    let num = 0;
    $(item).empty();

    $(txt).each(function(_, data){
        $(item).append(
            $("<span>").text(data).css({transitionDelay: delay * num +"s"})
        )
        num++;
    });

    $(item).append(
        $("<p>").css({
            position: "absolute",
            background: bg,
            width: "100%",
            height: "100%",
            top: 0,
            left: 0
        })
    );

    item.find("p").animate({left: "100%"}, speed, function(){
        $(this).remove();
    });
    item.find("span").css({opacity: 1});
}


// visual tab button
let i=0;

setTimeout(function(){
    $("#visual .wrapbox >.wrap").eq(0).slideDown(speed);
}, speed/2 );

let timer3 = setInterval(function(){
    (i >= 2) ? i=0 : i++;
    visualMoving(i);
}, speed*3);

$("#visual .filter li a").on("click", function(e){
    e.preventDefault();
    let target = $(this).parent().index() - 1;
    let isActive = $(this).hasClass("on");

    if(isActive) return;
    if(enableClick){
        enableClick = false;
        clearInterval(timer3);
        visualMoving(target);
    }
});

$("#visual .wrapbox article").on("mouseenter", function(){
    clearInterval(timer3);
});
$("#visual .wrapbox article").on("mouseleave", function(){
    timer3 = setInterval(function(){
        (i >= 2) ? i=0 : i++;
        visualMoving(i);
    }, speed*3);
});


function visualMoving(index){
    $("#visual .filter li a").removeClass("on");
    $("#visual .filter li").eq(index + 1).children("a").addClass("on");
    $("#visual .wrapbox >.wrap").slideUp(speed/2);
    setTimeout(function(){
        $("#visual .wrapbox >.wrap").eq(index).slideDown(speed);
    }, speed/2, function(){
        enableClick = true;
    });
}
