let hamburger = document.getElementById('hamburger');
let hamburgerSection = document.getElementById('hamburger-section');

hamburger.addEventListener('click', displayMenu);

function displayMenu() {
    if (hamburger.src.includes('/images/icon-hamburger.svg')) {
        hamburger.src = './images/icon-close.svg';
        hamburgerSection.style.display = 'block';
    } else {
        hamburger.src = './images/icon-hamburger.svg';
        hamburgerSection.style.display = 'none';
    }
}