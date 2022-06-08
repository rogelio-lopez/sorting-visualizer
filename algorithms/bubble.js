import { sleep, displayArr } from '../visuals.js';

export const bubbleSort = async (unsortedArray) => {
  let isSorted = true;
  let arr = unsortedArray;

  do{
    for (let i = 0; i < unsortedArray.length - 1; i++) {
      if (arr[i].value > arr[i + 1].value) {
        [ arr[i], arr[i + 1] ] = [ arr[i + 1], arr[i] ];
        isSorted = false;
        displayArr(arr);
      }  
      await sleep(.5);
    }
  }while(!isSorted);
};

