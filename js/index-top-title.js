const title=document.querySelector('.title');
function blinkText() {
title.classList.toggle('highlight');
}
setInterval(blinkText,1000);
