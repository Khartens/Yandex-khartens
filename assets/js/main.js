let swiper = new Swiper(".stages-slider", {
    pagination: {
      el: ".stages-pagination",
    },
    navigation: {
        nextEl: ".stages-button-next",
        prevEl: ".stages-button-prev",
    }
});
let swiper_two = new Swiper(".participants-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    autoplay: true,
    autoHeight: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".participants-button-next",
      prevEl: ".participants-button-prev",
    },
    breakpoints: {
        780: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1160: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    },
});