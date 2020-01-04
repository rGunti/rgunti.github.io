/*
 * Copyright (c) 2017 Raphael Guntersweiler, All rights reserved!
 */

function isIE() {
    return (navigator.userAgent.indexOf("MSIE") != -1 || navigator.userAgent.indexOf("Trident") != -1);
}

$(document).ready(function() {
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy({ scrollOffset: 75 });

    $('.side-nav-section-link').click(function() {
        $('.side-nav').sideNav('hide');
    });

    $('.js-nav-link').click(function(e) {
        window.history.pushState(null, document.title, $(this).attr('href'));
    });

    if (isIE()) {
        Materialize.toast($('#ie-alert-content').html());
    }
});

window.onscroll = function() {
    if (window.pageYOffset > (window.innerHeight * 0.6)) {
        $('.anim-scroll-down').fadeOut(500);
    } else {
        $('.anim-scroll-down').fadeIn(500);
    }
};
