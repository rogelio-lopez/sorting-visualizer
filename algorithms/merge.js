import { displayArr } from '../visuals.js';


const tempArr = [
    { value: 1, htmlElement: '' },
    { value: 9, htmlElement: '' },
    { value: 3, htmlElement: '' },
    { value: 5, htmlElement: '' },
    { value: 7, htmlElement: '' },
    { value: 2, htmlElement: '' },
    { value: 4, htmlElement: '' },
    { value: 10, htmlElement: '' },
    { value: 6, htmlElement: '' },
    { value: 8, htmlElement: '' }
];

export const mergeSort = (unsortedArray) => {
    mergeSplit(unsortedArray, unsortedArray);
}  

const mergeSplit = (unsortArr, fullArr) => {
    if(unsortArr.length <= 1){
        return unsortArr;
    }
    else{
        const half = Math.ceil(unsortArr.length / 2);    
        let leftHalf = unsortArr.slice(0, half)
        let rightHalf = unsortArr.slice(half, unsortArr.length);

        leftHalf = mergeSplit(leftHalf);
        rightHalf = mergeSplit(rightHalf);

        return merge(leftHalf, rightHalf, fullArr);
    }
}

/** Thots:
 * Use .indexOf() when comparing
 * pass full array as third argument to keep displaying after every step
 */
const merge = (left, right, full) => {
    let mergedArr = new Array(); 
    let leftMostIndex = getIndex(left[0].value, full);
    let rightMostIndex = getIndex(right[right.length - 1].value, full);
    let leftIndex = 0, rightIndex = 0

    /* Modify full arr using lefrMost and rightMost to know where */

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex].value <= right[rightIndex].value){
            mergedArr.push(left[leftIndex]);
            leftIndex++;
        }
        else{
            mergedArr.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    // array would still have items so it would re add
    if (left.length > leftIndex){
        mergedArr.push(...left.slice(leftIndex, left.length));
    }
    else if (right.length > rightIndex){
        mergedArr.push(...right.slice(rightIndex, right.length));
    }

    return mergedArr;
}

// Helper functions needed for visual effects
const getIndex = (index, arr = 0) =>  arr.map(r => r.value).indexOf(index);

console.log("finished: ");
mergeSort(tempArr);