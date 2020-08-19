'use strict';
$(document).ready(() => {

    console.log('spiner - ON');
    const spinner = document.querySelector('.spinner');
    const spinnerButton = document.querySelectorAll('.spinner-line');
    const spinerMenu = document.querySelector('.header__navigation');

    const overflowHidden = () => {
        if (document.body.style.overflow === '') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    const spinnerClassToggle = () => {
        spinerMenu.classList.toggle("active");
        spinnerButton.forEach(elem => {
            elem.classList.toggle("active")
        });
    };
    spinner.addEventListener('click', (event) => {
        event.preventDefault();
        spinnerClassToggle();
        overflowHidden();
    });

    const menuItem = document.querySelectorAll('.menu-item');

    menuItem.forEach(elem => {
        elem.addEventListener('click', (event) => {
            if (document.body.style.overflow === 'hidden') {
                document.body.style.overflow = '';
                spinnerClassToggle();
            } return
        });
    });

    console.log("slider - ON")
    var swiperNext = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
        },
    });
});
