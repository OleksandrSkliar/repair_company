document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector(".modal");
  const modalBtn = document.querySelectorAll("[data-togle=modal");
  const toggleModal = () => {
    modal.classList.add("modal--visible");
  };
  const hideModal = () => {
    modal.classList.remove("modal--visible");
  };
  const modalClose = document.querySelector(".modal__close");
  modalBtn.forEach(element => {
    element.addEventListener("click", toggleModal);
  });
  modalClose.addEventListener("click", hideModal);
  window.addEventListener("click", function(event) {
    if (event.target == modal) {
      hideModal();
    }
  });
  document.addEventListener("keydown", function(event) {
    if (event.code == "Escape") {
      hideModal();
    }
  });
});
