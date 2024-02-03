const title = document.querySelector(".title");
function blinkText() {
  title.classList.toggle("highlighted-text");
}
setInterval(blinkText, 1000);
