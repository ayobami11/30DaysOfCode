/**
 * Checks if any two numbers (with distinct indices) in an array sum to give the target number
 *
 * @param {Array} array an array of numbers
 * @param {Number} target a target number
 * @returns {Array} an array of 2 indices representing the 2 numbers found || [-1, -1] if the
 *  sum cannot be obtained from any 2 numbers present in the array
 *
 */
const sumToTarget = (array, target) => {
    const isInputValid =
        Array.isArray(array) &&
        typeof target === 'number' &&
        isFinite(target) &&
        array.every(number => typeof number === 'number' && isFinite(number));

    if (!isInputValid)
        return 'Please provide an array of finite numbers as the first argument, and a finite number as the second argument.';

    // used object destructuring so I could easily get the numbers at the end of the array
    const {
        0: lowestNumber,
        1: secondLowestNumber,
        [array.length - 2]: secondHighestNumber,
        [array.length - 1]: highestNumber
        // created a copy by spreading the array to avoid mutating the original input array
    } = [...array].sort((a, b) => a - b);

    const isNumberInRange =
        target >= lowestNumber + secondLowestNumber &&
        target <= secondHighestNumber + highestNumber;

    // output when no 2 numbers provide the sum needed
    const resultNotFound = [-1, -1];

    if (!isNumberInRange) return resultNotFound;

    for (let i = 0; i < array.length; i += 1) {
        for (let j = 0; j < array.length; j += 1) {
            // skips iteration if indices match to ensure each number (with the same index) can be used only once
            if (i === j) continue;

            if (array[i] + array[j] === target) return [i, j];
        }
    }

    return resultNotFound;
};

console.log(sumToTarget([1, 9, 4, 5, 3, 0], 10));
console.log(sumToTarget([2, 5, 9, 6, 1, 53, 45], 47));
console.log(sumToTarget([4, 9, 3, 5, 0, 14, 10], 100));
console.log(sumToTarget([2, 5, 8 * 4, 6, 1, 53, 45, 3], 38));
console.log(sumToTarget([4, 9, 3, 5, 0, 14, Infinity], 24));
console.log(sumToTarget([43, 13, NaN, 11, 32], 24));
