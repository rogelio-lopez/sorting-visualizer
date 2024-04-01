import './style.css'
import Algos from './algos.ts';

/* Sort Array on start button */
const startSorting = document.querySelector('#startSorting');
const a = new Algos;

// Display initial
a.createRandomArr();
a.displayArr();

startSorting?.addEventListener('click', () => {
  let el = document.querySelector('input[name="sort-type"]:checked') as HTMLInputElement;
  handleSort(el.value)
});

function handleSort(sortType: string) {

  //startSorting.disabled = true;

  switch (sortType) {
    case 'bubble':
      a.bubbleSort();
      break;

    case 'insertion':
      a.insertion();
      break;

    default:
      console.log('Error?');
      break;
  }
}
