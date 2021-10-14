const $btns_service = $(".about .services ul li");

$btns_service.on("click", function(e){
    e.preventDefault();

    let isOn = $(this).hasClass("on");
    let id = $(this).children("a").attr("href");
    
    if(isOn) return;

    $btns_service.children("a").removeClass("on");
    $(this).children("a").addClass("on");
    $(".services img").hide();
    $(id).fadeIn(speed/2);
});

// team 더보기버튼
const $teamBtn = $(".about .team .btnMore");
const $orgClose = $(".about .orgchart .close");

$teamBtn.on("click", function(e){
    e.preventDefault();

    $(".orgchart").addClass("on");
});

$orgClose.on("click", function(e){
    e.preventDefault();

    $(".orgchart").removeClass("on");
});