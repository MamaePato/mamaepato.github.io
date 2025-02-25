const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');
const progressBar = document.getElementById('progress-bar');
const progressPercentage = document.getElementById('progress-percentage');

const targetDate = new Date(new Date().getFullYear(), 3, 1).getTime();

function timer() {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor((distance / 1000 / 60 / 60) % 24);
    const minutes = Math.floor((distance / 1000 / 60) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    Days.innerHTML = days < 10 ? '0' + days : days;
    Hours.innerHTML = hours < 10 ? '0' + hours : hours;
    Minutes.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    Seconds.innerHTML = seconds < 10 ? '0' + seconds : seconds;

    if (distance < 0) {
        Days.innerHTML = "00";
        Hours.innerHTML = "00";
        Minutes.innerHTML = "00";
        Seconds.innerHTML = "00";
    }

    updateProgressBar();
}

function updateProgressBar() {
    const total = 138;
    const current = 2;
    const percentage = (current / total) * 100;
    progressBar.style.width = percentage + '%';
    progressPercentage.innerHTML = percentage.toFixed(2) + '%';
}

setInterval(timer, 1000);
