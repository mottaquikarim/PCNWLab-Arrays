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
   if (min == max || min > max || max > arr1.length ){
       return "Error: Out of Range"; 
   }
       return arr1.slice(min-1,max);  
}

console.log(getRange([1,2,3,4,5], 1, 3));
console.log(getRange([1,2,3,4,5], 3, 5));
console.log(getRange([1,2,3,4,5], 5, 5));
console.log(getRange([1,2,3,4,5], 3, 100));
console.log(getRange([1,2,3,4,5], 6, 1));
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
   let firstArr = arr1.slice(0,Math.ceil(arr1.length/2));
   let secondArr = arr2.slice(0,Math.ceil(arr2.length/2));
   let combineArr1 = firstArr.concat(arr2);
   let combineArr2 = combineArr1.concat(secondArr)
   return combineArr2
}
console.log(insertIntoMiddle([1,2,3,4,5], ['cat', 'dog']));


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

const reverseArr = str => {
    return str.reverse();

}
console.log(reverseArr([1,2,3,4,5]));



const reverseArr1 = str => {
   return  str.sort(function(a, b) {
    return b - a;
  });
   
}
console.log(reverseArr1([1,2,3,4,5]));
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
        const firstArray = arr1.slice(0,Math.ceil(arr1.length/2));
        const secondArray = arr2.reverse();
        const firstReversed = firstArray.reverse([0]);

        return ` ${firstArray} ${secondArray} ${firstReversed}`;
   }
console.log(reversedRangeMasher([1,2,3,4,5], ['cat', 'dog'], 3, 5));

