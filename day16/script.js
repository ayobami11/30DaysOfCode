let modalBtn = document.getElementById('modal-btn');
let modalBox = document.getElementById('modal-box');
let closeBtn = document.getElementById('close-btn');

// Events to be triggered when the specified buttons are clicked
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

// Event handler function to display the modal box
function openModal () {
    modalBox.style.display = 'block';
}

// Event handler function to close the modal box
function closeModal() {
    modalBox.style.display = 'none';
}