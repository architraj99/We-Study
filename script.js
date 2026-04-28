let timeLeft = 25 * 60;
let timerInterval = null;
let currentMode = "Focus";
let sessions= 0;

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("timer").innerText = minutes + ":" + seconds;
}

function playSound(){
    let audio = new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg");
    audio.play();
}

function startTimer() {
    if (timerInterval !== null) {
        return;
    }

    document.getElementById("status").innerText = currentMode + "Running";

    timerInterval = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        }
        else {

            clearInterval(timerInterval);
            timerInterval = null;

            playSound();

            if (currentMode === "Focus") {
                sessions++;
                document.getElementById("sessions").innerText = sessions;

                document.getElementById("status").innerText = "Focus completed, Break started";

                setBreakMode();
                startTimer();
            }

            else {
                document.getElementById("status").innerText = "Break's up, Let's Go Champ!!";

                setFocusModel();
            }
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
    document.getElementById("modeDisplay").innerText = "Mode: Focus";

    timeLeft = 25 * 60;
    updateDisplay();
}

function setBreakMode() {
    currentMode = "Break";
    document.getElementById("modeText").innerText = "Break";
    document.getElementById("modeDisplay").innerText = "Mode: Break";

    timeLeft = 5 * 60;
    updateDisplay();
}