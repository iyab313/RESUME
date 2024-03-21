var swiper = new Swiper(".website", {
    slidesPerView : 'auto',
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});

$(document).ready(function(){
    $('.nav-opn button').click(function(){
        $('nav').animate({left: 0}, 'slow'); 
    });

    $('.nav-cls button').click(function(){
        $('nav').animate({left: '-100%'}, 'slow'); 
    });
});