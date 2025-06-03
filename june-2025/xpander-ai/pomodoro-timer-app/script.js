const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');

let totalSeconds = 25 * 60;
let interval;

function updateTimer() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;
}

startButton.addEventListener('click', () => {
  if (!interval) {
    interval = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        updateTimer();
      } else {
        clearInterval(interval);
        interval = null;
      }
    }, 1000);
  }
});

resetButton.addEventListener('click', () => {
  clearInterval(interval);
  interval = null;
  totalSeconds = 25 * 60;
  updateTimer();
});

updateTimer();