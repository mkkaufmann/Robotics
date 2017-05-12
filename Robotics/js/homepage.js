/*jslint browser: true*/
/*global $, jQuery, alert*/
$(function () {
    "use strict";
    var state = "out";
    var disabled = false;
    var disabling = false;

    function getWidthPercent(alpha) {
        return ($(window).width() * alpha).toString() + "px";
    }

    function hoverin(element1, element2, element3) {
        if (!disabled) {
            element1.stop().clearQueue().animate({
                width: getWidthPercent(0.7)
            }, 1500);
            element2.stop().clearQueue().animate({
                width: getWidthPercent(0.3)
            }, 1500);
            element3.stop().clearQueue().animate({
                "opacity": 1
            }, 500);
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
            if (!disabling) {
                $("#2016Button").stop().clearQueue().animate({
                    "opacity": 0
                }, 500);
                $("#2017Button").stop().clearQueue().animate({
                    "opacity": 0
                }, 500);
            } else {
                $("#2016Button").stop().clearQueue().animate({
                    "opacity": 1
                }, 500);
                $("#2017Button").stop().clearQueue().animate({
                    "opacity": 1
                }, 500);
            }
        }
    }
    hoverout($("#block1"), $("#block2"), $("#2017Button"));

    if ($(window).width() < 992) {
        disabling = true;
        hoverout($("#block1"), $("#block2"));
        disabled = true;
    }

    $("#block1").mouseenter(function () {
        hoverin($("#block1"), $("#block2"), $("#2017Button"));
        state = "in1";
    });
    $("#block1").mouseleave(function () {
        hoverout($("#block1"), $("#block2"), $("#2017Button"));
        state = "out";
    });
    $("#block2").mouseenter(function () {
        hoverin($("#block2"), $("#block1"), $("#2016Button"));
        state = "in2";
    });
    $("#block2").mouseleave(function () {
        hoverout($("#block2"), $("#block1"), $("#2016Button"));
        state = "out";
    });
    $("#bar-container").width = $(window).width;
    $(window).bind("resize", function () {
        $("#bar-container").width = $(window).width;
        if (state === "out") {
            hoverout($("#block1"), $("#block2"));
        } else if (state === "in1") {
            hoverin($("#block1"), $("#block2"), $("#2017Button"));
        } else if (state === "in2") {
            hoverin($("#block2"), $("#block1"), $("#2016Button"));
        }
        if ($(window).width() >= 992) {
            disabled = false;
            disabling = false;
        } else {
            disabling = true;
            disabled = false;
            hoverout($("#block1"), $("#block2"));
            disabled = true;
            disabling = false;
        }
    });
    $(window).resize(function () {
        $("#bar-container").width = $(window).width;
        if (state === "out") {
            hoverout($("#block1"), $("#block2"));
        } else if (state === "in1") {
            hoverin($("#block1"), $("#block2"), $("#2017Button"));
        } else if (state === "in2") {
            hoverin($("#block2"), $("#block1"), $("#2016Button"));
        }
        if ($(window).width() >= 992) {
            disabled = false;
            disabling = false;
        } else {
            disabled = false;
            disabling = true;
            hoverout($("#block1"), $("#block2"));
            disabled = true;
            disabling = false;
        }
    });
});
