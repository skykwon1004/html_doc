// var swc = true;

// $('.control').on('click', function () {
//     $(this).toggleClass('on');
//     if (swc) {
//         $('video').trigger('pause');
//     } else {
//         $('video').trigger('play');
//     }

//     // 스위치(swc) 만들기 ... 참거짓을 반복하기
//     swc = !swc;
// });
//---- 방법1



// $('.control').on('click', function () {
//     $(this).toggleClass('on');
//     if ($(this).hasClass('on')) {
//         $('video').trigger('pause');
//     } else {
//         $('video').trigger('play');
//     }
// });
//---- 방법2



$('.control').on('click', function () {
    $(this).toggleClass('on');
    $(this).hasClass('on') ?
        $('video').trigger('pause')
        : $('video').trigger('play');
});
//---- 방법3