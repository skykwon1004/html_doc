$(function () {

    $('.left_slide').slick({
        arrows: false,
        fade: true,
        // vertical: true, 세로로 올라감
        asNavFor: '.right_slide',
    });

    var barWidth = $('.bar').width();
    console.log(barWidth)

    $('.right_slide').on('init afterChange', function (e, s, c) {
        console.log(s)
        var barSpan = barWidth / s.slideCount;
        $('.bar span').css({ width: barSpan });
        $('.bar2 span').css({ width: barSpan });
        $('.bar2 span').css({ width: barSpan * (c + 1) });
        $('.bar span').css({ left: barSpan * c });

        $('.num span').text(c ? (c + 1) : 1);
        $('.num strong').text(s.slideCount)
    })

    $('.right_slide').slick({
        arrows: false,
        slidesToShow: 5,
        asNavFor: '.left_slide',
    });

    $('.arrows i:first-child').on('click', function () {
        $('.left_slide').slick('slickPrev')
    });

    $('.arrows i:last-child').on('click', function () {
        $('.left_slide').slick('slickNext')
    });






})