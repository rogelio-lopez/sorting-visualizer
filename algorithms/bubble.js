const bubbleSort = (unsortedArray = [10,10, 14, 28, 11,1,5,7,3,2,5,7,4, 7, 16, 30, 50, 25, 18]) => {
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