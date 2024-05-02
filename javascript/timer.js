var timer = document.getElementById("timer");
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var resume = document.getElementById("resume");
var stop = document.getElementById("stop");
var id;
var value = "0";
var s = 0;

function startTimer() {
    timer.textContent = s ;

    s++;

    id = setTimeout(function () {
        startTimer()
    }, 1000);

    start.disabled = true;
    pause.disabled = false;
    resume.disabled = false;
    stop.disabled = false;
}

function pauseTimer() {
    value = timer.textContent;
    clearTimeout(id);
}

function resumeTimer() {
    startTimer();
}

function stopTimer() {
    clearTimeout(id);
    s = 0;
    
    timer.textContent = s ;
    start.disabled = false;
    pause.disabled = true;
    resume.disabled = true;
    stop.disabled = true;
}