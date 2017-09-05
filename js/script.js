$(document).ready(function() {
  $('select').niceSelect();

  $('.top-slider').slick({
    initialSlide: 3,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: $('.top-slider__nav_previous'),
    nextArrow: $('.top-slider__nav_next'),
  });
});
