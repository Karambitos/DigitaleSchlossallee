'use strict'

$(document).ready(() => {

    console.log("slider - ON")
    var swiperNext = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
        },
    });
    // var swiperLeft = new Swiper('.swiper-container__left', {
    //     spaceBetween: 8,
    //     grabCursor: true,
    //     slidesPerView: 'auto',
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //     breakpoints: {
    //         1200: {
    //             slidesOffsetBefore: 55,
    //             centeredSlides: false,
    //         },
    //         1441: {
    //             slidesOffsetBefore: 500,
    //         },
    //         1920: {
    //             slidesOffsetBefore: 330,
    //         },
    //     }
    // });
});

