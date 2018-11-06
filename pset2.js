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
   if (min < arr1.length && max <= arr1.length) {
   let minIndex =  arr1.indexOf(min);
   let maxIndex = arr1.indexOf(max);
    let range = arr1.slice(minIndex, maxIndex+1);
   return range;
}
return "Error: Out of Range";
}

console.log(getRange([1,2,3,4,5], 1, 3));
console.log(getRange([1,2,3,4,5], 3, 5));
console.log(getRange([1,2,3,4,5], 5, 5));
console.log(getRange([1,2,3,4,5], 3, 100));
console.log(getRange([1,2,3,4,5], 6, 1));
console.log('-------');

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

const insertIntoMiddle = (arr1, arr2) => {
    let middleIndex = Math.ceil(arr1.length/2);
    const firstHalf = arr1.slice(0, middleIndex);
    const secondHalf = arr1.slice(middleIndex);

    return firstHalf + "," + arr2 + "," + secondHalf;
}
console.log(insertIntoMiddle([1,2,3,4,5], ['cat','dog']));
console.log(insertIntoMiddle([1,2,3,4,5,6], ['cat', 'dog']));



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

const reverseArr = (arr) => {
    let newArr = [];
    for(let i = arr.length-1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(reverseArr([1,2,3,4,5]));


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

const reverseString = (str) => {
    let arr = [];
    str.split('');
    for (let i = str.length-1; i >= 0; i--){
        arr.push(str[i])
    }
    return arr.join('');
    }
console.log(reverseString('string'));

const reversedRangeMasher = (arr1, arr2, min, max) => {
    let arr21 = arr2.slice(0,1);
    let arr22 = arr2.slice(1);

    
    let arr21S = arr21.toString();
    let arr22S = arr22.toString();


    let arr211= reverseString(arr21S);
    let arr222 = reverseString(arr22S);

    let newArr2 = [arr222, arr211];

    if (min < arr1.length && max <= arr1.length) {
        let minIndex =  arr1.indexOf(min);
        let maxIndex = arr1.indexOf(max);
        let range = arr1.slice(minIndex, maxIndex+1);
    
    console.log(range);
    let middleIndex = Math.ceil(range.length/2);
    let half1= range.slice(0,middleIndex);
    let half2 = range.slice(middleIndex);
    let final = [];
    return half1.concat(newArr2,half2);
    }
}

console.log(reversedRangeMasher([1,2,3,4,5], ['cat', 'dog'], 3, 5));


//divide arr2
//loop throught arr2-1 and arr2-2 and push letters into a new array
//concat arr2-1 and arr 2-2 into arr2
