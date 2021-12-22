const $tabs = $(".tabs li a");
const $faqs = $("#faq .numbers span");
const $notices = $("#notice .numbers span");
const $qna = $("#faq .qna");
const $notice = $("#notice tbody");

activation($tabs);
activation($faqs);
activation($notices);

function activation(item){
    item.on("click", function(e){
        e.preventDefault();

        const isOn = $(this).hasClass("on");
        if(isOn) return;
        
        item.removeClass("on");
        $(this).addClass("on");
    });
}

$.ajax({
    url: "js/data.json",
    datatype: "json"
}).success(items=> {
    const itemsQna = items.qna;
    const itemsNotice = items.notice;

    createList(itemsQna);
    createList2(itemsNotice);
})

$qna.on("click", e=>{
    const target = e.target.closest("dt");
    const isOn = $(target).hasClass("on");
    const dds = $("#faq .qna dd");

    if(target == null) return;
    if(isOn){
        $(target).removeClass("on");
        $(target).next().slideUp(500);
    }else{
        $(dds).slideUp(500);
        $(target).addClass("on");
        $(target).next().slideDown(500);
    }
});

function createList(items){
    $(items).each((_,item)=>{
        $qna.append(
            $("<dt>").append(
                $("<span class='icon'>").text("Q"),
                $("<p>").text(item.question),
                $("<span class='subj'>").text(item.subject),
                $("<a href='#' class='arrow' title='답변보기'>")
            ),
            $("<dd>").append(
                $("<span class='icon'>").text("A"),
                $("<p>").text(item.answer)
            )
        )
    });
}

function createList2(items){
    $(items).each((index,item)=>{
        $notice.prepend(
            $("<tr>").append(
                $("<td>").text(index + 1),
                $("<td>").append(
                    $("<a href='#'>").text(item.title)
                ),
                $("<td>").text(item.date)
            )
        )
    });
}