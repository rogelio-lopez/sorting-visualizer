const elementObj = {
  key: '', // key = array position
  value: 0, 
  selected: false,
  moved: false,
  htmlElement: ''
};


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

const createElementObjArray = (quantity) => {
  elContainer.innerHTML = '';
  let elArray = [];
  
  for (let i = 0; i < quantity; i++){
    let random = Math.floor(Math.random() * 90) + 10;
    elArray.push(createHtmlElementObj(random));
  }
  displayElementObjArray(elArray);
}

/** Two uses:
 * Display a new array
 * Display changes in sorting (everything stays the same except for 2)
 */
const displayElementObjArray = (arr) => {
  arr.forEach(el => elContainer.appendChild(el));
}

elAmount.addEventListener('change', (e) => {
  createElementObjArray(e.target.value);
}); 




// Create array on page load
createElementObjArray(50);