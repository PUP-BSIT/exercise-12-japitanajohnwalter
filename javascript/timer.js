let timer = document.getElementById("timer");
let start = document.getElementById("start");
let pause = document.getElementById("pause");
let resume = document.getElementById("resume");
let stop = document.getElementById("stop");
let id;
let value = "0";
let s = 0;

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