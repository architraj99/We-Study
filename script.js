let timeLeft = 25 * 60;
let timerInterval = null;

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("timer").innerText = minutes + ":" + seconds;
}

function startTimer() {
    if (timerInterval !== null) {
        return;
    }

    document.getElementById("status").innerText = "Running";

    timerInterval = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        }
        else {

            clearInterval(timerInterval);
            timerInterval = null;

            document.getElementById("status").innerText = "Time's Up";
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;

    document.getElementById("status").innerText = "Paused";
}