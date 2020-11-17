"use strict";
$(document).ready(() => {

  /**
   * smooth transition on anchor
   *
   */
  $(".anchor").on("click", function (event) {
    event.preventDefault();
    if (window.screen.width <= 1024) {
      spinnerClassToggle();
      overflowHidden();
    }
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({
        scrollTop: top,
      },
      1500
    );
  });

  /**
   * init swiper
   *
   */
  var swiperNext = new Swiper(".swiper-container", {
    loop: true,
    spaceBetween: 5,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  /**
   * init swiper exhibitors
   *
   */
  var swiperExhibitors = new Swiper(".swiper-container--exhibitors", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 5,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  /**
   * init aos
   *
   */
  AOS.init();

  const spinner = document.querySelector(".spinner");
  const spinnerButton = document.querySelectorAll(".spinner-line");
  const spinerMenu = document.querySelector(".header__navigation");
  const menuItem = document.querySelectorAll(".menu-item");

  const overflowHidden = () => {
    if (document.body.style.overflow === "") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const spinnerClassToggle = () => {
    spinerMenu.classList.toggle("active");
    spinnerButton.forEach((elem) => {
      elem.classList.toggle("active");
    });
  };
  spinner.addEventListener("click", (event) => {
    event.preventDefault();
    spinnerClassToggle();
    overflowHidden();
  });

  menuItem.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      if (document.body.style.overflow === "hidden") {
        document.body.style.overflow = "";
        spinnerClassToggle();
      }
      return;
    });
  });
});