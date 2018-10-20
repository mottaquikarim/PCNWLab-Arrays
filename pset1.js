/* 1
    @func longestArr
    @param {array} arr1
    @param {arrar} arr2
    @returns {array}
    @desc - given two arrays return the longest array
    @example - longestArr([1,2,3,4], ['dog', 'cat']);  // [1, 2, 3, 4]
*/
const longestArr = (arr1,arr2) => arr1.length < arr2.length ? arr2 : arr1 

console.log(longestArr([1,2,3,4], ['dog', 'cat']))

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
    let holder = arr[0]
    arr[0] = arr[arr.length-1]
    arr[arr.length-1] = holder
    return arr

}
console.log(arrSwapIndex([1,2,3,4]))
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
    let holder = arr.shift()
    arr.unshift(arr.pop())
    arr.push(holder)
    return arr


}

console.log(arrSwap([1,2,3,4]))

/* 4
    @func combineArr
    @param {array} arr1
    @param {arrar} arr2
    @returns {array}
    @desc - given two arrays return ONE array with
            all the items from both arrays 
    @example - combineArr([1,2,3,4], ['dog', 'cat']);  // [1, 2, 3, 4, 'dog', 'cat']
*/
const combineArr = (arr1,arr2) => arr1.concat(arr2)


console.log(combineArr([1,2,3,4], ['dog', 'cat']))

/* 5
    @func getRandomItem
    @param {array} arr1
    @returns {object} 
    @desc - given an array, return one random
            item from the array.
    @example - getRandomItem([1,2,3,4,5,6,7,8]);  // 7
*/
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)]


console.log(getRandomItem([1,2,3,4,5,6,7,8]))
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
    return arr[Math.ceil(arr.length/2)-1]
}

console.log(getMiddleItem([1,2,3,4,5,6,7]))
console.log(getMiddleItem([1,2,3,4,5,6,7,8]))


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
    if((arr.length%2) === 0){
        return (arr[(arr.length/2)-1]+arr[(arr.length/2)])/2
    }return getMiddleItem(arr)
}

console.log(getMedianItem([1,2,3,4,5,6,7]))
console.log(getMedianItem([1,2,3,4,5,6,7,8]))
