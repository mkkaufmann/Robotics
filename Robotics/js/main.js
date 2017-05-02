/*jslint browser: true*/
/*global $, jQuery, alert*/
$(function () {
    "use strict";
    var safeAddClass = function (item, className) {
        if (!item.hasClass(className)) {
            item.addClass(className);
        }
    };
    var safeRemoveClass = function (item, className) {
        if (item.hasClass(className)) {
            item.removeClass(className);
        }
    };
    var checkSize = function () {
        if ($(window).width() >= 992) {
            safeRemoveClass($("#nav-container"), "mdbreak");
            safeAddClass($("#nav-container"), "lgbreak");
            safeAddClass($("#dropdown"), "dropdownlgbreak");
            safeAddClass($("#season2016"), "season2016lgbreak");
            safeAddClass($("#ourteam"), "ourteamlgbreak");
            safeAddClass($("#contactus"), "contactuslgbreak");
            safeAddClass($("#sponsorus"), "sponsoruslgbreak");
        } else {
            safeRemoveClass($("#nav-container"), "lgbreak");
            safeAddClass($("#nav-container"), "mdbreak");
            safeRemoveClass($("#dropdown"), "dropdownlgbreak");
            safeRemoveClass($("#season2016"), "season2016lgbreak");
            safeRemoveClass($("#ourteam"), "ourteamlgbreak");
            safeRemoveClass($("#contactus"), "contactuslgbreak");
            safeRemoveClass($("#sponsorus"), "sponsoruslgbreak");
        }
    };
    checkSize();
    $(window).resize(checkSize);
});
