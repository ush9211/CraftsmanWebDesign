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
    

    // setInterval : 지정한 시간동안에 한번씩 지정한 함수를 무한반복
    setInterval(slideUpDown, 3000);
    // 3초에 한번씩 이미지 애니메이션이 무한실행되도록하는 함수


    
    // 팝업창 띄우기
    $('.pop').click(function(e){
        e.preventDefault();
        $('.popup').fadeIn();
    });

    // 팝업창 띄우기
    $('.close').click(function(){
        $('.popup').fadeOut();
    })
});

function slideUpDown(){

    // 첫번째 이미지를 -300만큼 위로 애니메이션
    $('.heroin').animate({
        top : '-300px'
    }, 500, function(){

        // 애니메이션이 끝나면 두번째 이미지가 보이게 됨
        // 이때 첫번째 이미지를 복제(clone)하여 마지막 순서로 만들고
        // 첫번째에 있는 이미지는 삭제하여 그 다음 이미지가 첫 번째 이미지가 되도록 함
        // top을 초기화 해놓아야함
        $('.heroin img:eq(0)').clone().appendTo('.heroin');
        $('.heroin img:eq(0)').remove();
        $('.heroin').css("top", 0);
    });
}