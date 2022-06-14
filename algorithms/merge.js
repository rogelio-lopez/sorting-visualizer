
export const mergeSort = (arr = [4,6,2,9,0,6,4,24,6,8,1]) => {
    
    console.log(arr);

    if(arr.length == 1){
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
    // merge two arrays
}

console.log(mergeSort());