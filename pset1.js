/* 1
    @func longestArr
    @param {array} arr1
    @param {arrar} arr2
    @returns {array}
    @desc - given two arrays return the longest array
    @example - longestArr([1,2,3,4], ['dog', 'cat']);  // [1, 2, 3, 4]
*/
 const longestArr = (arr1, arr2) => {
    const array1 = arr1.length;
    const array2 = arr2.length 
    if (array1 > array2) {
           return arr1; 

    }   return arr2 
 } 

 console.log(longestArr([1,2,3,4], ['dog','cat']));
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
    if (arr.length > 2){
        return "string error"; 
    }
     let first = arr[0]
     let second = arr[arr.length - 1];
   
    // console.log(second);
     arr[arr.length -1] = first
     second = arr[0] = second
     return arr; 
}
console.log(arrSwapIndex([1,2,3,4]));
console.log(arrSwapIndex['hello']); 

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
     const lastElement =  arr.length - 1; 
 
    arr.shift(); 
    arr.unshift(lastElement);
    arr.pop();
    arr.push(firstElement); 
    
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
combineArr = (arr1,arr2) => arr1.concat(arr2); 
console.log(combineArr([1,2,3,4], ['dog', 'cat']));
/* 5
    @func getRandomItem
    @param {array} arr1
    @returns {object} 
    @desc - given an array, return one random
            item from the array.
    @example - getRandomItem([1,2,3,4,5,6,7,8]);  // 7
*/
const getRandomItem = arr1 => {
   return arr1[Math.floor(Math.random() * arr1.length)]; 
     

}
console.log(getRandomItem([1,2,3,4,5,6,7,8]));
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
       const middleIndex = Math.floor(arr.length / 2); 
       
       return arr[middleIndex];

}
console.log(getMiddleItem([1,2,3,4,5,6,7]));
console.log(getMiddleItem([1,2,3,4,5,6,7]));
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
    return arr[Math.ceil * arr1.length / 2 ]; 


}
console.log(getMedianItem([1,2,3,4,5,6,7]));
console.log(getMedianItem([1,2,3,4,5,6,7,8]))