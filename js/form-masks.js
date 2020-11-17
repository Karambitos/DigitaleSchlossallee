"use strict";
$(document).ready(() => {

  /**
   * Form
   */
  const contactBTN = document.querySelectorAll(".contact-form");
  const form = document.querySelector(".form-section");
  const registrationForm = document.querySelector(".registration-section");
  const formCloseButton = document.querySelector(".modal-form-close");

  /**
   * Success
   */
  const success = document.querySelector(".success-section");
  const successClose = document.querySelector(".success-close");

  const overflowHidden = () => {
    if (document.body.style.overflow === "") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  /**
   * Registration Form
   */
  // const registrationCloseButton = document.querySelector(".modal-registration-close");
  // const registrationFormBtn = document.querySelectorAll(".registration-form-btn");

  // registrationFormBtn.forEach((elem) => {
  //   elem.addEventListener("click", (event) => {
  //     event.preventDefault();
  //     overflowHidden();
  //     registrationForm.classList.toggle("active");
  //   });
  // });

  // registrationCloseButton.addEventListener("click", () => {
  //   event.preventDefault();
  //   overflowHidden();
  //   registrationForm.classList.toggle("active");
  // });

  /**
   *  Form
   */
  contactBTN.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      event.preventDefault();
      overflowHidden();
      form.classList.toggle("active");
    });
  });

  formCloseButton.addEventListener("click", () => {
    event.preventDefault();
    overflowHidden();
    form.classList.toggle("active");
  });

  const closeSuccess = function () {
    success.classList.remove("active");
    overflowHidden();
  };

  successClose.addEventListener("click", closeSuccess);

  const nameField = document.querySelector('input[name="user_name"]');
  const firmaField = document.querySelector('input[name="user_firma"]');
  const emailField = document.querySelector('input[name="user_email"]');
  const checkboxField = document.querySelector('input[name="checkbox"]');
  const messageField = document.getElementById('user_message');
  const submit = document.getElementById('submit');

  /**
   * Check validation email
   */
  function emailValid() {
    let email = emailField.value
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    return re.test(String(email).toLowerCase());
  }

  /**
   * Check validation of all fields
   */
  function checkParams() {
    if (nameField.value.length != 0 &&
      firmaField.value.length != 0 &&
      emailValid() &&
      messageField.value.length != 0 &&
      checkboxField.checked) {
      submit.classList.remove('disabled');
    } else {
      submit.classList.add('disabled');
    }
  }

  nameField.addEventListener("keyup", checkParams);
  firmaField.addEventListener("keyup", checkParams);
  emailField.addEventListener("keyup", checkParams);
  messageField.addEventListener("keyup", checkParams);
  checkboxField.addEventListener("click", checkParams);


  emailField.addEventListener("keyup", emailValid);





});