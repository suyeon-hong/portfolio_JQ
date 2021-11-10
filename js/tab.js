// community tab메뉴

$(document).ready(function(){
    Tab(".community .inner>dl>dt a", ".community .inner>dl>dd");
});

function Tab(btns, boxs){
    this.$tabBtns = $(btns);
    this.$tabBoxs = $(boxs);

    this.$tabBtns.on("click focus", function(e){
        e.preventDefault();

        this.target = $(e.currentTarget).attr("href");
        this.isOn = $(e.currentTarget).hasClass("on");
        if (this.isOn) return;

        this.$tabBtns.removeClass("on");
        $(e.currentTarget).addClass("on");

        this.$tabBoxs.hide();
        $(this.target).show();
    }.bind(this));
}