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
  modalAnswer = $('.modal-answer'),
  modalBtn = $("[data-togle=modal]"),
  modalClose = $(".modal__close"),
  closeBtnAnswer = $('.modal-answer__close');
  modalBtn.on("click", function () {
    modal.toggleClass("modal--visible");
  });
  modalClose.on("click", function () {
    modal.toggleClass("modal--visible");
  });
  closeBtnAnswer.on('click', function () {
    modalAnswer.toggleClass('modal-answer--visible');
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
  function validateForm(form){
  $(form).validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      userQuestion: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Заполните поле Имя",
        minlength: "Слишком короткое имя",
        maxlength: "Имя не должно превышать 15 символов"
      },
      userPhone: {
        required: "Заполните поле Телефон",
        minlength: "Некорректно введен номер"
      },
      userQuestion: "Заполните поле Вопрос",
      userEmail: {
        required: "Заполните поле Email",
        email: "Введите Ваш email в формате name@domain.com"
      }
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function(response){
          //alert('Форма отправлена, мы свяжимся с вами в течение 15 минут');
          $(form)[0].reset();
          $(form).find('input').val("");
          modalAnswer.toggleClass('modal-answer--visible');
          modal.removeClass('modal--visible');
        },
          error: function(response) {
            console.error('Ошибка запроса' + response);
          }
      });
    }
  });
}
validateForm('.modal__form');
validateForm('.control__form');
validateForm('.footer__form');

  // Маска для номера телефона
  $('[type=tel]').mask('+7 (000) 000-00-00', {placeholder: "Ваш номер телефона:"});

  // Создание Yandex Map API
    ymaps.ready(init);
    function init(){
       var myMap = new ymaps.Map('map', {
          center: [47.244729, 39.723187],
          zoom: 18
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Наш офис',
          balloonContent: 'Вход со двора'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/map-marker.png',
          // Размеры метки.
          iconImageSize: [40, 40],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
      });
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects
        .add(myPlacemark);
    }
});