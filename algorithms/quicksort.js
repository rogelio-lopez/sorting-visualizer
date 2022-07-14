import { sleep, displayArr } from '../visuals.js';


const tempArr = [
    { value: 1, htmlElement: '' },
    { value: 9, htmlElement: '' },
    { value: 3, htmlElement: '' },
    { value: 5, htmlElement: '' },
    { value: 7, htmlElement: '' },
    { value: 2, htmlElement: '' },
    { value: 4, htmlElement: '' },
    { value: 10, htmlElement: '' },
    { value: 6, htmlElement: '' },
    { value: 8, htmlElement: '' }
];

// Choose a pivot (firstt + middle + last) / 3
let midLength =  Math.ceil(tempArr.length / 2);
let pivot = (tempArr[0].value + tempArr[midLength].value + tempArr[tempArr.length].value) / 3; 

const quicksort = (unsortedArray) => {

}