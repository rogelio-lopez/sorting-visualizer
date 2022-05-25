const elementObj = {
  value: 0,
  position: 0,
  element: document.querySelector(`.sort-item-${this.position}`), //needs to be updated after node is moved, maybe make into func
  selected: false,
  moved: false
}


// Random number array 
const elAmount = document.querySelector('.el-amount input');
const elContainer = document.querySelector('.el-container');

elAmount.addEventListener('change', (e) => {
  // create array then render
  elContainer.innerHTML = '';
  let elArray = [];
  
  for (let i = 0; i < e.target.value; i++){
    let random = Math.floor(Math.random() * 90) + 10;

    elArray.push(createHtmlElement(random));
  }
  displayElementArray(elArray);
}); 

const createHtmlElement = (rand) => {
  let li = document.createElement("li");

  li.classList.add("element");
  li.classList.add("inner-shadow-sm");
  li.style.height = `${rand * 4}px`;

  return li;
}

const displayElementArray = (arr) => {
  arr.forEach(el => elContainer.appendChild(el));
}
