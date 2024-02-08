const subscribeModal = document.querySelector(".footer__popup");
const subscribeBtn = document.getElementById("openModal");
const closeModalBtn = document.querySelector(".footer__popup-close-btn");
const modalBtn = document.getElementById("closeModal");
const footerOverlay = document.querySelector(".footer__popup-overlay");
const closeModal = () =>
  subscribeModal.classList.remove("footer__popup-active");
const openModal = () => subscribeModal.classList.add("footer__popup-active");

subscribeBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
modalBtn.addEventListener("click", closeModal);
footerOverlay.addEventListener("click", closeModal);
