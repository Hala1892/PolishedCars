var toggler = document.getElementById("navbar-toggler");

$(() => {
    'use strict';
    $(toggler).click(function() {
        $(".navbar").toggleClass('pressed');
        $(".nav-link").toggleClass('navlink');
        $(".nav-item").toggleClass('hover-toggler');
    });
});