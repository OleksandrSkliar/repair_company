// document.addEventListener("DOMContentLoaded", function(event) {
//   const modal = document.querySelector(".modal");
//   const modalBtn = document.querySelectorAll("[data-togle=modal");
//   const toggleModal = () => {
//     modal.classList.add("modal--visible");
//   };
//   const hideModal = () => {
//     modal.classList.remove("modal--visible");
//   };
//   const modalClose = document.querySelector(".modal__close");
//   modalBtn.forEach(element => {
//     element.addEventListener("click", toggleModal);
//   });
//   modalClose.addEventListener("click", hideModal);
//   window.addEventListener("click", function(event) {
//     if (event.target == modal) {
//       hideModal();
//     }
//   });
//   document.addEventListener("keydown", function(event) {
//     if (event.code == "Escape") {
//       hideModal();
//     }
//   });
// });

$(document).ready(function () {
  var modal = $(".modal"),
  modalBtn = $("[data-togle=modal]"),
  modalClose = $(".modal__close");
  modalBtn.on("click", function () {
    modal.toggleClass("modal--visible");
  });
  modalClose.on("click", function () {
    modal.toggleClass("modal--visible");
  });
  // scroll-up
  var $btnTop = $(".scroll-up");
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 20) {
      $btnTop.fadeIn();
    } else {
      $btnTop.fadeOut();
    }
  });
  $btnTop.on("click", function () {
    $("html,body").animate({
      scrollTop: 0
    },
    900
    );
  });

  //initialize swiper when document ready
  var mySwiper = new Swiper(".swiper-container", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  var next = $(".swiper-button-next");
  var prev = $(".swiper-button-prev");
  var bullets = $(".swiper-pagination");

  next.css("left", prev.width() + 10 + bullets.width() + 10);
  bullets.css("left", prev.width() + 10);

  new WOW().init();

  //Валидация формы
  $('.modal__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
    // строчное правило
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userPhone: {
      required: true,
      minlength: 15
    },
    // правило-обьект
    userEmail: {
      required: true,
      email: true
    }
  }, // Сообщения 
  messages: {
    userName: {
      required: "Заполните поле Имя",
      minlength: "Слишком короткое Имя",
      maxlength: "Имя не больше 15 букв"
    },
    userPhone: {
      required: "Заполните поле Телефон",
      minlength: "Введите корректный Телефон"
    },
    userEmail: {
      required: "Заполните поле Email",
      email: "Введите корректный Email"
    }
  }
  });

  $('.control__form').validate({
    errorElement: "div",
    errorClass: "control__invalid",
    rules: {
    // строчное правило
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userPhone: {
      required: true,
      minlength: 15
    }
  },
  // Сообщения 
  messages: {
    userName: {
      required: "Заполните поле Имя",
      minlength: "Слишком короткое Имя",
      maxlength: "Имя не больше 15 букв"
    },
    userPhone: {
      required: "Заполните поле Телефон",
      minlength: "Введите корректный Телефон"
    },
  }
  });

  $('.footer__form').validate({
    errorElement: "div",
    errorClass: "footer__invalid",
    rules: {
    // строчное правило
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userPhone: {
      required: true,
      minlength: 15
    },
    // правило-обьект
    userQuestion: {
      required: true
    }
  }, // Сообщения 
  messages: {
    userName: {
      required: "Заполните поле Имя",
      minlength: "Имя не короче двух букв",
      maxlength: "Имя не больше 15 букв"
    },
    userPhone: {
      required: "Заполните поле Телефон",
      minlength: "Введите корректный Телефон"
    },
    userQuestion: {
      required: "Заполните поле Вопрос",
    }
  }
  });

  // Маска для номера телефона
  $('[type=tel]').mask('+7 (000) 000-00-00', {placeholder: "+7 (___) __-__-__"});
});