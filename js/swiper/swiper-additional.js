var swiper = new Swiper(".animationSlide", {
    slidesPerView: 2,
    spaceBetween: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});