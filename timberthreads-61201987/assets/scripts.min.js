
/*
 * Put all your regular jQuery in here.
*/
jQuery(document).ready(function($) {

  /*
   * Let's fire off the gravatar function
   * You can remove this if you don't need it
  */

$('#js-home-slider').on('click', '.carousel-arrow, .carousel-nav-item', carouselGo);

var slideSpeed = 500;
var slideEase = 'swing';

function carouselGo(e){
    e.preventDefault();
    var $carouselWrapper = $(this).parents('.carousel-wrapper');
    var $navItems = $carouselWrapper.find('.carousel-nav-item');
    var $currentNav = $carouselWrapper.find('.carousel-nav-wrapper').find('.carousel-active')[0];
    var $carouselSlides = $carouselWrapper.find('.carousel-slide');
    var currentIndex = $.inArray($currentNav, $navItems);
    var direction;
    var nextIndex;
    var staging;

    if ( $(this).hasClass('carousel-arrow') ){
        if ( $(this).hasClass('carousel-arrow-left') ){
            direction = '100%';
            nextIndex = mod(currentIndex-1, $navItems.length);
        } else {
            direction = '-100%';
            nextIndex = mod(currentIndex+1, $navItems.length);
        }
        staging = (parseInt(direction,10) * -1) + '%';
        slideIt(direction, nextIndex);

    } else {
        nextIndex = $.inArray($(this)[0], $navItems);
        direction = currentIndex < nextIndex ? '-100%' : '100%';
        staging = (parseInt(direction,10) * -1) + '%';
        slideIt(direction, nextIndex);
    }

    function slideIt(_direction, _next){
        $carouselSlides.eq(currentIndex).stop().animate({'left': _direction}, slideSpeed, slideEase);
        $carouselSlides.eq(_next).stop().css('left',staging).animate({'left': '0%'}, slideSpeed, slideEase, function(){
            $navItems.eq(currentIndex).removeClass('carousel-active');
            $navItems.eq(nextIndex).addClass('carousel-active');
        });
    }

    function mod(num,len){
        if (num<0) {
         return len+num;
        }else{
         return num%len;
        }
    }
}



var rotate; 
function slide() {
  rotate = setTimeout(function(){
   $('#js-home-slider').find(".carousel-arrow-right").trigger('click');
  },9000);
}

$("#js-home-slider").on("mouseenter", function() {
    clearTimeout(rotate);
});
$("#js-home-slider").on("mouseleave", function() {
  slide();
});





 $(".lookbooks").on("hover", function () {
  var bgChange = $(this).data("bg"); 
  console.log("click");
  $(".lookbook-bg").find(".active").removeClass("active");
  $(".lookbook-bg").find("." + bgChange ).addClass("active");
 });




    $("#js-open-m-nav").on("click", function() {
        console.log("click");
        $("#js-open-m-nav").removeClass("active");
        $(".nav-links").addClass("open-m-nav");
        $("#js-close-m-nav").addClass("active");
    });

    $("#js-close-m-nav").on("click", function() {
        $(".nav-links").removeClass("open-m-nav");
        $("#js-open-m-nav").addClass("active");
        $("#js-close-m-nav").removeClass("active");
    });

slide();

}); /* end of as page load scripts */