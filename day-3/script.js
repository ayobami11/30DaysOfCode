/**
 *
 * @param {Array} numbers an array of positive integers
 * @returns {Array} a nested array containing a fizzbuzzed array for each element
 */
const fizzBuzzArrays = numbers => {
    // checks if all elements in the array are numbers
    if (
        // isFinite also handles NaN values as NaN is not finite
        !numbers.every(number => typeof number === 'number' && isFinite(number))
    ) {
        return 'Please provide an array containing only positive integers.';
    }

    let nestedFizzBuzzArray = [];

    /**
     *  Creates a fizzBuzzed array of n elements
     *
     * @param {Number} n a postive integer
     * @returns {Array} a FizzBuzzed array
     */
    const makeFizzBuzzArray = n => {
        if (n < 0 || typeof n !== 'number') {
            return 'Please provide a positive integer.';
        }

        let fizzBuzzArray = [];

        for (let i = 1; i < n + 1; i += 1) {
            const string = `${i % 3 === 0 ? 'Fizz' : ''}${
                i % 5 === 0 ? 'Buzz' : ''
            }`;

            fizzBuzzArray.push(string || i);
        }

        return fizzBuzzArray;
    };

    numbers.forEach(number =>
        nestedFizzBuzzArray.push(makeFizzBuzzArray(number))
    );

    return nestedFizzBuzzArray;
};

console.log(fizzBuzzArrays([4, 34, NaN]));
console.log(fizzBuzzArrays([12, 22, Infinity]));
// forEach ignores "holes" in sparse arrays
console.log(fizzBuzzArrays([4, 3, 43, , 33]));
console.log(fizzBuzzArrays([2, 3, 5]));