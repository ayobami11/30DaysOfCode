/**
 * Tests the palindromicity of each element in an array.
 *
 * @param {Array} array an array of strings
 * @returns {Array} an array of booleans indicating if the string at that index in the array is palindromic or not
 */
const areStringsPalindromes = array => {
    const isArrayValid =
        Array.isArray(array) &&
        array.every(element => typeof element === 'string');

    if (!isArrayValid) return 'Provide provide an array of strings.';

    const areStringsPalindromic = array.map(string => {
        // not so efficient
        // const reversedString = string.split('').reverse().join('');

        let reversedString = '';

        for (let i = string.length - 1; i >= 0; i -= 1) reversedString += string[i];

        return string.trim().toLowerCase() === reversedString.trim().toLowerCase();
    });

    return areStringsPalindromic;
};

console.log(
    areStringsPalindromes([
        'racecar',
        'abcd',
        'bab',
        'kala',
        'madam',
        'carac'
    ])
);

console.log(areStringsPalindromes(['bad', 'evil', 'good']));
console.log(areStringsPalindromes(['bad', 99, 'good']));
console.log(areStringsPalindromes(['time', 'null', 'peep']));
console.log(areStringsPalindromes(['sailboat', 'truck', 'codec']));
