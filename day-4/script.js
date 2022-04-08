/**
 * 
 * @param {Array} array an array of objects where each object contains three properties with keys: name, age, and level
 * @returns {Array} an array of strings where each string is a concatenated form of all the object values separated by a '/'
 */
const objectValuesToString = array => {
    const objectKeys = array.map(object => Object.keys(object));

    /**
     * Checks the validity of each object in the array by first ensuring all the objects have 3 properties using the object keys.
     * It then iterates through each of the object keys to ensure the 3 keys are 'name', 'age' and 'level'.
     */
    const isInputValid = objectKeys.every(
        keys =>
            keys.length === 3 &&
            keys.every(key => ['name', 'age', 'level'].includes(key))
    );

    if (!isInputValid) {
        return 'Please provide valid properties: name, age, and level, for each object.';
    }

    const objectValues = array.map(object => Object.values(object));

    // Read concatenation is generally faster than join for small strings
    // const arrayOfStrings = objectValues.map(objectValue => objectValue.join('/'));

    const arrayOfStrings = objectValues.map(objectValue => {
        let string = '';

        objectValue.forEach((value, index) => {
            string += `${index === 0 ? '' : '/'}${value}`;
        });

        return string;
    });

    return arrayOfStrings;
};

console.log(
    objectValuesToString([
        { name: 'Ayo', age: 29, level: '400 level' },
        { name: 'Kunle', age: 17, level: '100 level', valid: false },
        { name: 'Yo', age: 32, level: '200 level' }
    ])
);

console.log(
    objectValuesToString([
        { name: 'JS', age: 27, level: '700 level' },
        { name: 'Kunle', age: 17, levela: '100 level' },
        { name: 'Yo', age: 32, level: '200 level' }
    ])
);

console.log(
    objectValuesToString([
        { name: 'JS', age: 27, level: '700 level' },
        { name: 'Kunle', age: 17, level: '100 level' },
        { name: 'Yo', age: 32, level: '200 level' }
    ])
);
