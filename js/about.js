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