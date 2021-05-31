// "use strict";
// window.addEventListener("DOMContentLoaded", () => {

// });

$(function() {
    $('.header__btn').on('click', function() {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });
    $('.rightside-menu__close').on('click', function() {
        $('.rightside-menu').addClass('rightside-menu--close');
    });


    // slick slider start
    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: 3
    });

});