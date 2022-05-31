import {bubbleSort} from './algorithms/bubble.js';
import {displayArr, createRandomArr} from './display.js';


// const mainArray = []


/** Create an array of random #s w/ size quantity */
const quantity = document.querySelector('.quantity input');
quantity.addEventListener('change', (e) => {
  createRandomArr(e.target.value);
}); 


/** Sort Array on start button */
const startSorting = document.querySelector('#startSorting');
startSorting.addEventListener('click', (e) => {
  console.log("hello");

  // disable start button, input, other radios while sorting
  startSorting.disabled = true;
  quantity.disabled = true;

  // bubbleSort()

  // displayArr()

  // enable btn & input
})


// Create array on page load
createRandomArr(50);