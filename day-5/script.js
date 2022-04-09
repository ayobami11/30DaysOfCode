/**
 * Converts an array of strings into an array of objects with the properties: name, age and level for each object
 * 
 * @param {Array} array an array of strings
 * @returns {Array} an array of objects
 */
const stringToObjectEntries = array => {
    const isArrayValid =
        Array.isArray(array) &&
        array.every(element => typeof element === 'string');

    if (!isArrayValid)
        return 'Please provide an array of strings as the argument.';

    const areStringsValid = array.every(string => {
        const splitStringArray = string.split('/');

        return (
            // counts the number of occurrences of the '/' character
            // implicitly implies that the length of the resulting array is 3
            splitStringArray.length - 1 === 2 &&
            // checks if all elements are truthy (string length > 0)
            splitStringArray.every(element => element)
        );
    });

    if (!areStringsValid)
        return 'Invalid string format. Required format: name/age/level';

    const objectEntriesArray = array.map(string => {
        const [name, age, level] = string.split('/');

        const objectEntries = {
            name,
            // converts to a number, if possible
            age: isNaN(Number(age)) ? age : Number(age),
            level
        };

        return objectEntries;
    });

    return objectEntriesArray;
};
console.log(
    stringToObjectEntries([
        'Ayo/24/300 level',
        'Comrade/two/200 level',
        'Rest/9/100 level'
    ])
);

console.log(
    stringToObjectEntries([
        { prop: 'Solo/24/300 level' },
        'Duo/two/200 level',
        'Trio/9/100 level'
    ])
);

console.log(
    stringToObjectEntries([
        'Ayo/24/',
        'Comrade/two/200 level',
        'Duo/9/100 level'
    ])
);

