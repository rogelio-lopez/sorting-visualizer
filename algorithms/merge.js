
export const mergeSort = (arr = [4,6,2,9,0,6,4,24,6,8,1]) => {
    if(arr.length <= 1){
        return arr;
    }
    else{
        const half = Math.ceil(arr.length / 2);    
        let leftHalf = arr.slice(0, half)
        let rightHalf = arr.slice(-half)

        leftHalf = mergeSort(leftHalf);
        rightHalf = mergeSort(rightHalf);

        return merge(leftHalf, rightHalf);
    }
}  

const merge = (left, right) => {
    let mergedArr = [];
    let leftIndex = 0, rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] <= right[rightIndex]){
            mergedArr.concat([left[leftIndex]]);
            leftIndex++;
        }
        else{
            mergedArr.concat([right[rightIndex]]);
            rightIndex++;
        }
    }

    if (left){
        mergedArr.concat([left[leftIndex]]);
    }
    else if (right){
        mergedArr.concat([right[rightIndex]]);
    }

    console.log(mergedArr);
    return mergedArr;
}

console.log('Sorted: ' + mergeSort());