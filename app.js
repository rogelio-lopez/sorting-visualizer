const element = {
  value: 0,
  position: 0,
  element: document.querySelector(`.sort-item-${this.position}`), //needs to be updated after node is moved, maybe make into func
  selected: false,
  moved: false
}


// Random number array 
const elInput = document.querySelector('.el-amount input');

elInput.addEventListener('change', () => {
  // create array then render
}); 