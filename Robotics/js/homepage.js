/*jslint browser: true*/
/*global $, jQuery, alert*/
$(function () {
    "use strict";
    var state = "out";
    var disabled = false;

    function getWidthPercent(alpha) {
        return ($(window).width() * alpha).toString() + "px";
    }

    function hoverin(element1, element2) {
        if (!disabled) {
            console.log($("#block1").width());
            element1.stop().clearQueue().animate({
                width: getWidthPercent(0.7)
            }, 1500);
            element2.stop().clearQueue().animate({
                width: getWidthPercent(0.3)
            }, 1500);
        }
    }

    function hoverout(element1, element2) {
        if (!disabled) {
            element1.stop().clearQueue().animate({
                "width": getWidthPercent(0.5)
            }, 1500);
            element2.stop().clearQueue().animate({
                "width": getWidthPercent(0.5)
            }, 1500);
        }
    }
    hoverout($("#block1"), $("#block2"));

    if ($(window).width() < 992) {
        disabled = true;
    }
    $("#block1").mouseenter(function () {
        hoverin($("#block1"), $("#block2"));
        state = "in1";
    });
    $("#block1").mouseleave(function () {
        hoverout($("#block1"), $("#block2"));
        state = "out";
    });
    $("#block2").mouseenter(function () {
        hoverin($("#block2"), $("#block1"));
        state = "in2";
    });
    $("#block2").mouseleave(function () {
        hoverout($("#block2"), $("#block1"));
        state = "out";
    });
    $("#bar-container").width = $(window).width;
    $(window).resize(function () {
        $("#bar-container").width = $(window).width;
        if (state === "out") {
            hoverout($("#block1"), $("#block2"));
        } else if (state === "in1") {
            hoverin($("#block1"), $("#block2"));
        } else if (state === "in2") {
            hoverin($("#block2"), $("#block1"));
        }
        if ($(window).width() >= 992) {
            disabled = false;
        } else {
            disabled = false;
            hoverout($("#block1"), $("#block2"));
            disabled = true;
        }
    });
});
