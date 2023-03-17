$(function ($) {
  "use strict";

  jQuery(document).ready(function () {


    // Click To Scroll 
    $(".nav-link").click(function () {
      $(".nav-link").removeClass("active");
      $(this).addClass("active");
    });

    // Click To Scroll 
    $(".mein-menu .navbar-nav a").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 80,
          },
          100
        );
      event.preventDefault();
    });

    /* niceSelect */
    $("select").niceSelect();

    /* Magnific Popup Activation Probucket */
    $(".youtube-video").magnificPopup({
      items: [{
        src: 'https://www.youtube.com/watch?v=4DCTTrGjGU4',
        type: 'iframe' // this overrides default type
      }],
    });

    /* Wow js */
    new WOW().init();

    /*back to top-*/
    $(document).on("click", "#scrollUp", function () {
      $("html,body").animate({
        scrollTop: 0,
      },
        100
      );
    });

    // initialize swiper when document ready
    const step1 = document.querySelector('#step-1')
    const step2 = document.querySelector('#step-2')
    const step3 = document.querySelector('#step-3')
    console.log("step1", step1)
    step1.style.display = "block"
    step2.style.display = "none"
    step3.style.display = "none"

    /*Stepper flow-*/
    $(document).on("click", "#submit-step-1", function () {
      console.log("clicked submit step 1")

      const step1 = document.querySelector('#step-1').style
      step1.display = "none"

      const step2 = document.querySelector('#step-2').style
      step2.display = "block"
    });

    $(document).on("click", "#goto-step-1", function () {
      console.log("clicked goto step 1")

      const step1 = document.querySelector('#step-1').style
      step1.display = "block"

      const step2 = document.querySelector('#step-2').style
      step2.display = "none"

    });

    $(document).on("click", "#submit-step-2", function () {
      console.log("clicked submit step 2")

      const step2 = document.querySelector('#step-2').style
      step2.display = "none"

      const step3 = document.querySelector('#step-3').style
      step3.display = "block"

    });

    $(document).on("click", "#goto-step-2", function () {
      console.log("clicked goto step 2")

      const step2 = document.querySelector('#step-2').style
      step2.display = "block"

      const step3 = document.querySelector('#step-3').style
      step3.display = "none"

    });

    $(document).on("click", "#submit-step-3", function () {
      console.log("clicked goto step 2")

      const step4 = document.querySelector('#step-4').style
      step4.display = "block"

      const step3 = document.querySelector('#step-3').style
      step3.display = "none"

    });


    /* update logo on resize */
    $(window).resize(function () {/*from  w  w w . ja va 2  s.  c  om*/
      if ($(this).width() <= 990) {
        $("#logo").attr('src', "assets/img/zk3-resize.png");
      } else {
        $("#logo").attr('src', "assets/img/zk4-resize.png");
      }
    });

    /* sticky navigation menu */
    var lastScrollTop = "";
    $(window).on("scroll", function () {
      var $window = $(window);
      if ($window.scrollTop() > 0) {
        $(".mein-menu").addClass("nav-fixed");
        $("#logo").attr('src', "assets/img/zk3-resize.png");
      } else {
        $(".mein-menu").removeClass("nav-fixed");
        $("#logo").attr('src', "assets/img/zk4-resize.png");
      }


      /*---------------------------
         back to top show / hide
     ---------------------------*/
      var st = $(this).scrollTop();
      if ($(window).scrollTop() > 500) {
        $("#scrollUp").fadeIn();
      } else {
        $("#scrollUp").fadeOut();
      }
      lastScrollTop = st;
    });

  });

  $(window).on("load", function () {
    /*Preloader*/
    $('.preloader').fadeOut(1000);
    var img = $('.bg_img');
    img.css('background-image', function () {
      var bg = ('url(' + $(this).data('background') + ')');
      return bg;
    });
  });
});