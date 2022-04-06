/**
 *  Prints numbers from 1 to n and replaces n with a FizzBuzz string where appropriate
 *
 * @param {Number} n a postive integer
 * @returns {String} a FizzBuzzed string
 */
const fizzBuzz = n => {
    if (n < 0 || typeof n !== 'number') {
        return 'Please provide a positive integer.';
    }

    let fizzBuzzArray = [];

    for (let i = 1; i < n + 1; i += 1) {
        const string = `${i % 3 === 0 ? 'Fizz' : ''}${i % 5 === 0 ? 'Buzz' : ''}`;

        fizzBuzzArray.push(string || i);
    }

    const output = fizzBuzzArray.join(' ');

    // outputs the result to the html document
    const mainElement = document.getElementById('main');

    mainElement.innerHTML += `<p>Input: ${n}</p>
    <output>Output:<br />${output}</output>`;

    return output;
};

console.log(fizzBuzz(100));
console.log(fizzBuzz(384));
console.log(fizzBuzz());
