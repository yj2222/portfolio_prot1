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
    let winH = $(window).height();
    let extendItem = $('.extendItem');
    let extendItem_dis = [];
    $.each(extendItem, function (i, ei) { 
        extendItem_dis = $(ei).offset().top;
    });
    console.log(extendItem_dis);

});