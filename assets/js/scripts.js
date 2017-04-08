'use strict';

$(document).ready(function(){

  // ----------- animsition -----------
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });



  // ----------- typed text -----------
  $(".typed-text").typed({
    strings: ["Hyperparameter tuning", "Deep learning", "Matrix factorization", "Manifold learning", "Entity linking"],
    typeSpeed: 65,
    startDelay: 10,
    backDelay: 1200,
    backSpeed: 10,
    loop: true
  });


  // ----------- match-height -----------
  $('.match-height').matchHeight();


  // ----------- fixed nav -----------
  navScroll.init();


}); // end $(document).ready(function()




// ----------- nav animation -----------
var $header = $('#nav1'),
    $headerHeight = $header.height();

var navScroll = {

  init:function(){
    $(window).on('scroll',function(){
      navScroll.navDrop();
    })
  },

  navDrop:function(){
    var $scrollTop = $(window).scrollTop();

    if($scrollTop > $headerHeight){
      $header.addClass('scrolled');
	  $('#cadgi-filter').addClass('scrolled');
    }
    else if($scrollTop == 0) {
      $header.removeClass('scrolled');
	  $('#cadgi-filter').removeClass('scrolled');
    }
  }
}




// ----------- parallax -----------
jQuery(window).trigger('resize').trigger('scroll');



// ----------- collapse expanded bootstrap nav -----------
$(document).on('click','.navbar-collapse.in',function(e) {
  if( $(e.target).is('a') ) {
    $(this).collapse('hide');
  }
});



// ----------- swiper slider -----------
var swiper = new Swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  paginationClickable: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  parallax: true,
  speed: 600,
});
