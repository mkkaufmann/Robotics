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
        if ($(window).width() >= 975) {
            safeRemoveClass($("#nav-container"), "mdbreak");
            safeAddClass($("#nav-container"), "lgbreak");
            safeAddClass($("#dropdown"), "dropdownlgbreak");
            safeAddClass($("#season2016"), "season2016lgbreak");
            safeAddClass($("#ourteam"), "ourteamlgbreak");
            safeAddClass($("#contactus"), "contactuslgbreak");
            safeAddClass($("#sponsorus"), "sponsoruslgbreak");
            safeAddClass($("#home"), "homelgbreak");
        } else {
            safeRemoveClass($("#nav-container"), "lgbreak");
            safeAddClass($("#nav-container"), "mdbreak");
            safeRemoveClass($("#dropdown"), "dropdownlgbreak");
            safeRemoveClass($("#season2016"), "season2016lgbreak");
            safeRemoveClass($("#ourteam"), "ourteamlgbreak");
            safeRemoveClass($("#contactus"), "contactuslgbreak");
            safeRemoveClass($("#sponsorus"), "sponsoruslgbreak");
            safeRemoveClass($("#home"), "homelgbreak");
        }
    };
    checkSize();
    $(window).resize(checkSize);

    $(window).click(function (e) {
        var i, hasClass = false;
        var classNames = e.target.classList;
        var classNamesLength = classNames.length;
        for (i = 0; i < classNamesLength; i += 1) {
            if (classNames[i] === "navbar-part") {
                hasClass = true;
                break;
            }
        }
        if (!hasClass) {
            if ($("#collapse-toggle").attr("aria-expanded") === "true") {
                $('#nav-collapse').collapse('toggle');
            }
        }
    });
});
