// department testimonials 슬라이드 버튼
const $department = $(".department");
const $frame = $department.find(".testimonials .wrap");
const $btnLeft_dep = $department.find(".testimonials .btnLeft");
const $btnRgiht_dep = $department.find(".testimonials .btnRight");
let len_dep = $frame.find("article").length;
let i = 0;

$frame.css({
    width: "calc((100% / 2 + 20px) * "+ len_dep +" )"
});

$btnLeft_dep.on("click", function(e){
    e.preventDefault();

    if (i > 0){
        i--;
        $frame.animate({
            marginLeft: -51 * i + "%"
        });
    }else{
        return;
    }
});

$btnRgiht_dep.on("click", function(e){
    e.preventDefault();

    if (i < (len_dep - 2)){
        i++;
        $frame.animate({
            marginLeft: -51 * i + "%"
        }, speed/2);
    } else{
        return;
    }
});

// department blog detail페이지
const $blog = $department.find(".blog");
const $btnsMore = $blog.find(".btn");
const $detail = $blog.find(".detail");
const $btnClose = $detail.find(".btnClose");

$btnsMore.on("click", function(e){
    e.preventDefault();

    let tit = $(this).parent().find("h3").text();
    let des = $(this).parent().find("p").text();
    let bg = $(this).parent().css("background");
    $detail.addClass("on");
    $detail.find("h3").text(tit);
    $detail.find("p").text(des);
    $detail.css({background: bg});
});

$btnClose.on("click", function(e){
    e.preventDefault();

    $detail.removeClass("on");
});