$(function(){
    let h1 = $('.homeHed').children('h1');
    // console.log(h1);
    let h1_txt = h1.text()
    // console.log(h1_txt);
    let newHtml = ''
    $.trim(h1_txt).split('').forEach(word => {
        newHtml += `<span>${word}</span>`;
    });
    console.log(newHtml);
    h1.html(newHtml);
    console.log();
});