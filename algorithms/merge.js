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
]

export const mergeSort = (unsortedArray) => {
    let arr = unsortedArray;

    if(arr.length <= 1){
        return arr;
    }
    else{
        const half = Math.ceil(arr.length / 2);    
        let leftHalf = arr.slice(0, half)
        let rightHalf = arr.slice(half, arr.length);

        leftHalf = mergeSort(leftHalf);
        rightHalf = mergeSort(rightHalf);

        return merge(leftHalf, rightHalf);
    }
}  

const merge = (left, right) => {
    let mergedArr = new Array(); //Without making a new one, just swapping 
    let leftIndex = 0, rightIndex = 0

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

    console.log(mergedArr);
    return mergedArr;
}

let arr2 = mergeSort(tempArr);

console.log("finished: ");
console.log( arr2);

