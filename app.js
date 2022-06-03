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
  // startSorting.disabled = true;

  // Check Sort radio and activate appropriate
  bubbleSort(mainArr);

  // enable btn & input
})