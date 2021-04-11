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
        setTimeout(function(){$(span).addClass('active');},300 * i);
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
        
    });

});