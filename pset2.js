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
const getRange = (arr1,min,max) => {
    arr1.sort();
    if (arr1.includes(min) !== true || arr1.includes(max) !== true) return 'Error: Out of range!'
    let a = arr1.indexOf(min);
    let b = arr1.indexOf(max + 1);
    return arr1.slice(a,b);
}
console.log(getRange([1,2,3,4,5,6,7,8],2,6))


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
const insertIntoMiddle = (arr1,arr2) => {
    let arr1FirstHalf = arr1.slice(0,Math.floor(arr1.length/2));
    let arr1SecondHalf = arr1.slice(Math.floor(arr1.length/2));
    let nArray = arr1FirstHalf.concat(arr2);
    nArray = nArray.concat(arr1SecondHalf);
    return nArray;
}
console.log(insertIntoMiddle([1,2,3,4,5,6,7,8,9],['dog','cat','bird']))


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
const reverseArr = arr1 => arr1.map((current, index, arr1) => arr1[arr1.length - 1 - index])
 console.log(reverseArr([1, 2, 3, 4, 5])); 


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
const reversedRangeMasher = (arr1,arr2,min,max) => {
    let arr1Range = getRange(arr1,min,max);
    let arr2Reversed = reverseArr(arr2)
    arr2Backwards = arr2Reversed.map((current,index) => arr2Reversed[index].split('').reverse().join(''))
    return insertIntoMiddle(arr1Range,arr2Backwards);  
}
console.log(reversedRangeMasher([1,2,3,4,5],['cat','dog'],1,3))
