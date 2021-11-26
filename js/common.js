let speed = 1000;

// btnMo button
const btnMo = $(".btnMo");
const gnbMo =$(".gnbMo");
const gnb = $("#gnb");

btnMo.on("click", e=>{
    e.preventDefault();

    btnMo.toggleClass("on");
    gnbMo.toggleClass("on");
});

// gnbMo tabmenu
const gnbMo_tabs = gnbMo.find(".arrow");
const gnbMo_boxs = gnbMo.find("ul li ul");

for(let i=0; i<gnbMo_tabs.length; i++){
    gnbMo_tabs.on("click", ()=>{
        gnbMo_tabs.toggleClass("on");
        gnbMo_boxs.toggleClass("on");
    });
}

// gnb 2depth menu
$("#gnb>li").on("mouseenter", function(){
    $(this).find(".sub").show();
});

$("#gnb>li").on("mouseleave", function(){
    $(this).find(".sub").hide();
});

$("#gnb>li").each(function(index){
    $("#gnb>li").eq(index).find("a").on("focusin", function(){
        $("#gnb>li").eq(index).find(".sub").show();
    })
    $("#gnb>li").eq(index).find("a").last().on("focusout", function(){
        $("#gnb>li").eq(index).find(".sub").hide();
    })
});
