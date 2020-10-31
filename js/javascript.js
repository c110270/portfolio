/*======================================
pageTop
======================================*/
  $(window).scroll(
    function () {
      // 一番上から200pxスクロールしたら表示
     if ($(window).scrollTop() > 200) {
          $('.js_page_top').fadeIn(300);
     } else {
          $('.js_page_top').fadeOut(300);
     }
  });

$(function(){
  $( '.js_page_top' ).click(
    function()
    {
      $( 'html,body' ).animate( {scrollTop:0} , 800 ) ;
    }
  ) ;
});

/*======================================
drawer
======================================*/
$(function() {
  /*toggleをクリックした時に */
 $('.js_drawer_toggle').on('click', function () {
  $(this).toggleClass('open');
  $('.bl_gnav_list').toggleClass('open');
  $('.ly_header').toggleClass('open');
  $('.js_drawer_layer').toggleClass('open');
  $('.ly_main').toggleClass('open');
 });
});

/*======================================
mainVisualSlider
======================================*/
let fade = new Swiper('.fade', {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 2000,
});

/*======================================
fadeIn
======================================*/
$(function(){
  $(window).scroll(function (){
      $('.js_fadeIn').each(function(){
          let position = $(this).offset().top;
          let scroll = $(window).scrollTop();
          let windowHeight = $(window).height();
          if (scroll > position - windowHeight + 150){
              $(this).addClass('active');
          }
      });
  });
});

/*======================================
fadeIn(mainVisualTitle)
======================================*/
$(function(){
  $(window).on("load", function() {
    $('.bl_mainVisual_title').delay(0).fadeIn(2000);
    });
});

/*======================================
smooth scroll
======================================*/
// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function() {
  let speed = 800;
  let id = jQuery(this).attr("href");
  let target = jQuery("#" == id ? "html" : id);
  let position = jQuery(target).offset().top;
  jQuery("html, body").animate(
    {
      scrollTop: position
    },
    speed
  );
  return false;
});

     


  

     

