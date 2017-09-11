$(document).ready(function() {
  $('select').niceSelect();

  $('.imdb-top-slider').slick({
    initialSlide: 3,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: $('.top-slider__nav_previous'),
    nextArrow: $('.top-slider__nav_next'),
  });

  $('.cinema-movie__nav_item:first-child').addClass('cinema-movie__nav_item_on-click');
  $('.cinema-movie__links_movies:first-child').addClass('cinema-movie__links_movies_on-click');
  $('.cinema-movie__nav_item').click(function() {
    $('.cinema-movie__nav_item').removeClass('cinema-movie__nav_item_on-click');
    $(this).addClass('cinema-movie__nav_item_on-click');
    var indexOf = $(this).index()+1;
    $('.cinema-movie__links_movies').removeClass('cinema-movie__links_movies_on-click');
    $(`.cinema-movie__links_movies:nth-child(${indexOf})`).addClass('cinema-movie__links_movies_on-click');
  })

  $('.imdb-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsClass: 'slick-dots_imdb',
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $('.movie-photo-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsClass: 'slick-dots_imdb',
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: $('.movie-photo-slider__nav_previous'),
    nextArrow: $('.movie-photo-slider__nav_next'),
  });

  $('.recomended-movies-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: $('.recomended-movies__next'),
  });

});
