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
    if(min > max || max > arr1.length || min == max)
        return "Error: Out of Range";
    else{
        return arr1.slice(min-1,max);
    }
}
console.log("---getRange---")//New line for organization
console.log("[1,2,3,4,5] Range of 1 to 3: " + getRange([1,2,3,4,5], 1, 3));
console.log("[1,2,3,4,5] Range of 3 to 5: " + getRange([1,2,3,4,5], 3, 5));
console.log("[1,2,3,4,5] Range of 5 to 5: " + getRange([1,2,3,4,5], 5, 5));
console.log("[1,2,3,4,5] Range of 3 to 100: " + getRange([1,2,3,4,5], 3, 100));
console.log("[1,2,3,4,5] Range of 6 to 100: " + getRange([1,2,3,4,5], 6, 1));
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
    const mid1 = arr1.slice(0,Math.ceil(arr1.length/2));
    const mid2 = arr1.slice(Math.ceil(arr1.length/2),arr1.length);
    let newArr = mid1.concat(arr2);
    let newArr2 = newArr.concat(mid2);
    return newArr2
}
console.log("\n---insertIntoMiddle---")//New line for organization
console.log("Combining ['cat','dog'] into the middle of [1,2,3,4,5]: \n" + insertIntoMiddle([1,2,3,4,5], ['cat', 'dog']));
console.log("Combining ['cat','dog'] into the middle of [1,2,3,4,5,6]: \n" + insertIntoMiddle([1,2,3,4,5,6], ['cat', 'dog']));
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
console.log("\n---reverseArr---")//New line for organization
const reverseArr = arr => arr.sort(function(a,b){return b-a});
console.log("[1,2,3,4,5] reversed is " +reverseArr([1,2,3,4,5]))
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
    const revArr2 = arr2.toString().split("");
    let rev = revArr2.reverse().join("");
    const newArr1 = arr1.slice(min-1,max);
    const mid1 = newArr1.slice(0,Math.ceil(newArr1.length/2));
    const mid2 = newArr1.slice(Math.ceil(newArr1.length/2),max);
    const comArr1 = mid1.concat(rev);
    const comArr2 = comArr1.concat(mid2);
    return comArr2;
}
console.log("\n---reversedRangeMasher---")//New line for organization.
console.log("Mashed reverse of ['dog','cat'] into [1,2,3,4,5] from position 3 to 5\n" + reversedRangeMasher([1,2,3,4,5], ['dog','cat'],3,5));
console.log("Mashed reverse of ['hello','world' into [1,2,3,4,5] from position 1 to 5\n" + reversedRangeMasher([1,2,3,4,5], ['hello', 'world'], 1, 5));