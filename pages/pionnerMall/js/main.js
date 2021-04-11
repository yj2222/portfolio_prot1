$(function () {
    // bxslider
    $('.bxslider').bxSlider({
        auto: true, // オートスライド
        speed: 1000, // 遷移スピード
        pause: 10000, // スライド間隔
    });
    // navigation for sp
    $('.spbtn').on('touchstart', function () {
        $(this).toggleClass('active');
        $(this).children('i').toggleClass('active');
        $('nav ul').slideToggle();
    });
    // scroll top
    $('.scl-top').on('click touchstart', function () {
        $('html').animate({scrollTop:0});
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 500) {
            $('.scl-top').fadeIn();
        } else {
            $('.scl-top').fadeOut();
        }
    });
});