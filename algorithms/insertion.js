import { sleep, displayArr } from '../visuals.js';

export const insertionSort = async (unsortedArray) => {
    let arr = unsortedArray;
    let element;

    for (let i = 1; i < unsortedArray.length; i++){
        element = arr[i].value;

        for (let j = i - 1; j >= 0 ; j--){
            if(element < arr[j].value){
                [ arr[j+1], arr[j] ] = [ arr[j], arr[j+1] ];
                displayArr(arr);
                await sleep(.5);
            }
            else{
                break;
            }
        }
    }
}