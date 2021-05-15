const swiperUpTo6Projects = new Swiper('.swiper-container-up-to-6-projects', {
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },

    // Курсор в виде руки при наведении на слайд
    grabCursor: true,

    // Количество слайдов в видимой области (auto не будет работать, если у нас больше, чем один ряд)
    slidesPerView: 'auto',

    // Отступ между слайдами:
    spaceBetween: 24,
});