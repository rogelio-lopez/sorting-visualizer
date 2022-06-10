import { bubbleSort } from './algorithms/bubble.js';
import { insertionSort } from './algorithms/insertion.js';
import {  createRandomArr } from './visuals.js';

// Create array on page load
let mainArr = createRandomArr(50);


/** Create an array of random #s w/ size quantity */
const quantity = document.querySelector('.quantity input');
quantity.addEventListener('change', (e) => {
  mainArr = createRandomArr(e.target.value);
}); 


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

    default:
      console.log('Error?');
      break;
  }
}