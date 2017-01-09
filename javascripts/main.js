var Home = (function (params) {
    'use strict';

    var configureServiceWorker = function() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () {
                navigator.serviceWorker.register('../sw.js');
            });
        }
    }

    var initializeApplication = function () {
        configureServiceWorker();
    }

    var init = function () {
        document.onreadystatechange = function () {
            if (document.readyState === "complete") {
                initializeApplication();
            }
        }
    }

    return {
        init: init
    };
}());

Home.init();
