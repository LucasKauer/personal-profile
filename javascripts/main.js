var Home = (function (params) {
    'use strict';

    var initializeEvents = function () {
    };

    var init = function () {
        initializeEvents();
    };

    return {
        init: init
    };
}());

$(document).on('ready', Home.init);
