const dayCount = document.getElementById('day-count');
let result = document.querySelector('#result');

//Event to be triggered when the button is clicked
dayCount.addEventListener('click', countDays);

//Event handler function
function countDays() {
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;
    result.style.border = '2px solid black';

    // This line of code ensures the input value is within the given range
    if ((month >= 1 && month <= 12) && (year >= 1000 && year <= 9999)) {
    const inputDate = new Date(year, month, 0).getDate();
    //This switch block changes the value of the month variable based on the input value
    switch (month) {
        case '1': month = 'January';
            break;
        case '2': month = 'February';
            break;
        case '3': month = 'March';
            break;
        case '4': month = 'April';
            break;
        case '5': month = 'May';
            break;
        case '6': month = 'June';
            break;
        case '7': month = 'July';
            break;
        case '8': month = 'August';
            break;
        case '9': month = 'September';
            break;
        case '10': month = 'October';
            break;
        case '11': month = 'November';
            break;
        case '12': month = 'December';
            break;
    }

    result.innerHTML = `The number of days in ${month}, ${year} is <span class="bold">${inputDate}</span>.`;
    } else {
        result.innerHTML = 'Please type in a valid input.<p>Valid inputs for the "month" range between <span class="bold">1</span> and <span class="bold">12</span>, and the "year" ranges between <span class="bold">1000</span> and <span class="bold">9999</span>.</p>';
    }
}