$(document).ready(function () {
  $('.fa-bars').click(function () {
    $(this).toggleClass('fa-times')
    $('.navbar').toggleClass('nav-toggle')
  })

  $(window).on('load scroll', function () {
    $('.fa-bars').removeClass('fa-times')
    $('.navbar').removeClass('nav-toggle')

    if ($(window).scrollTop() > 35) {
      $('.header').css({
        background: '#002e5f',
        'box-shadow': '0 .2rem .5rem rgba(0,0,0,.4)'
      })
    } else {
      $('.header').css({ background: 'none', 'box-shadow': 'none' })
    }
  });
  (function ($) {
    'use strict'

    // $(".clients-carousel").owlCarousel({
    //     autoplay: true,
    //     dots: true,
    //     loop: true,
    //     responsive: { 0: {items: 2}, 768: {items: 4}, 900: {items: 6} }
    // });

    // $(".testimonials-carousel").owlCarousel({
    //     autoplay: true,
    //     dots: true,
    //     loop: true,
    //     responsive: { 0: {items: 1}, 576: {items: 2}, 768: {items: 3}, 992: {items: 4} }
    // });
  })(jQuery)
})


// Function to scroll to the top smoothly
function scrollToTop () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Add an event listener to the "scroll to top" button
const backToTopButton = document.querySelector('.back-to-top')
backToTopButton.addEventListener('click', scrollToTop)

// Add an event listener to show/hide the button based on scroll position
window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = 'block'
  } else {
    backToTopButton.style.display = 'none'
  }
})
console.log('.back-to-top')