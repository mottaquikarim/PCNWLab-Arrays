/* 1
    @func longestArr
    @param {array} arr1
    @param {arrar} arr2
    @returns {array}
    @desc - given two arrays return the longest array
    @example - longestArr([1,2,3,4], ['dog', 'cat']);  // [1, 2, 3, 4]
*/
console.log("--------longestArr----------");
function longestArr(arr1,arr2){
    const result = arr1 > arr2 ? arr1 : arr2
    return result;
}
console.log(longestArr([1,2],[1]));


console.log("--------arrSwapIndex----------");
/* 2
    @func arrSwapIndex
    @param {array} arr
    @returns {array}
    @desc - given an array, swap the last and first items
            using INDEX only (not using array methods)
            otherwise return string error
    @example - arrSwapIndex([1,2,3,4]);  // [4,2,3,1]
*/
arrSwapIndex = (arr) => {
    const firstItem = arr[0]
    const lastElement = arr[arr.length-1]
    arr.shift()
    arr.unshift(lastElement)
    arr.pop()
    arr.push(firstItem)
    return arr
}

console.log(arrSwapIndex([1,2,3]));


/* 3
    @func arrSwap
    @param {array} arr
    @returns {array}
    @desc - given an array, swap the last and first items
            using array methods ONLY (not by index)
            otherwise return string
    @example - arrSwap([1,2,3,4]);  // [4,2,3,1]
*/

console.log("--------combineArr----------");
/* 4
    @func combineArr
    @param {array} arr1
    @param {arrar} arr2
    @returns {array}
    @desc - given two arrays return ONE array with
            all the items from both arrays 
    @example - combineArr([1,2,3,4], ['dog', 'cat']);  // [1, 2, 3, 4, 'dog', 'cat']
*/
combineArr = (arr1,arr2) => arr1.concat(arr2)
console.log(combineArr([1,2,3,4], ['dog', 'cat']));

console.log("--------getRandomItem----------");
/* 5
    @func getRandomItem
    @param {array} arr1
    @returns {object} 
    @desc - given an array, return one random
            item from the array.
    @example - getRandomItem([1,2,3,4,5,6,7,8]);  // 7
*/
getRandomItem = (arr1) => {
    let ranNum = Math.floor(Math.random() * Math.floor(arr1.length))
    return arr1[ranNum]
}
console.log(getRandomItem([1,2,3,4,5,6,7,8]));

console.log("--------getMiddleItem----------");
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
getMiddleItem = (arr) => {
    let  mid = Math.floor((arr.length - 1) / 2)
    return arr[mid]
}
console.log(getMiddleItem([1,2,3,4,5,6,7]));


console.log("---------getMedianItem--------");
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
function getMedianItem(arr){
    const middleR = Math.ceil((arr.length-1)/2)
    const middleL = Math.floor((arr.length-1)/2)

    if(arr.length % 2 === 0){
        return (arr[middleL] + arr[middleR]) / 2
    }

    return arr[Math.ceil((arr.length -1) /2)]
}

console.log(getMedianItem([1,2,3,4,5,6,7,8]));


