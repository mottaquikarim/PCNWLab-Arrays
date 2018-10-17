/* 1
    @func longestArr
    @param {array} arr1
    @param {arrar} arr2
    @returns {array}
    @desc - given two arrays return the longest array
    @example - longestArr([1,2,3,4], ['dog', 'cat']);  // [1, 2, 3, 4]
*/

const longestArr = (arr1, arr2) => {
    return arr1.length > arr2.length ? arr1 : arr2;
}
//test
console.log('-------longestArr test-------');
console.log(longestArr([1,2,3,4], ['dog', 'cat']), [1, 2, 3, 4]);

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
    if (arr.length < 2) return 'string error';
    const element1 = arr[0];
    const elementLast = arr[arr.length-1];
    arr[0] = elementLast;
    arr[arr.length-1] = element1;
    return arr;
}
//test
console.log('-------arrSwapIndex test-------');
console.log(arrSwapIndex(['ha']), 'string error');
console.log(arrSwapIndex([1,2,3,4]), [4,2,3,1]);

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
    if (arr.length < 2) return 'string';
    const lastElement = arr.pop();
    const element1 = arr.shift();
    arr.unshift(lastElement);
    arr.push(element1);
    return arr;
}

//test
console.log('-------arrSwap test-------');
console.log(arrSwap([1,2,3,4]), [4,2,3,1]);
console.log(arrSwap(['oh']), 'string');

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

//test
console.log('-------combineArr test-------');
console.log(combineArr([1,2,3,4],['dog', 'cat']), [1, 2, 3, 4, 'dog', 'cat']);

/* 5
    @func getRandomItem
    @param {array} arr1
    @returns {object} 
    @desc - given an array, return one random
            item from the array.
    @example - getRandomItem([1,2,3,4,5,6,7,8]);  // 7
*/

const getRandomItem = arr1 => {
    let randomIndex = Math.floor(Math.random() * arr1.length);
    return arr1[randomIndex];
}
//test
console.log('-------getRandomItem test-------');
console.log(getRandomItem([1,2,3,4,5,6,7,8]), 'random # from 1 to 8');
console.log(getRandomItem([1,2,3,4,5,6,7,8]), 'random # from 1 to 8');
console.log(getRandomItem([1,2,3,4,5,6,7,8]), 'random # from 1 to 8');
console.log(getRandomItem([1,2,3,4,5,6,7,8]), 'random # from 1 to 8');
console.log(getRandomItem([1,2,3,4,5,6,7,8]), 'random # from 1 to 8');

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
    let middleIndex = 0;
    if (arr.length % 2 === 0){
        middleIndex = Math.floor(arr.length /2) - 1;
    } else {
        middleIndex = Math.floor(arr.length /2);
    }
    return arr[middleIndex];
}
//test
console.log('-------getMiddleItem test-------');
console.log(getMiddleItem([1,2,3,4,5,6,7]), 4);
console.log(getMiddleItem([1,2,3,4,5,6,7,8]), 4);
console.log(getMiddleItem([1,2,3,4,5,6,7,8,9]), 5);
console.log(getMiddleItem([1,2,3,4,5,6,7,8,9,10]), 5);

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



