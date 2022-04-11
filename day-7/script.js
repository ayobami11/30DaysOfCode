/**
 * Sorts an array of numbers in ascending order.
 *
 * @param {Array} numbers an array of numbers
 * @returns {Array} the sorted array of numbers
 */
const sortNumberAsc = numbers => {
    const areNumbersFinite =
        Array.isArray(numbers) &&
        numbers.every(number => typeof number === 'number' && isFinite(number));

    if (!areNumbersFinite) return 'Please provide an array of finite numbers.';

    // copies 'numbers' array parameter so as to avoid modifying it
    let unsortedNumbers = [...numbers];

    let sortedNumbers = [];

    while (unsortedNumbers.length > 0) {
        const lowestNumber = Math.min(...unsortedNumbers);

        sortedNumbers = [...sortedNumbers, lowestNumber];

        unsortedNumbers = unsortedNumbers.filter(
            number => number !== lowestNumber
        );
    }

    return sortedNumbers;
};

console.log(sortNumberAsc([1, 9, 4, 5, 3, 0]));
console.log(sortNumberAsc([2, 5, 9, 6, 1, 53, 45]));
console.log(sortNumberAsc([4, 9, -3, 5, 0, -14, 10]));
console.log(sortNumberAsc([44, 31, 41, 1, 3, 56]));
console.log(sortNumberAsc([44, 31, 41, 1, 3, NaN]));
console.log(sortNumberAsc([-1, -49, 91, 32, 76]));
console.log(sortNumberAsc([0.4, 2, Infinity, 1, 3]));
console.log(sortNumberAsc([-5.5, 34, 31, 20, 0.3, -56]));
