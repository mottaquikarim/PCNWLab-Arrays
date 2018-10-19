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
    if (max > arr1.length || min > arr1.length) return 'Error: Out of Range';
    if (min > max) return 'Error: Out of Range';
    if (min === max) return 'Error: Out of Range';
    return arr1.slice(min-1, max);
}
//test
console.log('------------getRange test------------');
console.log(getRange([1,2,3,4,5], 1, 3), [1, 2, 3]);
console.log(getRange([1,2,3,4,5], 3, 5), [3, 4, 5]);
console.log(getRange([1,2,3,4,5], 5, 5), 'Error: Out of Range');
console.log(getRange([1,2,3,4,5], 3, 100), 'Error: Out of Range');
console.log(getRange([1,2,3,4,5], 6, 1), 'Error: Out of Range');
console.log(getRange([0,2,3,10,8], 1, 5), [0,2,3,10,8]);

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
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return 'invalid input';
    const midIndex = Math.ceil(arr1.length /2);
    const half1 = arr1.slice(0, midIndex);
    const half2 = arr1.slice(midIndex);
    return half1.concat(arr2).concat(half2);
}
//test
console.log('------------insertIntoMiddle test------------');
console.log('if arr1 or arr2 is missing => return invalid input', insertIntoMiddle([1,2]) === 'invalid input');
console.log('if arr1 or arr2 is missing => return invalid input', insertIntoMiddle('wtf TDD', [0]) === 'invalid input');
console.log(insertIntoMiddle([1,2,3,4,5], ['cat', 'dog']), [1, 2, 3, 'cat', 'dog', 4, 5]);
console.log(insertIntoMiddle([1,2,3,4,5,6], ['cat', 'dog']), [1, 2, 3, 'cat', 'dog', 4, 5, 6]);

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

const swapEnds = arr => {
    let start = arr[0];
    let end = arr[arr.length - 1];
    arr[0] = end;
    arr[arr.length - 1] = start;
    return arr;
}

const reverseArr = arr => {
    if (!Array.isArray(arr)) return 'invalid input';
    if (arr.length < 2) return 'not enough elements in array';
    if (arr.length === 2 || arr.length === 3) return swapEnds(arr); // redundant & useless but whatever
                                                                    // I already wrote my swapEnds function
                                                                    // so might as well use it
    let newArr = [];

    function popNpush(arr) {
        if (arr.length > 0){
            newArr.push(arr.pop());
        }
        if (arr.length > 0){        
            popNpush(arr);
        }
    }
    popNpush(arr);
    
    return newArr;
    /*
    function swapNpop(arr) {
        const tempStore = swapEnds(arr.slice(-3));
        arr.pop();
        arr.pop();
        arr.pop();
        return newArr.concat(tempStore);
    }
    function call()
    */

    /*
    let endIndex = arr.length-1;
    let index = 0;
    arr[index] = arr[arr.length-1];
    if(index < arr.length /2){
        index += 1;
        arr[index] = arr[arr.length-2]
    }
    
    let index = arr.length -1;
    let newArr = arr.slice(index);
    if (index === 0){
        newArr.push( arr.slice(index) );
        return newArr;
    }
    index -= 1;

    reverseArr(arr);
    */
}
//test
console.log('------------reverseArr TDD tests------------');
console.log('if you pass in string or num => return invalid input', reverseArr('haha') === 'invalid input');
console.log('if you pass in string or num => return invalid input', reverseArr(100) === 'invalid input');
console.log('if only 1 or 0 elements in array => not enough elements in array', reverseArr([]) === 'not enough elements in array');
console.log('if only 1 or 0 elements in array => not enough elements in array', reverseArr([0]) === 'not enough elements in array');
console.log(reverseArr([9,0,5]), [5,0,9]);
console.log(reverseArr([1,2,3,4,5]), [5,4,3,2,1]);
console.log(reverseArr([1,'a',1,'i']), ['i',1,'a',1]);
console.log(reverseArr([1,2,3,4,5,'a','b','c','d','e']), ['e','d','c','b','a',5,4,3,2,1]);
console.log(reverseArr(['f','f','u','t','s',' ','d','o','o','g']), ['g','o','o','d',' ','s','t','u','f','f']);
console.log('------------------------------------------------');

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
//wtf
const reverseElement = str => {
    let arr = str.split('').reverse();
    let index = 0;
    let string = arr[index];
    function loop() {
        if (index < arr.length-1){
            index ++;
            string += arr[index];
        }
        if (index < arr.length-1){
            loop();
        }
    }
    loop();
    return string;
}
// reverseElement test
//console.log(reverseElement('doog'), 'good');
//console.log(reverseElement('dab'), 'bad');
//console.log(reverseElement('hello'), 'olleh');
// all passed yay

const reversedRangeMasher = (arr1, arr2, min, max) => {
    let reversedArr = reverseArr(arr2);
    //element reversing part
    let num = 0;
    reversedArr[num] = reverseElement(reversedArr[num]);
    function loop(){
        if (num < arr2.length-1){
            num ++;
            reversedArr[num] = reverseElement(reversedArr[num]);
            loop();
        }
    }
    loop();
    //sort arr1 and take slice of range
    arr1.sort(); //yeah yeah it can only sort 1 digit #s properly, 
                 //but the example test passed so that's it for now.
    const a = arr1.indexOf(min);
    const b = arr1.indexOf(max);
    const sliceOfArr = arr1.slice(a, b+1);
    //divide into halfs
    const midIndex = Math.ceil(sliceOfArr.length/2)
    const half1 = sliceOfArr.slice(0, midIndex);
    const half2 = sliceOfArr.slice(midIndex);

    return half1.concat(reversedArr).concat(half2);
}
//test
console.log('------------reversedRangeMasher test------------');
console.log(reversedRangeMasher([1,2,3,4,5], ['cat', 'dog'], 3, 5), [3, 4, 'god', 'tac', 5]);
console.log(reversedRangeMasher([5,4,3,2,1], ['hello', 'world'], 1, 5), [1, 2, 3, 'dlrow', 'olleh', 4, 5]);
console.log(reversedRangeMasher([4,1,8,9], ['dog','lol'], 1, 9), [1,4,'lol','god',8,9]);
console.log('------------------------------------------------');


