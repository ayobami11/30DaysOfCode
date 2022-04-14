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

    let sortedArr = [];

    let i = 0;
    let j = 0;

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
