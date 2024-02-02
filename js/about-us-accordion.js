// Accordion
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');

  header.addEventListener('click', () => {
    accordionItems.forEach(otherItem => {
      if (otherItem !== item && otherItem.classList.contains('active')) {
        otherItem.classList.remove('active');
        otherItem.querySelector('.accordion-content').style.maxHeight = '0';
        resetSvgRotation(otherItem);
      }
    });

    item.classList.toggle('active');

    const content = item.querySelector('.accordion-content');
    if (item.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = '0';
    }

    rotateSvg(item);
  });
});

function rotateSvg(item) {
  const svgElement = item.querySelector('svg');

  if (svgElement) {
    let currentRotation = parseInt(svgElement.getAttribute('data-rotation') || 0, 10);
    const newRotation = currentRotation + 180;

    svgElement.setAttribute('data-rotation', newRotation);
    svgElement.style.transform = `rotate(${newRotation}deg)`;
  }
}

function resetSvgRotation(item) {
  const svgElement = item.querySelector('svg');

  if (svgElement) {
    svgElement.setAttribute('data-rotation', 0);
    svgElement.style.transform = 'rotate(0deg)';
  }
}



// clock

const clockElement = document.getElementById("clock");

  // Refresh your watch every second
  setInterval(() => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    const timeString = `${hours}:${minutes}:${seconds}`;
    clockElement.textContent = timeString;
  }, 1000);
