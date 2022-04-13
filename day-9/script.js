/**
 * Creates a Pascal's triangle with a specified number of rows.
 *
 * @param {Number} numOfRows a positive integer
 * @returns A nested array where each element array represents a row in a Pascal's triangle
 */
const createPascalTriangle = numOfRows => {
    const isNumberValid = typeof numOfRows === 'number' && isFinite(numOfRows) && numOfRows >= 0;

    if (!isNumberValid) return 'Please provide a positive, finite number.';

    let pascalTriangleArray = [];

    if (numOfRows === 0) return pascalTriangleArray;

    pascalTriangleArray = [...pascalTriangleArray, [1]];
    if (numOfRows === 1) return pascalTriangleArray;

    pascalTriangleArray = [...pascalTriangleArray, [1, 1]];
    if (numOfRows === 2) return pascalTriangleArray;

    while (pascalTriangleArray.length < numOfRows) {
        const { [pascalTriangleArray.length - 1]: previousRow } =
            pascalTriangleArray;

        let currentRow = [];

        for (let i = 0; i < previousRow.length - 1; i += 1) {
            // sums the current number with the next number in the array
            currentRow = [...currentRow, previousRow[i] + previousRow[i + 1]];

            // if it is last iteration for a row, 1 is added to the start and end of the array
            if (i === previousRow.length - 2) currentRow = [1, ...currentRow, 1];
        }

        pascalTriangleArray = [...pascalTriangleArray, currentRow];
    }

    return pascalTriangleArray;
};

console.log(createPascalTriangle(Infinity));
console.log(createPascalTriangle(0));
console.log(createPascalTriangle(1));
console.log(createPascalTriangle(3));
console.log(createPascalTriangle(NaN));
console.log(createPascalTriangle(4));
console.log(createPascalTriangle(21));
