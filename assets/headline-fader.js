/*
 * Copyright (c) 2017 Raphael Guntersweiler, All rights reserved!
 */
function playHeadlineAnimation() {
    $('.headline-fader li').hide();
    function loop() {
        var $item = $('.headline-fader li:first-child').fadeIn(1500, function() {
            $item.fadeOut(1500, function() {
                $item.appendTo('.headline-fader');
                loop();
            });
        });
    }
    loop();
}

$(document).ready(function() {
    playHeadlineAnimation();
});
