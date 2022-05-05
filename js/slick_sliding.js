$(document).ready(
    function () {
        $('.slick-content').slick({
            slidesToShow:5,
            slidesToScroll:1,
            autoPlay: true,
            autoPlaySpeed: 2000,
            accessibility: true,
            infinite: false,
            swipeToSlide:true,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    }
);