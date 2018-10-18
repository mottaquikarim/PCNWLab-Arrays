/* 1
    @func longestArr
    @param {array} arr1
    @param {arrar} arr2
    @returns {array}
    @desc - given two arrays return the longest array
    @example - longestArr([1,2,3,4], ['dog', 'cat']);  // [1, 2, 3, 4]
*/

const longestArr = function(arr1, arr2) {
    if ((arr1.length) > (arr2.length)) {
        return arr1;
    } else if ((arr1.length) < (arr2.length)) {
        return arr2;
    } else {
        return 'Arrays are of equal length.';
    }
}

console.log(longestArr([1,2,3,4], ['dog', 'cat']));
console.log(longestArr(['dog', 'cat'], [1,2,3,4]));
console.log(longestArr([1,2], ['dog', 'cat']));


/* 2
    @func arrSwapIndex
    @param {array} arr
    @returns {array}
    @desc - given an array, swap the last and first items
            using INDEX only (not using array methods)
            otherwise return string error
    @example - arrSwapIndex([1,2,3,4]);  // [4,2,3,1]
*/

const arrSwapIndex = function (arr) {
    const firstItem = arr[0];
    const lastItem = arr[arr.length - 1];

    arr[0] = lastItem;
    arr[arr.length - 1] = firstItem;

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

const arrSwap = function(arr) {
    const firstItem = arr[0]
    const lastItem = arr[(arr.length - 1)];

    if (typeof arr !== 'string') {
        arr.shift()
        arr.unshift(lastItem)
        arr.pop()
        arr.push(firstItem)

        return arr
    } else {
        return 'string'
    }
}

console.log(arrSwap([1,2,3,4]));
console.log(arrSwap('hiii'));


const arrSwap_2 = function(arr) {
    if (typeof arr !== 'string') {
        const firstItem = arr.shift();
        const lastItem = arr.pop();
        arr.unshift(lastItem)
        arr.push(firstItem)

        return arr
    } else {
        return 'string'
    }
}

console.log(arrSwap_2([1,2,3,4]));
console.log(arrSwap_2('hiii'));

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

console.log(combineArr([1,2,3,4], ['dog', 'cat']));

/* 5
    @func getRandomItem
    @param {array} arr1
    @returns {object} 
    @desc - given an array, return one random
            item from the array.
    @example - getRandomItem([1,2,3,4,5,6,7,8]);  // 7
*/

const getRandomItem = function(arr1) {
    return arr1[Math.floor(Math.random() * arr1.length)];
}

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

const getMiddleItem = function(arr) {
    const middleIndex = Math.floor(arr.length / 2)
    if (arr.length % 2 === 0) {
        return arr[(middleIndex - 1)]
    }
    return arr[middleIndex];
}

console.log(getMiddleItem([1,2,3,4,5,6,7]), '4');
console.log(getMiddleItem([1,2,3,4,5,6,7,8]), '4');

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

// const getMedianItem = function(arr) {
//     const absMid = arr.length / 2
//     const middleUp = Math.ceil(absMid);
//     const middleDown = Math.floor(absMid);

//     if (arr.length % 2 === 0) {
//         return arr[middleUp] + arr[middleDown] / 2
//     }
// }

// console.log(getMedianItem([1,2,3,4,5,6,7]), '4');
// console.log(getMedianItem([1,2,3,4,5,6,7,8]), '4.5');

// const getMedianItem = function(arr) {
//     // store array's length
//     const arrLen = arr.length;
//     // stores value equal to half of array's length
//     const absMid = (arrLen / 2);
//     // half the array's length, rounded down for the left mid value (for even array)
//     const midLeft = Math.floor(absMid);
//     // half the array's length, rounded up for the right mid value (for even array)
//     const midRight = Math.ceil(absMid);
//     if (arrLen % 2 === 0) {
//         // -1 to obtain the index
//         // average of the values contained in both indices
//         console.log('midLeft is: ' + arr[midLeft])
//         console.log('midRight is: ' + arr[midRight])
//         return (arr[midLeft - 1] + arr[midRight]) / 2;
//     } else {
//         // value contained in odd array's middle index
//         return arr[midLeft]
//     }
// }

// console.log(getMedianItem([1,2,3,4,5,6,7]), '4');
// console.log(getMedianItem([1,2,3,4,5,6,7,8]), '4.5');


const getMedianItem = function(arr) {
    const arrLen = arr.length;
    const halfLen = (arrLen / 2);

    const halftoFloor = Math.floor(halfLen);
    // const halfToCeil = Math.ceil(halfLen);

    if (arrLen % 2 === 0) {
        return (arr[halfLen - 1] + arr[halfLen]) / 2;
    } else {
        return arr[halftoFloor];
    }
}

console.log(getMedianItem([1,2,3,4,5,6,7]), '4');
console.log(getMedianItem([1,2,3,4,5,6,7,8]), '4.5');

/*


array values       1 2 3 4 5 6 7 8
                    = = = = = = = =
indices             0 1 2 3 4 5 6 7
                    - - - < > - - -

*/
