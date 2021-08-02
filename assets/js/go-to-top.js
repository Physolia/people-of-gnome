const btnTop = jQuery('#btn-go-to-top');

jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() < 400) {
        btnTop.addClass('d-none');
    } else {
        btnTop.removeClass('d-none');
    }
});

btnTop.on('click', function (e) {
    e.preventDefault();

    jQuery('html, body').animate({
        scrollTop: 0
    });
});