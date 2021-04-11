$(function(){
    let winH = $(window).height();

    let slideImg = $('.slideImg');
    let slideImg_offset = [];
    $.each(slideImg, function(i, item){ 
        let viewPoint = $(item).offset().top - (winH);
        slideImg_offset.push(viewPoint);
    });

    let slideTxt = $('.slideTxt');
    let title_offset = [];
    $.each(slideTxt, function(i, item){ 
        let viewPoint = $(item).offset().top - (winH);
        title_offset.push(viewPoint);
    });

    // slideImg.hide();
    // slideTxt.hide();
    console.log(slideImg_offset);
    $(window).scroll(function(){
        let scroll = $(this).scrollTop();
        console.log(scroll);
        $.each(slideImg_offset, function(i, start){ 
            if(scroll > start){
                $(slideImg[i]).fadeIn('fast');
            }
        });
        $.each(title_offset, function(i, start){ 
            if(scroll > start){
                $(slideTxt[i]).fadeIn('fast');
            }
        });
    });

});