let timeLeft = 25 * 60;
let timerInterval = null;
let currentMode = "Focus";

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

    document.getElementById("status").innerText = currentMode + "_" + "Running";

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

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;

    if (currentMode === "Focus") {
    timeLeft = 25 * 60;
    }
    else {
        timeLeft = 5 * 60;
    }

    updateDisplay();

    document.getElementById("status").innerText = "Reset Done";

}

function setFocusMode() {
    currentMode = "Focus";
    document.getElementById("modeText").innerText = "Focus";

    resetTimer();
}

function setBreakMode() {
    currentMode = "Break";
    document.getElementById("modeText").innerText = "Break";

    resetTimer();
}