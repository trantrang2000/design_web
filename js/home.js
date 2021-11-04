const bannerSlide = new Swiper("#banner", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const ourProductsSlide = new Swiper(".our-products .products", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 16,
  autoHeight: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
});

const hotProductsSlide = new Swiper(".hot-products .products", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 16,
  autoHeight: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
});
