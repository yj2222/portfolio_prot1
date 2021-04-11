$(function(){
    let h1 = $('.homeHed').children('h1');
    let h1_txt = h1.text()
    let newHtml = ''
    // h1内のテキスト取得し、trimで空白改行を削除。spanタグをつけてnewHtmlに随時追加
    $.trim(h1_txt).split('').forEach(word => {
        newHtml += `<span>${word}</span>`;
    });
    // h1にnewHtmlを追加後、h1内のspanを取得
    h1.html(newHtml);
    let h1_span = h1.children('span');
    $.each(h1_span, function (i, span) { 
        // span1つ1つに対してactiveクラスを追加。ポイントは第2引数の時間指定(300 * i)。
        setTimeout(function(){$(span).addClass('active');},100 * i);
    });
});
$(function(){
    // 画面のサイズを取得。これはロード時の値なのでロード後に画面サイズを変えた場合は別途対応が必要。
    let winH = $(window).height();
    // ポイントはscrollAnimeItemクラスを一括で取得してしまうところ。アニメーションの方法は各CSSで制御する。
    let scrollAnimeItem = $('.scrollAnimeItem');
    let scrollAnimeItem_pos = [];
    $.each(scrollAnimeItem, function (i, ei) { 
        // 画面上部から要素までの距離 - 画面サイズ = 要素が画面から見え始める地点。
        scrollAnimeItem_pos.push($(ei).offset().top - winH);
    });
    // パーセント表示のアニメーションフラグ
    let rateTag = $('.prof__rate');
    let rateTag_pos = rateTag.offset().top - winH;
    let rateFlug = 0;
    // リアルタイム、パンくず
    let bcFlug = $('.bcFlug');
    let bodyH = $('body').height() - winH;
    let sbBc = $('.sb__bc').children();
    $(window).on('scroll', function(){
        let scroll = $(this).scrollTop();
        // 要素の見え始めるポイント < スクロール量 となった時にactiveクラスを付与。それ以外は逆にactiveクラスを削除。
        $.each(scrollAnimeItem_pos, function (i, pos) { 
            if(scroll > pos){
                $(scrollAnimeItem[i]).addClass('active');
            } else {
                $(scrollAnimeItem[i]).removeClass('active');
            }
        });
        if(rateFlug == 0 && scroll > rateTag_pos){
            let rateTxt = rateTag.children('p').children('span');
            $.each(rateTxt, function (i, rt) { 
                let num = $(rt).text();
                for(let j = 0; j <= $(rt).text(); j++){
                    setTimeout(function(){
                        $(rateTxt[i]).text(j);
                    },2000 / num * j);
                }
            });
            rateFlug = 1;
        }
        let pos = Math.floor(scroll / bodyH * 100);
        if(pos > 5){
            $(".sb__pos").animate({width: `${pos}%`}, 10, 'swing');
        } else {
            $(".sb__pos").animate({width: '50px'}, 10, 'swing');
        }
        $.each(bcFlug, function (i, bc) { 
            let bc_pos = $(bc).offset().top - winH;
            if(scroll > bc_pos){
                $(sbBc).removeClass('active');
                $(sbBc[i]).addClass('active');
            }
            // 各セクションが全体高さの％を占めているか調べるコード
            // console.log(bc_pos / bodyH * 100);
        });
    });
});
$(function(){
    $('.jsModalOpen').each(function(){
      $(this).click(function(){
        let target = $(this).data('target');
        $(target).fadeIn();
        return false;
      });
    });
    $('.jsModalClose').click(function(){
      $('.jsModal').fadeOut();
        return false;
    });
});
$(function(){

});

