/* 1
    @func longestArr
    @param {array} arr1
    @param {arrar} arr2
    @returns {array}
    @desc - given two arrays return the longest array
    @example - longestArr([1,2,3,4], ['dog', 'cat']);  // [1, 2, 3, 4]
*/
const longestArr = (arr1, arr2) => arr1.length > arr2.length ? arr1 : arr2;
let arr1 = [1,2,3]
let arr2 = [4,5,6,7]
console.log(longestArr(arr1,arr2))


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
    let p0 = arr[0]
    let pLast = arr[arr.length -1]
    let arr1 = arr
    arr1[0] = pLast
    arr1[arr.length -1] = p0

    return arr1
}
let arr = [1,2,3,4]
console.log(arrSwapIndex(arr))

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
let arr1 = arr
let p0 = arr[0];
let pLast = arr[arr.length - 1];
arr1.shift();
arr1.pop();
arr1.unshift(pLast);
arr1.push(p0);
return arr1;
}
console.log(arrSwap([1,2,3,4,5,6]))

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
console.log(combineArr([1,2,3],[4,5,6]))


/* 5
    @func getRandomItem
    @param {array} arr1
    @returns {object} 
    @desc - given an array, return one random
            item from the array.
    @example - getRandomItem([1,2,3,4,5,6,7,8]);  // 7
*/
function generateRandomNumberFromRange( s, e ) {
    const random = s + Math.floor( Math.random() * (e-s+1) );
    return random;
}
const getRandomItem = arr1 => arr1[generateRandomNumberFromRange(0,(arr1.length -1))]
let array1 = ['dog','cat','bird','squirrel','rabbit','frog'];
console.log(getRandomItem(array1))
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
const getMiddleItem = arr => {
    if (arr.length % 2 === 0) return arr[(arr.length/2) - 1];
    return arr[Math.floor((arr.length/2)) ] 
 
    }
let arrrr = [1,2,3,4,5,6,7];
console.log(getMiddleItem(arrrr));

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

const getMedianItem = arr => {
    if (arr.length % 2 === 0) return arr[Math.floor(arr.length/2)-1];
    return (arr[Math.floor(arr.length/2)] + arr[Math.floor(arr.length/2 -1)]) /2
}
let arrrr1 = [1,2,3,4,5,6,7,8,9,10,11];
console.log(getMedianItem(arrrr1));
