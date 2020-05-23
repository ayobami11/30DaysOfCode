let clock = document.getElementById('clock');

//This executes the function every 500 milliseconds (0.5 seconds) immediately after the webpage loads
setInterval(getTime, 500);

function getTime() {
    //Creates a new Date object
    let time = new Date();
    //Gets the current hour
    let hours = time.getHours();
    hours = addZero(hours);
    //Gets the current minute
    let minutes = time.getMinutes();
    minutes = addZero(minutes);
    // Gets the current second
    let seconds = time.getSeconds();
    seconds = addZero(seconds);

    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

// Prepends '0' to the beginning of a number if the number is less than 10
function addZero(x) {
    if (x < 10) {
        x = '0' + x;
    }
    return x;
}