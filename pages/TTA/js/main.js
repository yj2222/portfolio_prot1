$(function(){

    // sp button イベント
    let spbtn = $('.spbtn');
    let spnav = $('.spnav');
    
    spbtn.on('click', function(){
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            spnav.fadeIn();
            $('body').css('overflow', 'hidden');
        } else {
            spnav.fadeOut();
            $('body').css('overflow', 'visible');
        }
    });


    let start = $('.start');
    start.on('click', function(){
        let jumpTarget = $(this).children('a').attr('href');
        let targetOffset = $(jumpTarget).offset().top - 70;
        let baloonImg = $(this).children('img');
        baloonImg.css('transform', 'scale(1)');
        $(function(){
            setTimeout(function(){
                $('html, body').animate({scrollTop: targetOffset}, 500);
                baloonImg.css('transform', 'scale(0)');
            },1000);
        });
        return false;
    });
    // スクロールトップイベント
    let scrollBtn = $('.scrollBtn');
    // ロード時にはスクロールトップボタンを非表示
    scrollBtn.children('img').hide();
    // スクロール量に応じてボタンとなる画像を表示
    $(window).scroll(function() {
        if($(this).scrollTop() >= 200){
            scrollBtn.children('img:last-of-type').show('slow'); 
        } else {
            scrollBtn.children('img').hide('slow');
        }
    })
    // スクロールトップクリックイベント
    scrollBtn.on('click', function(){
        // 吹き出し画像を表示
        scrollBtn.children('img:first-of-type').show('fast');
        // 飛行アニメーション
        scrollBtn.children('img:last-of-type').addClass('flying');
        // 吹き出しの非表示を調整するため、スクロールトップは遅延実行
        setTimeout(function(){
            scrollBtn.children('img:first-of-type').hide('fast');
            $('html, body').animate({scrollTop:0}, 3000, function(){
                scrollBtn.children('img:last-of-type').removeClass('flying');
            });
        },1000);       
    });
});