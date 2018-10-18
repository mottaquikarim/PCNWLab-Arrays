/* 1
    @func getRange
    @param {array} arr1
    @param {number} min
    @param {number} max
    @returns {array}
    @desc - given an array and a range, return all the 
            elements in the array that fall within the range.
            The min and max is inclusive. 
            Min and Max is represented by the element number,
            not the index number.

    @example - getRange([1,2,3,4,5], 1, 3]);  // [1, 2, 3]
    @example - getRange([1,2,3,4,5], 3, 5]);  // [3, 4, 5]
    @example - getRange([1,2,3,4,5], 5, 5]);  // Error: Out of Range
    @example - getRange([1,2,3,4,5], 3, 100]);  // Error: Out of Range
    @example - getRange([1,2,3,4,5], 6, 1]);  // Error: Out of Range

*/

const getRange = (arr1, min, max) => {
    if (max > arr1.length || min > arr1.length) return 'Error: Out of Range';
    if (min > max) return 'Error: Out of Range';
    if (min === max) return 'Error: Out of Range';
    return arr1.slice(min-1, max);
}
//test
console.log('------------getRange test------------');
console.log(getRange([1,2,3,4,5], 1, 3), [1, 2, 3]);
console.log(getRange([1,2,3,4,5], 3, 5), [3, 4, 5]);
console.log(getRange([1,2,3,4,5], 5, 5), 'Error: Out of Range');
console.log(getRange([1,2,3,4,5], 3, 100), 'Error: Out of Range');
console.log(getRange([1,2,3,4,5], 6, 1), 'Error: Out of Range');
console.log(getRange([0,2,3,10,8], 1, 5), [0,2,3,10,8]);

/* 2
    @func insertIntoMiddle
    @param {array} arr1
    @param {array} arr2
    @returns {array}
    @desc - given two arrays, return a combined array, 
            with the second array inserted into the middle  
            of the first array.

    @example - insertIntoMiddle([1,2,3,4,5], ['cat', 'dog']);  // [1, 2, 3, 'cat', 'dog, 4, 5]
    @example - insertIntoMiddle([1,2,3,4,5,6], ['cat', 'dog']);  // [1, 2, 3, 'cat', 'dog, 4, 5, 6]
*/

const insertIntoMiddle = (arr1, arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return 'invalid input';
    const midIndex = Math.ceil(arr1.length /2);
    const half1 = arr1.slice(0, midIndex);
    const half2 = arr1.slice(midIndex);
    return half1.concat(arr2).concat(half2);
}
//test
console.log('------------insertIntoMiddle test------------');
console.log('if arr1 or arr2 is missing => return invalid input', insertIntoMiddle([1,2]) === 'invalid input');
console.log('if arr1 or arr2 is missing => return invalid input', insertIntoMiddle('wtf TDD', [0]) === 'invalid input');
console.log(insertIntoMiddle([1,2,3,4,5], ['cat', 'dog']), [1, 2, 3, 'cat', 'dog', 4, 5]);
console.log(insertIntoMiddle([1,2,3,4,5,6], ['cat', 'dog']), [1, 2, 3, 'cat', 'dog', 4, 5, 6]);

/* 3
    @func reverseArr
    @param {array} arr
    @returns {array}
    @desc - given an array of numbers, return back the contents of the 
            array in reverse order. 
            !Important: You may not use the arr.reverse() method.
            !Important: You may not use any form of loops

    @example - reverseArr([1,2,3,4,5]);  // [5,4,3,2,1]
*/




/* 4
    @func reversedRangeMasher
    @param {array} arr1
    @param {array} arr2
    @param {array} min
    @param {array} max

    @returns {array}
    @desc - given two arrays, take the second array and reverse the elements. 
            Get the range of the first array, and insert the reversed array  
            into the middle of the range of the first array.

    @example - reversedRangeMasher([1,2,3,4,5], ['cat', 'dog'], 3, 5);  // [3, 4, 'god', 'tac', 5]
    @example - reversedRangeMasher([1,2,3,4,5], ['hello', 'world'], 1, 5);  // [1, 2, 3, 'dlrow', 'olleh', 4, 5]

*/



