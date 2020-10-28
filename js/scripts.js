/*!
 * Start Bootstrap - Agency v6.0.0 (https://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
 */
(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function() {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#formulario1');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '542235329214';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nombre = document.querySelector('#nombre').value
        let apellidos = document.querySelector('#apellidos').value
        let email = document.querySelector('#email').value
        let mensaje = 'send?phone=' + telefono + '&text=Gracias por contactarnos ' + nombre + ' ' + apellidos + '.' + ' Tu correo electrónico es : ' + email + '.' + ' Presioná enviar y en un instante estaremos con vos'
        if (isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        } else {
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
    }, 3000);
});