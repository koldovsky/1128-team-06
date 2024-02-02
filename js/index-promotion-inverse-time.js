const clockContainer = document.querySelector('.top-collection__inverseclock');
const endOfSaleDate = new Date('2024-02-29T23:59:59'); // Замініть це значення на дату завершення розпродажу

function calculateTimeRemaining() {
  const currentDate = new Date();
  const timeDifference = endOfSaleDate - currentDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  return { days, hours, minutes };
}

function updateTimer() {
  const timeRemaining = calculateTimeRemaining();
  const daysElement = clockContainer.querySelector('#days');
  const hoursElement = clockContainer.querySelector('#hours');
  const minutesElement = clockContainer.querySelector('#minutes');

  daysElement.textContent = timeRemaining.days;
  hoursElement.textContent = timeRemaining.hours;
  minutesElement.textContent = timeRemaining.minutes;
}

setInterval(updateTimer, 1000);
