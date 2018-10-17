//Start of Helper Function

const randomNumFromRange = (s, e ) => {
    const random = s + Math.floor( Math.random() * (e-s+1) );
    return random;
}

const sumArray = array => {

    let total = 0

    for (i = 0; i < array.length; i++){
        total += array[i]
    }

    return total
}

const compareArrays = (arrayOne, arrayTwo) => {

    const nuArrayOne = arrayOne.sort()
    const nuArrayTwo = arrayTwo.sort()
    let comparison = false

    if(nuArrayOne.length !== nuArrayTwo.length){
        return false
    }

    for (i = 0; i < nuArrayOne.length; i++){
        if (nuArrayOne[i] === nuArrayTwo[i]){
            comparison = true
        }
        else {
            comparison = false
            break
        }
    }
    return comparison
}

console.log(compareArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]))
console.log(compareArrays([1, 2, 3, 4, 4], [1, 2, 3, 4, 5]))
console.log(compareArrays([1, 2, 3, 4], [1, 2, 3, 4, 5]))

//End of Helper Function

/* 1
    @func longestArr
    @param {array} arr1
    @param {arrar} arr2
    @returns {array}
    @desc - given two arrays return the longest array
    @example - longestArr([1,2,3,4], ['dog', 'cat']);  // [1, 2, 3, 4]
*/

const longestArray = (arrayOne, arrayTwo)=> {

    if(arrayOne.length > arrayTwo.length){
        return arrayOne
    }
    return arrayTwo
}

console.log(longestArray([1,2,3,4], [1,2,3,4,5]))
console.log(longestArray([1,2,3,4,5,6], [1,2,3,4,5]))

/* 2
    @func arrSwapIndex
    @param {array} arr
    @returns {array}
    @desc - given an array, swap the last and first items
            using INDEX only (not using array methods)
            otherwise return string error
    @example - arrSwapIndex([1,2,3,4]);  // [4,2,3,1]
*/

const arrSwapIndex = array => {

    const nuArray = array
    const arrayStart = array[0]
    const arrayEnd = array[array.length -1]

    nuArray[0] = arrayEnd
    nuArray[nuArray.length -1] = arrayStart
    
    return nuArray
 }

 console.log(arrSwapIndex(["1", "2", "3", "4"]))

/* 3
    @func arrSwap
    @param {array} arr
    @returns {array}
    @desc - given an array, swap the last and first items
            using array methods ONLY (not by index)
            otherwise return string
    @example - arrSwap([1,2,3,4]);  // [4,2,3,1]
*/

const arrSwap = array => {

    const arrayStart = array.slice(0, 1)
    const arrayMid = array.slice(1, -1)
    const arrayEnd = array.slice(-1)

    const nuArray = arrayEnd.concat(arrayMid, arrayStart)

    return nuArray

}

console.log(arrSwap(["1", "2", "3", "4"]))


/* 4
    @func combineArr
    @param {array} arr1
    @param {arrar} arr2
    @returns {array}
    @desc - given two arrays return ONE array with
            all the items from both arrays 
    @example - combineArr([1,2,3,4], ['dog', 'cat']);  // [1, 2, 3, 4, 'dog', 'cat']
*/

const combineArrays = (arrayOne, arrayTwo) => {

    const nuArray = arrayOne.concat(arrayTwo)
    
    return nuArray

}

console.log(combineArrays([1, 2, 3], [4, 5, 6]))

/* 5
    @func getRandomItem
    @param {array} arr1
    @returns {object} 
    @desc - given an array, return one random
            item from the array.
    @example - getRandomItem([1,2,3,4,5,6,7,8]);  // 7
*/

const getRandomItem = array => {

    randomIndex = randomNumFromRange(0, array.length -1)
    return array[randomIndex]

}

console.log(getRandomItem(["Rainbow", "Taco", "Doctor Who", "Homestuck"]))

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

const getMiddleItem = array => {

    const middleIndex = Math.floor(array.length / 2)

    if(array.length % 2 !== 0){
        return array[middleIndex]
    }

    return array[middleIndex -1]

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

const getMedianItem = array => {

    const nuArray = array.sort()
    const middleUp = Math.ceil(nuArray.length / 2)
    const middleDown = Math.floor(nuArray.length / 2)

    
    if(nuArray.length % 2 !== 0){
      return ((nuArray[middleUp]) + nuArray[middleDown]) / 2
    }

    return nuArray[middleDown]

}
console.log(getMedianItem([1,2,3,4,5,6,7]))
console.log(getMedianItem([1,2,3,4,5,6,7,8]))