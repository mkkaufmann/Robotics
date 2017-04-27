/*jslint browser: true*/
/*global $, jQuery, alert*/
$(function () {
    "use strict";
    $("#collapseOne").on("show.bs.collapse", function () {
        $("#2017DropIcon").removeClass("fa-angle-down");
        $("#2017DropIcon").addClass("fa-angle-up");
    });
    $("#collapseOne").on("hide.bs.collapse", function () {
        $("#2017DropIcon").removeClass("fa-angle-up");
        $("#2017DropIcon").addClass("fa-angle-down");
    });
});
