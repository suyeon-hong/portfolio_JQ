// department testimonials 슬라이드 버튼
const $department = $(".department");
const $frame = $department.find(".testimonials .wrap");
const $btnLeft_dep = $department.find(".testimonials .btnLeft");
const $btnRgiht_dep = $department.find(".testimonials .btnRight");
let speed = 500;
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
        }, speed);
    } else{
        return;
    }
});