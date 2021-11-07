// visual tab button
$("#visual .filter li a").on("click", function(e){
    e.preventDefault();

    $("#visual .filter li a").removeClass("on");
    $(this).addClass("on");
})
