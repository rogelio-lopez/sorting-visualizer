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


export const mergeSort = (arr) => {

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
    let mergedArr = new Array();
    let leftIndex = 0, rightIndex = 0

    while(leftIndex < left.length && rightIndex < right.length){

        /**
         * Duplicates being created when pushing result into mergedArr
         */

        let leftObj = left[leftIndex];
        let rightObj = right[rightIndex];
    
        if(leftObj.value <= rightObj.value){
            mergedArr.push(leftObj);
            left.shift();
            leftIndex++;
        }
        else{
            mergedArr.push(rightObj);
            right.shift();
            rightIndex++;
        }
    }
    
    if (left){
        mergedArr.push(...left);
    }
    if (right){
        mergedArr.push(...right);
    }

    return mergedArr;
}


let arr2 = mergeSort(tempArr);

console.log("finished: ");
console.log( arr2);

