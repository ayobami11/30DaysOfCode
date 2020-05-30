let passage = document.getElementById('passage');
let countBtn = document.getElementById('count-btn');
let instruction = document.getElementById('instruction');
let wordsElement = document.getElementById('words-element');
let sentencesElement = document.getElementById('sentences-element');
let results = document.getElementById('results');

// Removes any default text in the textarea element if any
passage.value = '';

// Event handler
countBtn.addEventListener('click', passageCount);

// Event handler function
function passageCount() {
    if (!passage.value) {
        wordsElement.innerHTML = '';
        sentencesElement.innerHTML = '';
        results.classList.remove('result-style');
        instruction.innerHTML = 'Please type in some text.';
    } else {
        instruction.style.display = 'none';
        results.classList.add('result-style');

        // Counts the number of words
        const words = passage.value.split(' ');
        const wordCount = words.length;
        wordsElement.innerHTML = `Word count: ${wordCount}`;

        // Counts the number of sentences
        let sentenceCount = [];
        const sentences = words.filter(element => {
        if ((element.endsWith('.') || element.endsWith('!') || element.endsWith('?')) === true) {
            sentenceCount.push(element);
        }
        });
        sentenceCount = sentenceCount.length;
        sentencesElement.innerHTML = `Sentence count: ${sentenceCount}`;
    }
}