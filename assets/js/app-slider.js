$(document).ready(function () {
    $('.app-logos').slick({
        slidesToShow: 6,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    autoplaySpeed: 1500
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    autoplaySpeed: 1000
                }
            }]
    });
});