// visual tab button
$("#visual .filter li a").on("click", function(e){
    e.preventDefault();
    let target = $(this).parent().index() - 1;

    $("#visual .filter li a").removeClass("on");
    $(this).addClass("on");
    $("#visual .wrapbox >.wrap").slideUp(speed/2);
    $("#visual .wrapbox >.wrap").eq(target).slideDown(speed);

})
