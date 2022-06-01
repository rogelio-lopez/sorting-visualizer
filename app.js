import { bubbleSort } from './algorithms/bubble.js';
import { displayArr, createRandomArr } from './visuals.js';

// Create array on page load
let mainArr = createRandomArr(50);


/** Create an array of random #s w/ size quantity */
const quantity = document.querySelector('.quantity input');
quantity.addEventListener('change', (e) => {
  mainArr = createRandomArr(e.target.value);
}); 


/** Sort Array on start button */
const startSorting = document.querySelector('#startSorting');
startSorting.addEventListener('click', (e) => {

  // disable start button, input, other radios while sorting
  startSorting.disabled = true;
  quantity.disabled = true;

  // Sort
  bubbleSort(mainArr)

  // Display sorted array
  displayArr(mainArr)

  // enable btn & input
  startSorting.disabled = false;
  quantity.disabled = false;
})