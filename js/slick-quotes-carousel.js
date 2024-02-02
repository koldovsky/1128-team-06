$(function() {
  $('.carousel-quotes__items').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
});

