let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");

function timer(secounds) {

  //clear any existing timers
  clearInterval(countdown)

  const now = Date.now();
  const then = now + secounds * 1000;
  displayTimeLeft(secounds);
  displayEndTime(then);
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    //Check if we should stop it!
    if (secondsLeft <= 0) {
      clearInterval(countdown);
      return;
    }
    //display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(secounds) {
  const minutes = Math.floor(secounds / 60);
  const remainderSecounds = secounds % 60;
  const display = `${minutes}:${
    remainderSecounds < 10 ? "0" : ""
  }${remainderSecounds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}

function startTimer() {
  const secounds = parseInt(this.dataset.time);
  timer(secounds);
}
buttons.forEach((button) => button.addEventListener("click", startTimer));
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
  });
  
