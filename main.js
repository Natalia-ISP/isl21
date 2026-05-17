const time = document.getElementById("timeD");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let hours = 0;
let minutes = 0;
let seconds = 0;
let run = false;
let timer = null;

function formatTime() {
    const secondsForm = String(seconds).padStart(2, "0");
    const minutesForm = String(minutes).padStart(2, "0");
    const hoursForm = String(hours).padStart(2, "0");
    return `${hoursForm}:${minutesForm}:${secondsForm}`;
}
function updateTimer() {
    time.textContent = formatTime();
}

function updateTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    updateTimer();
}

function startTimer() {
    if (!run) {
        run = true;
        timer = setInterval(updateTime, 1000);
    }
}

function stopTimer() {
    if (run) {
        run = false;
        clearInterval(timer);
        timer = null;
    }
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateTimer();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

document.addEventListener("DOMContentLoaded", function() {
    updateTimer();
});