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
});