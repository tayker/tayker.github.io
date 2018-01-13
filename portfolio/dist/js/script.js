$(document).ready(function() {
    
    $('#popUpBtn').click(function(){
        $('#popUp').css({"display":"flex"})
    });
    
    $('#closePopUp').click(function(){
        $('#popUp').css({"display":"none"})
    });
    
    
    $('.link--nav').bind("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr("href")).offset().top
        }, 1000);
        e.preventDefault();
    });
    
    
    $(window).scroll(function() {

        if ($(this).scrollTop() > 100) {
         $('.header').css({
             "position": "fixed",
             "top": "0",
             "left": "0"
         });
     }
        else{
            $('header').css({
                "position": "absolute",
                "top": "100px"
            });
        }
    });
});
