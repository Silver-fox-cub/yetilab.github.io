const swiperPopUp = new Swiper('.swiper-container-pop-up', {
    pagination: {
        el: '.swiper-pagination',
    },

    //Боковые стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Курсор в виде руки при наведении на слайд
    grabCursor: true,

    // Количество слайдов в видимой области (auto не будет работать, если у нас больше, чем один ряд)
    slidesPerView: 1,

    // Отключение функционала, если слайдов меньше, чем нужно:
    watchOverflow: true,
});