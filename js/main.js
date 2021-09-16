const btnMo = document.querySelector(".btnMo");
const gnbMo = document.querySelector("#gnbMo");

btnMo.addEventListener("click", e=>{
    e.preventDefault();

    btnMo.classList.toggle("on");
    gnbMo.classList.toggle("on");
});

/* community tab메뉴 자바스크립트 버전
const btns = document.querySelectorAll(".community dl dt a");
const boxs = document.querySelectorAll(".community dl dd");

for (let i=0; i<btns.length; i++){
    btns[i].addEventListener("click", e=>{
        e.preventDefault();

        let isOn = e.currentTarget.classList.contains("on");
        if (isOn) return;

        for (let el of btns){
            el.classList.remove("on");
        }
        e.currentTarget.classList.add("on");
        for (let el of boxs){
            el.style.display = "none";
        }
        boxs[i].style.display = "block";
    })
}
*/

// community tab메뉴 jQuery 버전
const $btns = $(".community .inner dl dt a");
const $boxs = $(".community .inner dl dd");

$btns.on("click focus", function(e){
    e.preventDefault();

    let target = $(this).attr("href");
    let isOn = $(this).hasClass("on");
    if (isOn) return;

    $btns.removeClass("on");
    $(this).addClass("on");

    $boxs.hide();
    $(target).show();
});