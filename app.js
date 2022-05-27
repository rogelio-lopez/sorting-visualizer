const elementObj = {
  value: 0,
  position: 0,
  element: document.querySelector(`.sort-item-${this.position}`), //needs to be updated after node is moved, maybe make into func
  selected: false,
  moved: false
}


// Creating dynamic random ElementObj array
const elAmount = document.querySelector('.quantity input');
const elContainer = document.querySelector('.el-container');

const createHtmlElementObj = (rand) => {
  let li = document.createElement("li");
  li.classList.add("element");
  li.classList.add("shadow-sm");
  li.style.height = `${rand * 4}px`;

  return li;
}

const displayElementObjArray = (arr) => {
  arr.forEach(el => elContainer.appendChild(el));
}

const createElementObjArray = (quantity) => {
  elContainer.innerHTML = '';
  let elArray = [];
  
  for (let i = 0; i < quantity; i++){
    let random = Math.floor(Math.random() * 90) + 10;
    elArray.push(createHtmlElementObj(random));
  }
  displayElementObjArray(elArray);
}

elAmount.addEventListener('change', (e) => {
  createElementObjArray(e.target.value);
}); 




// Create array on page load
createElementObjArray(50);