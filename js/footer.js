const footerPopup = document.querySelector('.footer__popup');
const footerModal = document.getElementById('openModal');
const closeModal = document.querySelector('.footer__popup-close-btn');
const modalBtn = document.getElementById('closeModal');

footerModal.addEventListener('click', () => {
  footerPopup.classList.toggle('footer__popup-active');
})

closeModal.addEventListener('click', () => {
  footerPopup.classList.toggle('footer__popup-unactive');
})

modalBtn.addEventListener('click', () => {
  footerPopup.classList.toggle('footer__popup-unactive');
})