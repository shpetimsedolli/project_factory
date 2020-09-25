document.querySelector(".hamburger").addEventListener('click' , function(e) {
  document.querySelector(".nav_wrapper").classList.toggle("is--toggled");
})
$(document).ready(function () {
  $(".banner_slider").slick({
    // infinite: false,
    fade: true,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow:
      "<img class='a-left control-c prev slick-prev' src='src/images/arrow-left.svg'>",
    nextArrow:
      "<img class='a-right control-c next slick-next' src='src/images/arrow-right.svg'>",
  });
});

$(document).ready(function () {
  $(".box_slider").slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 4,
    prevArrow:
      "<img class='a-left control-c prev slick-prev' src='src/images/arrow-left.svg'>",
    nextArrow:
      "<img class='a-right control-c next slick-next' src='src/images/arrow-right.svg'>",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
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
});
