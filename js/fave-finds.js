const tabTogglers = document.querySelectorAll('.tab__toggler');
let currentIndex=0;
let intervalId;

function toggleRadioButton() {
    tabTogglers[currentIndex].checked = false;
    currentIndex = (currentIndex + 1) % tabTogglers.length;
    tabTogglers[currentIndex].checked = true;
  }

  function startLoop() {
    intervalId = setInterval(toggleRadioButton, 1000);
  }

  function pauseLoop() {
    clearInterval(intervalId);
  }

  // Start the loop
startLoop();

const labels = document.querySelectorAll('.tabs__label');
    labels.forEach(function(label) {
      label.addEventListener('mouseover', pauseLoop);
      label.addEventListener('mouseout', startLoop);
    });

const categoryContent = document.querySelectorAll('.category-content');
    categoryContent.forEach(function(content) {
      content.addEventListener('mouseover', pauseLoop);
      content.addEventListener('mouseout', startLoop);
    });


