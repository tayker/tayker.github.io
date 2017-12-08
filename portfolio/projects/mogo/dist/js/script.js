
$(function() {
    $(".section--four__accordeon").accordion();
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 30) {
        $('.header__menu').css({
            "background": "linear-gradient(to bottom, rgba(243, 129,129, 0.8), rgba(252,227,138, 0.8)"
        });
    }
    if ($(this).scrollTop() < 30) {
        $('.header__menu').css({
            "background": "none"
        });
    }
});
$(document).ready(function() {
    $('.button--map').click(function() {
        $('#map').slideDown('slow')
        $('.section--map').slideUp('fast')
    });
    $('.header__slider').slick({
        arrows: false,
        autoplay: true
    });
    $('.slider-quote--img').slick({
        arrows: true,
        autoplay: true,
        prevArrow: $('.button--prev-arrow-img'),
        nextArrow: $('.button--next-arrow-img')
    });

    $('.slider-quote--media').slick({
        arrows: true,
        autoplay: true,
        prevArrow: $('.button--prev-arrow-media'),
        nextArrow: $('.button--next-arrow-media')
    });
    $('.header__slider-btns a[data-slide]').click(function(e) {
        e.preventDefault();
        let slideno = $(this).data('slide');
        $('.header__slider').slick('slickGoTo', slideno - 1);

    });

    animateSlider();

    function animateSlider() {
        $('.active .borderok').animate({
            "width": "100%"
        }, 3500, function() {
            let current = $('.header__slider-btns a').index($('.active'));

            $('.header__slider-btns a').eq(current).find('.borderok').css('width', '20%');

            $('.header__slider-btns a').eq(current).removeClass('active');

            current++;
            if (current >= $('.header__slider-btns a').length) current = 0;

            $('.header__slider-btns a').eq(current).addClass('active');
            animateSlider();

        });
    }

    $('.header__menu a[href^="#"]').bind("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr("href")).offset().top
        }, 1000);
        e.preventDefault();
    });
    return false;
});