const btnMo = document.querySelector(".btnMo");
const gnbMo = document.querySelector(".gnbMo");

btnMo.addEventListener("click", ()=>{
    btnMo.classList.toggle("on");
    gnbMo.classList.toggle("on");
});

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