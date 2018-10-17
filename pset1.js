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
    else if (arr2Length > arr1Length) {
        return arr2;
    }
    else (arr1Length === arr2Length) 
     return console.log("Both arrays have equal length!")   
    
}

console.log(longestArr( [1, 2, 3, 4], ['dog', 'cat']));

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
    const firstElem = arr[0];
    const lastElem = arr[arr.length - 1]; // how to get the last elem of any A

    arr[0] = lastElem;
    arr[arr.length - 1] = firstElem; // going back into the first elem

    return arr;
}

console.log(arrSwapIndex([1,2,3,4])); 

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

    const firstElement = arr[0];
    const lastElement = arr[arr.length - 1];

arr.shift(); // removing 1st item
arr.unshift(lastElement); // adding last item to beginning
arr.pop(); // removing last item
arr.push(firstElement); // adding 1st item to end

return arr;

}

console.log(arrSwap([1,2,3,4]));

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
   return arr1.concat(arr2);
}

console.log(combineArr([1,2,3,4], ['dog', 'cat'])); // [1, 2, 3, 4, 'dog', 'cat'

/* 5
    @func getRandomItem
    @param {array} arr1
    @returns {object} 
    @desc - given an array, return one random
            item from the array.
    @example - getRandomItem([1,2,3,4,5,6,7,8]);  // 7
*/

const getRandomItem = arr1 => {
    const randomIndex = Math.floor(Math.random() * arr1.length);
    return arr1[randomIndex];
}

console.log(getRandomItem([1,2,3,4,5,6,7,8])); // 7

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
   
    let middleIndex = Math.floor(arr.length / 2); // floor bc you want the 1st middle num
    if (arr.length % 2 === 0) {
        middleIndex -= 1;
    }

    return arr[middleIndex];
}

console.log(getMiddleItem([1,2,3,4,5,6,7]));
console.log(getMiddleItem([1,2,3,4,5,6,7,8]));

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
const middleUp = (arr.length / 2) - 1;
const middleDown = (arr.length / 2);

if (arr.length % 2 === 0) {
    return (arr[middleUp] + arr[middleDown]) / 2;
}
return arr[Math.ceil(middleUp)];
}

console.log(getMedianItem([1,2,3,4,5,6,7]));  // 4
console.log(getMedianItem([1,2,3,4,5,6,7,8]));  // 4.5