/* 1
    @func longestArr
    @param {array} arr1
    @param {arrar} arr2
    @returns {array}
    @desc - given two arrays return the longest array
    @example - longestArr([1,2,3,4], ['dog', 'cat']);  // [1, 2, 3, 4]
*/
const longestArr = (arr1, arr2) => {
    let arr1Length = arr1.length;
    let arr2Length = arr2.length;
    if (arr1Length > arr2Length) {
        return arr1;
    }
    return arr2;
}

console.log(longestArr([1,2,3,4], ['dog', 'cat']));
console.log(longestArr(['dog', 'cat'], [1,2,3,4]));
console.log('------')

/* 2
    @func arrSwapIndex
    @param {array} arr
    @returns {array}
    @desc - given an array, swap the last and first items
            using INDEX only (not using array methods)
            otherwise return string error
    @example - arrSwapIndex([1,2,3,4]);  // [4,2,3,1]
*/
const arrSwapIndex = (arr) => {
    const firstIndex = arr[0];
    const lastIndex = arr[arr.length-1];
   
    if (typeof arr[0] === "number") {
        arr[0] = lastIndex;
        arr[arr.length-1] = firstIndex;
    return arr;
}
return 'String Error';
}
    console.log(arrSwapIndex([1,2,3,4]));
    console.log('------')


/* 3
    @func arrSwap
    @param {array} arr
    @returns {array}
    @desc - given an array, swap the last and first items
            using array methods ONLY (not by index)
            otherwise return string
    @example - arrSwap([1,2,3,4]);  // [4,2,3,1]
*/
const arrSwap = (arr) => {
   
    if (arr.length >= 2) {
       let firstIndex =  arr.shift();
       let lastIndex = arr.pop(); 
        arr.unshift(lastIndex);
        arr.push(firstIndex);
    return arr;
}
return 'Error';
}
    console.log(arrSwap([1,2,3,4]));
    console.log('------')


/* 4
    @func combineArr
    @param {array} arr1
    @param {arrar} arr2
    @returns {array}
    @desc - given two arrays return ONE array with
            all the items from both arrays 
    @example - combineArr([1,2,3,4], ['dog', 'cat']);  // [1, 2, 3, 4, 'dog', 'cat']
*/
const combineArr = (arr1, arr2) => {
let concat = arr1.concat(arr2);
return concat;
}
console.log(combineArr([1,2,3,4], ['dog', 'cat']));
console.log('------')


/* 5
    @func getRandomItem
    @param {array} arr1
    @returns {object} 
    @desc - given an array, return one random
            item from the array.
    @example - getRandomItem([1,2,3,4,5,6,7,8]);  // 7
*/

const getRandomItem = (arr1) => {
return arr1[Math.floor(Math.random() * arr1.length)];
}
console.log(getRandomItem([1,2,3,4,5,6,7,8]));
console.log('------')

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

const getMiddleItem = (arr) => {
    if (arr.length % 2 === 0) {
        return arr[(arr.length/2)-1];
    }
    return arr[Math.floor(arr.length/2)];
}
console.log(getMiddleItem([1,2,3,4,5,6,7]));
console.log(getMiddleItem([1,2,3,4,5,6,7,8]));
console.log('------')


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


const getMedianItem = (arr) => {
if (arr.length % 2 === 1) {
    const half = arr.length /2;
    const middleIndex = Math.floor(half);
    return arr[middleIndex];
}
    const half = arr.length /2;
    return (arr[half] + arr[half -1])/2;
}
console.log(getMedianItem([1,2,3,4,5,6,7,8]));
console.log(getMedianItem([1,2,3,4,5,6,7]));
