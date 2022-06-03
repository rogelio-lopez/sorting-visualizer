import { switchPairs, displayArr } from '../visuals.js';

export const bubbleSort = (unsortedArray) => {
  let resultObj;
  let tempArr = unsortedArray;

  do{
    resultObj = bubbleAlgo(tempArr);
    console.log(resultObj);  //Promise pending problem
    tempArr = resultObj.arr;
  }while(resultObj.isModified);

  return resultObj.arr;
};

const bubbleAlgo = async (arr) => {
  let arrItem =  arr;
  let isModified =  false;

  for (let i = 0; i < arr.length - 1; i++) {
    await sleep(50);
    if (arrItem[i].value > arrItem[i + 1].value) {
      [ arrItem[i], arrItem[i + 1] ] = [ arrItem[i + 1], arrItem[i] ];
      isModified = true;
      displayArr(arrItem);
    }
  }

  return {arr, isModified};
};

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}