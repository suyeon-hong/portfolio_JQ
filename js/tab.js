// community tab메뉴

$(document).ready(function(){
    new Tab(".community .inner>dl>dt", ".community .inner>dl>dd");
});

function Tab(btns, boxs){
    this.$tabBtns = $(btns);
    this.$tabBoxs = $(boxs);

    this.$tabBtns.on("click focus", function(e){
        e.preventDefault();
        this.activation(e.currentTarget);
        this.showBox();
    }.bind(this));
}

Tab.prototype.activation = function(e){
            this.target = $(e).children("a").attr("href");
            this.isOn = $(e).hasClass("on");
            if (this.isOn) return;
        
            this.$tabBtns.removeClass("on");
            $(e).addClass("on");
        }

Tab.prototype.showBox = function(){
    this.$tabBoxs.hide();
    $(this.target).show();
}


// community QnAbox 토글 설정
const $qbox = $("#faq .qna dt");
const $abox = $("#faq .qna dd");

$qbox.on("click", function(e){
    e.preventDefault();

    let i = $(this).index();
    let isOn = $(this).hasClass("on");
    
    if (isOn) {
        $(this).removeClass("on");
        $(this).next().slideUp();
    } else{
        activeBtn($qbox, i/2);
        $abox.slideUp();
        $(this).next().slideDown(500);
    }
});