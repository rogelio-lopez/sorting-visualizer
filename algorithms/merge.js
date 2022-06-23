import { displayArr } from '../visuals.js';

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
    let mergedArr = [];
    let leftIndex = 0, rightIndex = 0;

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

    if (left){
        mergedArr.push(...left);
    }
    else if (right){
        mergedArr.push(...right);
    }

    console.log(mergedArr);

    return mergedArr;
}
