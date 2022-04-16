const dialog = document.getElementById('dialog');
const submitBtn = document.getElementById('submit-btn');

// converts list of elements from an HTML collection to an array
const radioInputs = [...document.getElementsByClassName('rating-input')];

radioInputs.forEach(input =>
    input.addEventListener('change', ({ target }) => {
        submitBtn.value = target.value;
    })
);

// opens the modal as soon as the page is loaded
if (typeof dialog?.showModal === 'function') dialog.showModal();

dialog.addEventListener('close', ({ target }) => {
    const section = document.getElementById('section');
    const output = document.getElementById('output');

    // the dialog returnValue is the value of the submit button that closes it
    output.innerHTML = target.returnValue;
    section.classList.toggle('hide');
});
