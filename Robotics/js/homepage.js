/*jslint browser: true*/
/*global $, jQuery, alert*/
$(function () {
    "use strict";

    function hoverin(element1, element2) {
        console.log($("#block1").width());
        element1.stop().clearQueue().animate({
            width: "70%"
        }, 1000);
        element2.stop().clearQueue().animate({
            width: "30%"
        }, 1000);
    }

    function hoverout(element1, element2) {
        element1.stop().clearQueue().animate({
            "width": "50%"
        }, 1000);
        element2.stop().clearQueue().animate({
            "width": "50%"
        }, 1000);
    }
    $("#block1").mouseenter(function () {
        hoverin($("#block1"), $("#block2"));
    });
    $("#block1").mouseleave(function () {
        hoverout($("#block1"), $("#block2"));
    });
    $("#block2").mouseenter(function () {
        hoverin($("#block2"), $("#block1"));
    });
    $("#block2").mouseleave(function () {
        hoverout($("#block2"), $("#block1"));
    });
    $("#bar-container").width = $(window).width;
    $(window).resize(function () {
        $("#bar-container").width = $(window).width;
    });
});
