var scroll = 60;
var bigStep = 0;
var mediunStep = 0;

/*if (navigator.userAgent.indexOf("Firefox") != -1) {
    $('body').on('wheel', function(e){
        if(e.originalEvent.deltaY  < 300 && e.originalEvent.deltaY  > scroll) {
            console.log('scrolling up !','scrollTop _> '+$(window).scrollTop());
            /!*step--;
            roadList(step);*!/
            $('.big-list').css('display', 'none');
        } else if (e.originalEvent.deltaY < 0){
            console.log('scrolling down !');
        }
    });
} else {
    $('body').on('wheel', function (e) {
        if (e.originalEvent.wheelDelta > 0) {
            console.log('scrolling up !', 'scrollTop _> ' + $(window).scrollTop());
            bigStep+=20;
            mediunStep+=30;
            roadList(bigStep,mediunStep);
            /!*$('.big-list').css('marginTop', step + "px");*!/

        } else if (e.originalEvent.wheelDelta < -20) {
            bigStep-=20;
            mediunStep-=30;
            roadList(bigStep,mediunStep);
            console.log('scrolling down !');
        }
    });
}*/
function roadList(bigStep, mediunStep) {
    $('.medium-list').css('marginTop', mediunStep + 'px');
    $('.big-list').css('marginTop', bigStep + 'px');
}
$('.works-slider').slick({
    infinite: true,
    speed: 300,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<img src="/img/slick-arrow.png" class="slick-prev" />',
    nextArrow: '<img src="/img/slick-arrow-next.png" class="slick-next" />',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$(window).bind('scroll',function(e){
    parallaxScroll();
});
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    /*$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
    $('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
    $('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');*/
    $('.medium-list').css('marginTop', (0-(scrolled*.25))+'px');
    $('.big-list').css('marginTop', (0-(scrolled*.5))+'px');
    $('.small-list').css('marginTop', (0-(scrolled*.75))+'px');
}