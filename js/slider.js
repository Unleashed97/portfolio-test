// https://github.com/kenwheeler/slick
$('#worksSlider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: false,
  dots: true,
});

$('.modal-work__btn--prev').on('click', function(event)
{
  event.preventDefault();
  $('#worksSlider').slick("slickPrev");
});

$('.modal-work__btn--next').on('click', function(event)
{
  event.preventDefault();
  $('#worksSlider').slick("slickNext");
});
