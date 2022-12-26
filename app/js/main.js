//слайдер "результаты нашей работы"
var swiper = new Swiper(".gallery-slider", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  spaceBetween: 40,
  slidesPerView: 2,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
  }
});

//play pause review video
$('.video').parent().click(function () {
  if($(window).width() > 991) {
    if ($(this).children(".video").get(0).paused) {
      $(this).children(".video").get(0).play();
      $(this).children(".play-btn").fadeOut();
    } else {
      $(this).children(".video").get(0).pause();
      $(this).children(".play-btn").fadeIn();
    }
  }
});

//переход по блокам
$('.target-link').click(function (event) {
  event.preventDefault();
  let target = $(this.getAttribute('data-href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 700);
  }
});

//Меню в планшетах
$('.toggle-tablet-menu').click(function () {
  $(this).toggleClass('active');
  $('.mobile-menu').toggleClass('active');
  $('.overlay').toggleClass('active');
  $('body').toggleClass('scroll-locked');
  if ($(window).width() < 768) {
    let top = $('.header').outerHeight();
    let windowHeight = $(window).height()
    $('.mobile-menu').css({
      top: top,
      height: windowHeight - top,
    })
  }
})

$(document).mouseup(function (e) {
  var container = $('.mobile-menu, .toggle-tablet-menu');
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    container.removeClass('active');
    $('.overlay').removeClass('active');
    $('body').removeClass('scroll-locked');
  }
});

//кнопки нав меню в мобилке
$(document).ready(function (){
  if($(window).width() < 992) {
    $('.header-nav a').click(function (){
      $('.mobile-menu').removeClass('active');
      $('.toggle-tablet-menu').removeClass('active');
      $('.overlay').removeClass('active');
      $('body').removeClass('scroll-locked');
    })
  }
})