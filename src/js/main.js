document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector(".modal");
  const modalBtn = document.querySelectorAll("[data-togle=modal");
  const modalClose = document.querySelector(".modal__close");
  const toggleModal = () => {
    modal.classList.toggle("modal--visible");
  };
  modalBtn.forEach(element => {
    element.addEventListener("click", toggleModal);
  });
  modalClose.addEventListener("click", toggleModal);
});
