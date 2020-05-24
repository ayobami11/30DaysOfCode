let hamburger = document.getElementById('hamburger');
let hamburgerSection = document.getElementById('hamburger-section');

let email = document.getElementById('email');
let submitBtn = document.getElementById('submit');
let result = document.getElementById('result');

// Event handler properties
hamburger.addEventListener('click', displayMenu);
submitBtn.addEventListener('click', checkMail);

function displayMenu() {
    if (hamburger.src.includes('/images/icon-hamburger.svg')) {
        hamburger.src = './images/icon-close.svg';
        hamburgerSection.style.display = 'block';
    } else {
        hamburger.src = './images/icon-hamburger.svg';
        hamburgerSection.style.display = 'none';
    }
}

// Event handler function: Verifies the validity of the email address
function checkMail() {
    if (!email.value.includes('@') || !email.value.endsWith('.com')) {
        result.innerHTML = 'Please insert a valid email';
        email.style.border = '1px solid hsl(0, 100%, 50%)';
        email.style.color = 'hsl(0, 100%, 50%)';
    } else {
        result.innerHTML = '';
    }
}