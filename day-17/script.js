const quoteId = document.getElementById('quote-id');
const quote = document.getElementById('quote');
const quoteBtn = document.getElementById('quote-btn');

const modeInput = document.getElementById('mode-input');

// immediately invoked function: detects the user's preferred mode (light or dark)
(function detectPreferredMode() {
    if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
        modeInput.checked = true;
    } else {
        body.classList.add('light-mode');
    }
})();

const handleThemeChange = () => document.body.classList.toggle('light-mode');

modeInput.addEventListener('change', handleThemeChange);

// Makes a get request to an API and attaches the result to the DOM, each time the button is clicked.
const getAdviceData = async () => {
    const endpoint = 'https://api.adviceslip.com/advice';

    try {
        const response = await fetch(endpoint);

        if (response.ok) {
            const {
                slip: { id, advice }
            } = await response.json();

            // sets the cite attribute of the blockquote element
            quote.cite = `${endpoint}/${id}`;

            quoteId.innerHTML = `Advice #${id}`;
            quote.innerHTML = advice;
        } else {
            throw new Error('Invalid response.');
        }
    } catch {
        quote.innerHTML =
            'Something went wrong. Please try again. <em>Get it?!</em>';
    } finally {
        quote.classList.remove('hide');
    }
};

// fetches initial data on pageload
getAdviceData();

// fetches new advice every 10 seconds
setInterval(getAdviceData, 10000);

quoteBtn.addEventListener('click', getAdviceData);
