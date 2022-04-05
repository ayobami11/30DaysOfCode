/**
 *
 * @param {array} array an array of numbers
 * @returns the sum of the numbers in the array
 */
const sumOfArray = array => {
    if (!Array.isArray(array) || array.length === 0) {
        return 'Input must be a valid array with at least one number.';
    }

    const sum = [...array].reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );

    // outputs the result to the html document
    const mainElement = document.getElementById('main');

    mainElement.innerHTML += `
        <p>Inputs: ${array.join(', ')}</p>
        <output>Output: ${sum}</output>
    `;

    return sum;
};

console.log(sumOfArray([1, 43, 62, -23, 226]));
console.log(sumOfArray([1, 22, -252, 5, 9471]));
console.log(sumOfArray());
