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
console.log("--------getRange----------");

function getRange(arr1,min,max){
    if(max > arr1.length){
        return "Error: Out of Range"
    }
    return arr1.slice(min-1,max)
}

console.log(getRange([1,3,4,5,2], 1,3))
console.log(getRange([1,2,3,4,5], 3, 100))


console.log("---------insertIntoMiddle--------");

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
function insertIntoMiddle(arr1,arr2,){
    const mid = (arr1.length-1) / 2
    leftArr1 = arr1.slice(0,mid+1)
    rightArr1 = arr1.slice(mid+1,arr1.length)
    newArr = leftArr1.concat(arr2)
    newArr = newArr.concat(rightArr1)
    
    return newArr
}

console.log(insertIntoMiddle([1,2,3,4,5], ['cat', 'dog']));
console.log(insertIntoMiddle([1,2,3,4,5,6], ['cat', 'dog']))



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
// let arr2 = []
function reverseArr(arr, arr2=[]){
    if(arr.length === 0) return arr2
        let hold = arr.pop()
        arr2.push(hold)
        console.log(arr)
        return reverseArr(arr, arr2)
}

function reverseArr2(arr){
    arr.map((current,index) => (arr.length - 1 - index))
}


console.log(reverseArr([1,2,3,4,5]))
console.log(reverseArr([7,8,9,10]))

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
function reversedRangeMasher(arr1,arr2,min,max){
        //given an array and a range, return all the 
        //elements in the array that fall within the range.
    arr1 = getRange(arr1,min,max)
    
        //slice the arr1 from middle into arrays
    let array1Sliced = arr1.slice(0,(arr1.length-1)/2)
    let array1Sliced2 = arr1.slice((arr1.length-1)/2)

        //Reverse arr2 using MAP
    arr2Reversed = arr2.map((current,index) => arr2[arr2.length - 1 - index])

        //Reverse arr2 using MAP
        //Convert each string in arr2 into individual arrays using split
        //Use reverse method on string array to reverse
        //its ok to use reverse method on string array I think
        //use join to change string array back to string.
    arr2Backwards = arr2Reversed.map((current,index) => arr2Reversed[index].split("").reverse().join(""))
    
    //combine first part of arr1 with arr2Backwards
    let a = array1Sliced.concat(arr2Backwards)

    //combine arr1Sliced + arr2Backwards + arr1Sliced2.
    let b = a.concat(array1Sliced2)
    return b
    
}

console.log(reversedRangeMasher([1,2,3,4,5], ['hello', 'world'], 3, 5));



