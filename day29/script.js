let hamburger = document.getElementById('hamburger');
let hamburgerSection = document.getElementById('hamburger-section');
let mainContent = document.getElementById('main-content');

// Event handler
hamburger.addEventListener('click', displayMenu);

// Event handler function for displaying the hamburger menu
function displayMenu() {
    if (hamburger.src.includes('/images/icon-hamburger.svg')) {
        hamburger.src = './images/icon-close.svg';
        hamburgerSection.style.display = 'block';
        mainContent.style.display = 'none';
        
    } else {
        hamburger.src = './images/icon-hamburger.svg';
        hamburger.style.display = 'block';
        hamburgerSection.style.display = 'none';
        mainContent.style.display = 'block';
    }
}