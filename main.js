$(document).ready(function () {
  $('.fa-bars').click(function () {
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('load scroll', function () {
    $('.fa-bars').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if ($(window).scrollTop() > 35) {
      $('.header').css({
        'background': '#002e5f',
        'box-shadow': '0 .2rem .5rem rgba(0,0,0,.4)'
      });
      $('.login').css({
        'background': '#227EBB',
        'box-shadow': 'none'
      });
    } else {
      $('.header').css({
        'background': 'none',
        'box-shadow': 'none'
      });
      $(".login").css({
        'background': '#002e5f'
      });
    }
  });

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
        $(counterElement).text(target + "+"); 
      }
    };

    updateCounter();
  }

  // Function to check if an element is in viewport with an offset
  function isInViewport(element, offset = 100) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) + offset
    );
  }

  function initCounters() {
    $(".container").each(function () {
      const target = parseInt($(this).data("target"));
      if (isInViewport(this, 700)) { // Adjust the offset as needed
        startCounter(this, target);
      }
    });
  }

  // Add a scroll event listener to start counters when in view
  $(window).on('scroll', function () {
    $('.counter').each(function () {
      if (isInViewport(this, 700) && !$(this).hasClass('counted')) { // Adjust the offset as needed
        console.log('Counter in view:', this); // Debug log
        $(this).addClass('counted');
        const target = parseInt($(this).data('target'));
        startCounter(this, target);
      }
    });
  });

  // Initial check to start counters if already in view
  $(window).trigger('scroll');
});
