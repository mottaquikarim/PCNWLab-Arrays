/* 1
    @func longestArr
    @param {array} arr1
    @param {arrar} arr2
    @returns {array}
    @desc - given two arrays return the longest array
    @example - longestArr([1,2,3,4], ['dog', 'cat']);  // [1, 2, 3, 4]
*/
const longestArr = (arr1,arr2) => arr1.length > arr2.length ? arr1 : arr2;
console.log("Which array is longer? '1,2,3,4' or 'dog,cat': ["+ longestArr([1,2,3,4], ['dog', 'cat']) + ']');
console.log()//New line for organization.
/* 2
    @func arrSwapIndex
    @param {array} arr
    @returns {array}
    @desc - given an array, swap the last and first items
            using INDEX only (not using array methods)
            otherwise return string error
    @example - arrSwapIndex([1,2,3,4]);  // [4,2,3,1]
*/
const arrSwapIndex = arr => {
    let temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    return arr;
}
console.log("[1,2,3,4] First and last swapped with index is [" + arrSwapIndex([1,2,3,4]) + ']');
console.log()//New line for organization.
/* 3
    @func arrSwap
    @param {array} arr
    @returns {array}
    @desc - given an array, swap the last and first items
            using array methods ONLY (not by index)
            otherwise return string
    @example - arrSwap([1,2,3,4]);  // [4,2,3,1]
*/
const arrSwap = arr => {
    let temp = arr[0];
    arr.shift();
    arr.unshift(arr.length)
    arr.pop();
    arr.push(temp);
    return arr;
}
console.log("[1,2,3,4] First and last swapped with method is [" + arrSwap([1,2,3,4]) + ']');
console.log()//New line for organization.
/* 4
    @func combineArr
    @param {array} arr1
    @param {arrar} arr2
    @returns {array}
    @desc - given two arrays return ONE array with
            all the items from both arrays 
    @example - combineArr([1,2,3,4], ['dog', 'cat']);  // [1, 2, 3, 4, 'dog', 'cat']
*/
const combineArr = (arr1,arr2) => arr1.concat(arr2);
console.log("[1,2,3,4] and ['dog','cat'] combined is [" + combineArr([1,2,3,4],['dog','cat']) + ']');
console.log()//New line for organization.
/* 5
    @func getRandomItem
    @param {array} arr1
    @returns {object} 
    @desc - given an array, return one random
            item from the array.
    @example - getRandomItem([1,2,3,4,5,6,7,8]);  // 7
*/
const getRandomItem = arr1 => arr1[Math.floor(Math.random()*8)];
console.log("Random number from array [1,2,3,4,5,6,7,8] is " + getRandomItem([1,2,3,4,5,6,7,8]))
console.log()//New line for organization.
/* 6
    @func getMiddleItem
    @param {array} arr
    @returns {object} 
    @desc - given an array, return the middle element.
            If the array is even in length, return the 
            first "middle item"
    @example - getMiddleItem([1,2,3,4,5,6,7]);  // 4
    @example - getMiddleItem([1,2,3,4,5,6,7,8]);  // 4
*/
const getMiddleItem = arr => arr[Math.floor(((arr.length-1)/2))];
console.log("Middle element of [1,2,3,4,5,6,7] is " + getMiddleItem([1,2,3,4,5,6,7]));
console.log("Middle element of [1,2,3,4,5,6,7,8] is " + getMiddleItem([1,2,3,4,5,6,7,8]));
console.log("")//New line for organization.
/* 7
    @func getMedianItem
    @param {array} arr
    @returns {object} 
    @desc - given an array, return the middle element.
            If the array is even in length, return the 
            average of the middle two.
    @example - getMedianItem([1,2,3,4,5,6,7]);  // 4
    @example - getMedianItem([1,2,3,4,5,6,7,8]);  // 4.5
*/
const getMedianItem = arr =>  arr.length%2===0 ? (arr[Math.ceil(((arr.length-1)/2))]+arr[Math.floor(((arr.length-1)/2))])/2: arr[Math.floor(((arr.length-1)/2))];
console.log("Median element of [1,2,3,4,5,6,7] is " + getMedianItem([1,2,3,4,5,6,7]));
console.log("Median element of [1,2,3,4,5,6,7,8] is " + getMedianItem([1,2,3,4,5,6,7,8]));