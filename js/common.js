$('.get-call').on('mouseup', function () {
  $('.popup-form').addClass('open');
  $('#form-text').html('');
});
$('.close, .overlay').on('mouseup', function () {
  $('.popup-form').removeClass('open');
  $('.popup-success').removeClass('open');
});
$('.service-item').on('mouseup', function () {
  $('#form-text').html($(this).attr('data-form-text'));
  $('.popup-form').addClass('open');
});
$('.work-slider-nav_item').on('mouseup', function () {
  $('.work-slider-nav_item').removeClass('active-nav');
  $(this).addClass('active-nav');
  if ($(window).width() < 992) {
    $('.work-slider-wrapper_carousel').css('display','none');
    $('.work-slider-wrapper_carousel').eq($(this).index()).css('display','block');
  } else {
    $('.work-slider-wrapper_carousel').removeClass('current');
    $('.work-slider-wrapper_carousel').eq($(this).index()).addClass('current');
  }
});
$('.work-slider-wrapper_carousel').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<div class="slider-left"> <img src="../img/slider-arrow.png" alt="slider-left"  /> </div>',
  nextArrow: '<div class="slider-right"> <img src="../img/slider-arrow.png" alt="slider-left" />  </div>'
});

function windowSize(){
  if ($(window).width() <= '768'){
    $('.licence-images').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<div class="slider-left"> <img src="../img/slick-arrow.png" alt="slider-left"  /> </div>',
      nextArrow: '<div class="slider-right"> <img src="../img/slick-arrow.png" alt="slider-left" />  </div>'
    });
  } else {
    $('.licence-images').slick('unslick');
  }
}
$(window).on('load resize',windowSize);

$(window).on('load', function () {
  $('.work-slider-nav_item').eq(0).mouseup();
});