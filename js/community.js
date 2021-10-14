// community tab메뉴
const $tabBtns = $(".community .inner>dl>dt a");
const $tabBoxs = $(".community .inner>dl>dd");

$tabBtns.on("click focus", function(e){
    e.preventDefault();

    let target = $(this).attr("href");
    let isOn = $(this).hasClass("on");
    if (isOn) return;

    $tabBtns.removeClass("on");
    $(this).addClass("on");

    $tabBoxs.hide();
    $(target).show();
});

// community tabs 버튼
const $tabs = $(".community .tabs li a");

$tabs.on("click", function(e){
    e.preventDefault();

    $tabs.removeClass("on");
    $(this).addClass("on");
});

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

// community pagination
const $faqBtns = $(".community #faq .numbers span");
const $noticeBtns = $(".community #notice .numbers span");

$faqBtns.on("click", function(e){
    e.preventDefault();

    $faqBtns.removeClass("on");
    $(this).addClass("on");
});

$noticeBtns.on("click", function(e){
    e.preventDefault();

    $noticeBtns.removeClass("on");
    $(this).addClass("on");
});
