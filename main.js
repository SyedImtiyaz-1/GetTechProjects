$(document).ready(function(){

     $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop()>35)
        {
            $('.header').css({'background':'#002e5f','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
            $('.login').css({'background':'#227EBB','box-shadow':'none'});
        }
        else
        {
            $('.header').css({'background':'none','box-shadow':'none'});
            $(".login").css({ background: "#002e5f" });
        }
    });


   (function ($) {
    "use strict";

    
})(jQuery);
})

$(document).ready(function() {
    // Function to start counting for a single counter
    function startCounter(counterElement, target) {
      let count = 0;
      const speed = Math.ceil(target / 200); // Adjust the speed as needed
  
      const updateCounter = () => {
        if (count < target) {
          count += speed;
          $(counterElement).text(count + "+");
          setTimeout(updateCounter, 10);
        } else {
          $(counterElement).text(target + "+"); // Ensure the final value is accurate
        }
      };
  
      updateCounter();
    }
  
    // Function to initialize all counters
    function initCounters() {
      $(".counter").each(function() {
        const target = parseInt($(this).data("target"));
        startCounter(this, target);
      });
    }
  
    // Call the initCounters function when the document is ready
    initCounters();
  });