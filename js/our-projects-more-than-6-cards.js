const swiperMoreThan6Projects = new Swiper('.swiper-container-more-than-6-projects', {
    // Курсор в виде руки при наведении на слайд
    grabCursor: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerColumn: 9
        },

        830: {
            slidesPerView: 2,
            slidesPerColumn: 5
        },

        1240: {
            slidesPerView: 3,
            slidesPerColumn: 3
        },


    }
});