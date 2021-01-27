const mySwiper = new Swiper('.promo__container', {
  speed: 400,
  autoplay: {
    delay: 5000
  },
  spaceBetween: 100,
  pagination: {
    el: '.promo__controls',
    bulletClass: 'swiper-pagination-bullet promo__bullet',
    type: 'bullets',
    bulletElement: 'button',
    clickable: true
  },
});

const blogSwiper = new Swiper('.blog__container', {
  speed: 400,
  spaceBetween: 100,
  pagination: {
    el: '.blog__pagination',
    bulletClass: 'swiper-pagination-bullet',
    type: 'bullets',
    bulletElement: 'button',
    clickable: true
  },
  navigation: {
    nextEl: '.blog__arrow--next',
    prevEl: '.blog__arrow--prev',
  },
});

const quotesSwiper = new Swiper('.quotes__container', {
  speed: 400,
  spaceBetween: 64,
  width: 423,
  slideClass: "quotes__quote",
  pagination: {
    el: '.quotes__pagination',
    bulletClass: 'swiper-pagination-bullet',
    type: 'bullets',
    bulletElement: 'button',
    clickable: true
  }
});


$('.faq__button').on('click', function () {
  $(this).toggleClass('is-active');  

  $(this).parents('.faq__question').find('.faq__answer').slideToggle(300);
});


