$(function(){

    

    let h1 = $('.homeHed').children('h1');
    let h1_txt = h1.text()
    let newHtml = ''
    $.trim(h1_txt).split('').forEach(word => {
        newHtml += `<span>${word}</span>`;
    });
    h1.html(newHtml);
    let h1_span = h1.children('span');
    console.log(h1_span);
    $.each(h1_span, function (i, span) { 
        setTimeout(function(){
            $(span).addClass('active');
        },300 * i);
    });
    
});