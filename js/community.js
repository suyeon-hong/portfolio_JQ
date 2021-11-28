const $tabs = $(".community .tabs li a");
const $faqs = $(".community #faq .numbers span");
const $notices = $(".community #notice .numbers span");

activation($tabs);
activation($faqs);
activation($notices);

function activation(item){
    item.on("click", function(e){
        e.preventDefault();

        item.removeClass("on");
        $(this).addClass("on");
    });
}