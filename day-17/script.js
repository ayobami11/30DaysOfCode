const quoteId = document.getElementById('quote-id');
const quote = document.getElementById('quote');
const quoteBtn = document.getElementById('quote-btn');

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
    } catch (error) {
        quote.innerHTML = 'Something went wrong. Please try again.';
    } finally {
        quote.classList.remove('hide');
    }
};

// fetches initial data on pageload
getAdviceData();

// fetches new advice every 10 seconds
setInterval(getAdviceData, 10000);

quoteBtn.addEventListener('click', getAdviceData);
