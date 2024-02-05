$(function(){
    $('.gnb').hover(function(){
        $('.lnb').fadeToggle();
    });

    $('.tabnav>li').click(function(e){
        e.preventDefault();

        $('.tabnav>li').removeClass('active');

        const href = $(this).find('a').attr('href');

        $(this).addClass('active');

        $('.tab').removeClass('active');

        $(href).addClass('active');
    });
});