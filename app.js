import { bubbleSort } from './algorithms/bubble.js';
import { insertionSort } from './algorithms/insertion.js';
import { mergeSort } from './algorithms/merge.js';
import {  createRandomArr } from './visuals.js';

import { displayArr } from './visuals.js';


// Create array on page load
let mainArr = createRandomArr(50);

/** Sort Array on start button */
const startSorting = document.querySelector('#startSorting');

startSorting.addEventListener('click', () => {

  handleSort(document.querySelector('input[name="sort-type"]:checked').value)
});

const handleSort = (sortType) => {

  //startSorting.disabled = true;

  switch (sortType) {
    case 'bubble':
      bubbleSort(mainArr);
      break;

    case 'insertion':
      insertionSort(mainArr);
      break;

    case 'merge':
      mergeSort(mainArr);
      break;

    // case 'quicksort':
    //   quicksort(mainArr);
    //   break;

    default:
      console.log('Error?');
      break;
  }
}