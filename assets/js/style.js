//ハンバーガーメニューをクリックしたとき
document.querySelector('.navbar-toggler').onclick = function(){
    //開いた時と閉じたとき
    if(document.getElementById('navbar').classList.contains('show')){
        document.querySelector('#navbar').classList.remove('show');
    } else {
    document.querySelector('#navbar').classList.add('show');
    }
}

$(function(){
    $(window).scroll(function (){
        $('.about-image').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('fadein');
            }
        });
        $('.members-img').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('fadein');
            }
        });
        $('.services-imgBox').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('fadein');
            }
        });
        $('.services-imgBox__Seo').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('fadein');
            }
        });
    });    
});

var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});
