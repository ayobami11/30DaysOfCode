/**
 * Accepts 2 sorted arrays of numbers and then sorts and merges them into a single array.
 *
 * @param {Array} arr1 a sorted array of numbers
 * @param {Array} arr2 a sorted array of numbers
 * @returns a sorted merge of the two arrays
 */
const mergeSortedArrays = (arr1, arr2) => {
    const areArraysValid =
        Array.isArray(arr1) &&
        Array.isArray(arr2) &&
        arr1.every(number => typeof number === 'number' && !isNaN(number)) &&
        arr2.every(number => typeof number === 'number' && !isNaN(number));

    if (!areArraysValid)
        return 'Please provide two arrays containing valid numbers only.';

    const sortedArr = [];

    let i = 0; // iteration variable for arr1
    let j = 0; // iteration variable for arr2

    /**
     * On each iteration of the while loop:
     * Starting at index 0, the elements of the 2 arrays are compared and then the element with the smaller value is pushed to the sortedArr array.
     * The index of the element just pushed is then incremented (using the corresponding iteration variable of the array) and then the 
     * elements from the 2 arrays are compared again until one of the arrays is exhausted.
     * Once this happens, the remaining elements, if any, in the unexhausted array is then pushed to the sortedArr array.
     */

    while (sortedArr.length < arr1.length + arr2.length) {
        if (i === arr1.length) {
            while (j < arr2.length) sortedArr.push(arr2[j++]);
        } else if (j === arr2.length) {
            while (i < arr1.length) sortedArr.push(arr1[i++]);
        } else {
            sortedArr.push(arr1[i] <= arr2[j] ? arr1[i++] : arr2[j++]);
        }
    }

    return sortedArr;
};

console.log(mergeSortedArrays([1, 4, 7, 8], [2, 3, 4]));
console.log(mergeSortedArrays([], [2, 4, 9]));
console.log(mergeSortedArrays([1, 2, 7, 8], [2, 5, 9, 14]));

console.log(mergeSortedArrays([1, 2, 5], [3, 4, 6]));
console.log(
    mergeSortedArrays(
        [0.2, 0.5, 1.3, 2.4, 5.5, 8.9, 11.52, 22.3, 24, 25, 26.5, 34, 67],
        [4, 9, 10, 11, 12, 13, 14, 15]
    )
);
console.log(
    mergeSortedArrays(
        [3, 4, 5, 9, 12, 19, 22, 25, 26, 34],
        [5, 8, 11, 15, 16, 29, 34, 38]
    )
);
console.log(
    mergeSortedArrays(
        [-35, -29, -28, -21, -12, -5, -1, 23, 34, 39, 41, 42, 45],
        [2, 3, 5, 7, 8, 9, 11, 15]
    )
);
console.log(
    mergeSortedArrays(
        [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
        [1, 3, 5, 7, 9, 11, 13, NaN]
    )
);
