 $(window).scroll(function() {
     if ($(this).scrollTop() > 300) {
         $('.section--info').css({
             "animation-name": "sections-anim",
             "opacity": "1"
         });
     }
     if ($(this).scrollTop() > 800) {
         $('.section--qualities').css({
             "animation-name": "sections-anim",
             "opacity": "1"
         });
     }
     if ($(this).scrollTop() > 850) {
         $('.quality').css("animation-name", "icon");
     }
     if ($(this).scrollTop() > 1100) {
         $('.section--experience').css({
             "animation-name": "sections-anim",
             "opacity": "1"
         });
     }
     if ($(this).scrollTop() > 1200) {
         $('.skill').css("animation-name", "icon");
     }
     if ($(this).scrollTop() > 1600) {
         $('.section--work-examples').css({
             "animation-name": "sections-anim",
             "opacity": "1"
         });
     }
     if ($(this).scrollTop() > 2000) {
         $('.footer').css({
             "animation-name": "sections-anim",
             "opacity": "1"
         });
         $('html').css({
             'background': 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url("http://1bg.objects-us-west-1.dream.io/wp-content/uploads/Dark-Background-Tumblr-14.png")',
             'background-attachment': 'fixed'
         });
     }
 });
 $(document).ready(function() {

     $('.button--follow').click(function() {
         $("html, body").animate({
             scrollTop: 600
         }, 600);
     });
     $('.header__menu a[href^="#"]').bind("click", function(e) {
         var anchor = $(this);
         $('html, body').stop().animate({
             scrollTop: $(anchor.attr("href")).offset().top
         }, 1000);
         e.preventDefault();
     });
     return false;
 });