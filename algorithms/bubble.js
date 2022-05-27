const bubbleSort = (unsortedArray) => {
  let arrObj;

  do{
    arrObj = bubbleAlgo(unsortedArray);
  }while(arrObj.isModified);

  return arrObj.arr;
};

const bubbleAlgo = (arr) => {
  let arrItem =  arr;
  let isModified =  false;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arrItem[i] > arrItem[i + 1]) {
      [ arrItem[i], arrItem[i + 1] ] = [ arrItem[i + 1], arrItem[i] ];
      isModified = true;
    }
  }

  return {arr, isModified};
};

bubbleSort();