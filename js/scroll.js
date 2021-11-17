// index scroll효과
const $btnScroll = $("#navi li");
let posArr = [];
let $boxs = $(".myScroll");
let baseLine = -300;

initScroll();


$(window).on("resize", function(){
    posArr = [];
    let activeIndex = $btnScroll.find("a").filter(".on").parent().index();

    initScroll();
    moveScroll(activeIndex);
});

$(window).on("scroll", function(){
    let scroll = $(window).scrollTop();

    activation(scroll);
});

$btnScroll.on("click", function(e){
    e.preventDefault();

    moveScroll($(this));
});

function initScroll(){
    for (let i = 0; i < $boxs.length; i++){
        let $id = $btnScroll.eq(i).children("a").attr("href");
        posArr.push($($id).offset().top);
    }
}

function activation(scroll){
    for (let i = 0; i < posArr.length; i++){
        if(scroll >= posArr[i] + baseLine){
            activeBtn($btnScroll, i);
            activeBtn($boxs, i);
        }
        if(scroll >= posArr[1] + baseLine && scroll < posArr[2]){
            $(".box2").addClass("on");
        }else{
            $(".box2").removeClass("on");
        }
    }
}

function moveScroll(el){
    let target = el.index();

    $("html, body").animate({
        scrollTop : posArr[target]
    }, speed);
}


