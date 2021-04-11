$(function(){
    let h1 = $('.homeHed').children('h1');
    // console.log(h1);
    let h1_txt = h1.text()
    // console.log(h1_txt);
    let newHtml = ''
    $.trim(h1_txt).split('').forEach(word => {
        newHtml += `<span>${word}</span>`;
    });
    // console.log(newHtml);
    h1.html(newHtml);
    // console.log(h1);
    $(function(){
        let h1_span = h1.children('span');
        console.log(h1__span);
        h1_span.forEach(span => {
            setTimeout(function(){
                span.addClass('active');
            },300);
        });
    });    
});