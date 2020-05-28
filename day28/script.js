let timerHeader = document.getElementById('timer-header');
let normalTimer = document.getElementById('normal-timer');
let reverseTimer = document.getElementById('reverse-timer');

//This executes the function every 500 milliseconds immediately after the webpage loads
let timer1 = setInterval(timeElapsed, 500);
let timer2 = setInterval(timeLeft, 500);

// Toggle button
let toggleBtn = document.getElementById('toggle-btn');
toggleBtn.addEventListener('click', () => {
    if (normalTimer.style.display === 'block') {
        timerHeader.innerHTML = 'Time Left';
        normalTimer.style.display = 'none';
        reverseTimer.style.display = 'block';
    } else {
        timerHeader.innerHTML = 'Time Elapsed';
        normalTimer.style.display = 'block';
        reverseTimer.style.display = 'none';
    }
});

// Calculates the time elapsed on the timer
function timeElapsed() {
let startDate = new Date(2020, 02, 25).getTime();
let todayDate = new Date().getTime();

let dayCount = todayDate - startDate;

let seconds = Math.floor((dayCount % (1000 * 60)) / 1000);
seconds = addZero(seconds);
let minutes = Math.floor((dayCount % (1000 * 60 * 60)) / (1000 * 60));
minutes = addZero(minutes);
let hours = Math.floor((dayCount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
hours = addZero(hours);
let days = Math.floor(dayCount / (1000 * 60 * 60 * 24));

if (days === 100) {
    clearInterval(timer1);
}

normalTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Calculates the time left on the timer
function timeLeft() {
    let startDate = new Date(2020, 06, 02).getTime();
    let todayDate = new Date().getTime();
    
    let dayCount = startDate - todayDate;
    
    let seconds = Math.floor((dayCount % (1000 * 60)) / 1000);
    seconds = addZero(seconds);
    let minutes = Math.floor((dayCount % (1000 * 60 * 60)) / (1000 * 60));
    minutes = addZero(minutes);
    let hours = Math.floor((dayCount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hours = addZero(hours);
    let days = Math.floor(dayCount / (1000 * 60 * 60 * 24));
    
    if (dayCount <= 0) {
        clearInterval(timer2);
    }
    
    reverseTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

// Prepends '0' to the beginning of a number if the number is less than 10
function addZero(x) {
    if (x < 10) {
        x = '0' + x;
    }
    return x;
}