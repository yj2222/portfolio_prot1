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
        setTimeout(function(){
            $(span).addClass('active');
        },300 * i);
    });
    
});