
$(function() {
    $(".section--four__accordeon").accordion();
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
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
        autoplay: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        asNavFor: '.header__slider-btns'
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

    $('.header__slider-btns').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.header__slider',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
    }]
    });
    
    $('.header__menu a[href^="#"]').bind("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr("href")).offset().top
        }, 1000);
        e.preventDefault();
    });
    return false;
});