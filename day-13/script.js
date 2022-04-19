const priceRangeInput = document.getElementById('price-input');
const pageViewsOutput = document.getElementById('page-views');
const priceRangeOutput = document.getElementById('price-output');
const billingTypeCheckbox = document.getElementById('billing-type');

const pricing = [
    { pageViews: '10k', cost: 8 },
    { pageViews: '50k', cost: 12 },
    { pageViews: '100k', cost: 16 },
    { pageViews: '500k', cost: 24 },
    { pageViews: '1m', cost: 36 }
];

const handlePriceDiscount = () => {
    const { cost } = pricing[priceRangeInput.value];

    priceRangeOutput.innerHTML = billingTypeCheckbox.checked
        ? cost - (cost * 25) / 100
        : cost;
}

priceRangeInput.addEventListener('change', ({ target }) => {
    const { pageViews } = pricing[target.value];

    pageViewsOutput.innerHTML = pageViews;

    handlePriceDiscount();
});

// Controls the background of the region covered for the range input
priceRangeInput.addEventListener('input', ({ target }) => {
    const { min, max, value } = target;

    target.style.backgroundSize = `${
        ((value - min) * 100) / (max - min)
    }% 100%`;
});

billingTypeCheckbox.addEventListener('change', handlePriceDiscount);

