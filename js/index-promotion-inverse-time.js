const endOfSaleDate = new Date('2024-02-29T23:59:59');

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
      const timerElement = document.getElementById('timer');
      timerElement.textContent = `Залишилося ${timeRemaining.days} днів, ${timeRemaining.hours} годин, ${timeRemaining.minutes} хвилин до кінця розпродажу.`;
    }

        setInterval(updateTimer, 1000);
