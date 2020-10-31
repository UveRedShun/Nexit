$(function(){
    $('a[href^="#"]').click(function(){
        var speed = 1000;
        var marginExcept = 100; //section上のmargin対応
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + marginExcept;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
    var $arrowBtn = $('#page_top');
    var isHidden = true;
    $arrowBtn.hide();
        $(window).scroll(function () {
        if( $(this).scrollTop() > 240 ) {
            if( isHidden ) {
                $arrowBtn.stop(true,true).fadeIn(200);
                isHidden = false;
            }
        } else {
            if( !isHidden ) {
                $arrowBtn.stop(true,true).fadeOut();
                isHidden = true;
            }
        }
    });
    $arrowBtn.click(function(){  
        $('html, body').animate({
                'scrollTop': 0
            }, 1000);
            return false;
    });
    $(window).scroll(function (){
        $('.about-image').each(function(){
            fadeIn('.about-image');
        });
        $('.members-img').each(function(){
            fadeIn('.members-img');
        });
        $('.services-imgBox').each(function(){
            fadeIn('.services-imgBox');
        });
        $('.services-imgBox__Seo').each(function(){
            fadeIn('.services-imgBox__Seo');
        });
        $('.services-imgBox__Edu').each(function(){
            fadeIn('.services-imgBox__Edu');
        });
    });   
    var navId = $('#global-nav');
    var navClass = $('.nav-link');
    offset = navId.offset();
    $(window).scroll(function () {
        if($(window).scrollTop() > offset.top + window.parent.screen.height - 100) {
            navId.addClass('fixed');
            navClass.removeClass('text-white');
            navClass.addClass('text-dark');
        } else {
            navId.removeClass('fixed');
            navClass.addClass('text-white');
            navClass.removeClass('text-dark');

        }
    });
});

function fadeIn(base){
    var elemPos = $(base).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 100){
        $(base).addClass('fadein');
    }
}

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
