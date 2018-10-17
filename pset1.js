/* 1
    @func longestArr
    @param {array} arr1
    @param {arrar} arr2
    @returns {array}
    @desc - given two arrays return the longest array
    @example - longestArr([1,2,3,4], ['dog', 'cat']);  // [1, 2, 3, 4]
*/

const longestArr = (arr1, arr2) => arr1.length > arr2.length ? arr1 : arr2;

console.log(longestArr([1,2,3], [1,2,3,4]), 'Expect return arr2');
console.log(longestArr(['Jose', 'Rodriguez'], ['Yudy', 'Cabreja', 'Lockhart']), 'Expect arr2');
console.log(longestArr([1, 2], [1, 3, 6]), 'Expect arr 2');
console.log(longestArr([1, 2, 3], [1, 2]), 'Expect arr1');
console.log('**********************************************************************************************')

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
    if(arr.length === 0) return 'This array is empty';
    const firstElement = arr[0];
    const lastElement = (arr[arr.length - 1]);
    arr[0] = lastElement;
    arr[arr.length - 1] = firstElement
    return arr;
}

console.log(arrSwapIndex([1,2,3,4]), 'Expect [4, 3, 2, 1]');
console.log('**********************************************************************************************')

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
    arr.shift();
    arr.unshift(lastElement);
    arr.pop();
    arr.push(firstElement);
    return arr;
}

console.log(arrSwap([1,2,3,4,5]));
// console.log(arrSwap());
// console.log(arrSwap());
// console.log(arrSwap());
console.log('**********************************************************************************************')
/* 4
    @func combineArr
    @param {array} arr1
    @param {arrar} arr2
    @returns {array}
    @desc - given two arrays return ONE array with
            all the items from both arrays 
    @example - combineArr([1,2,3,4], ['dog', 'cat']);  // [1, 2, 3, 4, 'dog', 'cat']
*/

const combineArr = (arr1, arr2) => arr1.concat(arr2);

console.log(combineArr([1, 2], [3, 4]));
console.log('**********************************************************************************************')

/* 5
    @func getRandomItem
    @param {array} arr1
    @returns {object} 
    @desc - given an array, return one random
            item from the array.
    @example - getRandomItem([1,2,3,4,5,6,7,8]);  // 7
*/

const getRandomItem = arr1 => arr1[Math.floor(Math.random() * arr1.length)];

console.log(getRandomItem([1, 2, 3, 4, 5]));
console.log('**********************************************************************************************')

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



