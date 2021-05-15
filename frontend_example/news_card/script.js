$(document).ready(function() {
    $('.carousel').each(function(){
        $(this).carousel({
            interval: false
        });
    });
})

let fullView = false;
let stackView = true;

$("#fullBtn").click(function fullViewer(){
    if (stackView === true) {
    stackView = !stackView;
    fullView = !fullView;
    $(".stackView").toggleClass("indexUp");
    $(".stackView").toggleClass("indexDown");
    $(".fullView").toggleClass("indexDown");
    $(".fullView").toggleClass("indexUp");
    }
})

$("#stackBtn").click(function fullViewer(){
    if (fullView === true) {
    stackView = !stackView;
    fullView = !fullView;
    $(".stackView").toggleClass("indexUp");
    $(".stackView").toggleClass("indexDown");
    $(".fullView").toggleClass("indexDown");
    $(".fullView").toggleClass("indexUp");
    }
})