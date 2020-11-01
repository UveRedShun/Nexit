$(function(){
    // aタグから該当セクションへの画面移動
    $('a[href^="#"]').click(function(){
        var speed = 1000;
        // セクション上のmargintop考慮
        var mHeight = 50;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + mHeight;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
    // pageTopボタンの表示有無
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
    // pageTopボタン押下時の動作
    $arrowBtn.click(function(){  
        $('html, body').animate({
                'scrollTop': 0
            }, 1000);
            return false;
    });
    // 画像のフェードイン(下に関数を用意)
    $(window).scroll(function (){
        $('.sectionImg__About').each(function(){
            fadeIn('.sectionImg__About');
        });
        $('.memberImg-img__Shunta').each(function(){
            fadeIn('.memberImg-img__Shunta');
        });
        $('.memberImg-img__Sho').each(function(){
            fadeIn('.memberImg-img__Sho');
        });
        $('.serviceImgBox__Pro').each(function(){
            fadeIn('.serviceImgBox__Pro');
        });
        $('.serviceImgBox__Seo').each(function(){
            fadeIn('.serviceImgBox__Seo');
        });
        $('.serviceImgBox__Edu').each(function(){
            fadeIn('.serviceImgBox__Edu');
        });
    });
    // ディスプレイサイズ時のナビゲーション
    var navId = $('#global-nav');
    // ディスプレイサイズ時のナビゲーションアイテム
    var navClass = $('.nav-link');
    // スマホ時のハンバーガーメニュー押下時ナビゲーションモーダル
    var navModal = $('#navMenu-modal')
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
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            navModal.addClass('active');
        } else {
            navModal.removeClass('active');
        }
    });
    $('.hamburger-list a').click(function(){
        $(this).toggleClass('active');
        navModal.removeClass('active');
        navModal.removeClass('active');
    })
});

// imgのフェードイン用 js関数
function fadeIn(base){
    var elemPos = $(base).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 100){
        $(base).addClass('fadein');
    }
}

// Blogカードフリック用のjs
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
