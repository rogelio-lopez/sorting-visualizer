const elementObj = {
  key: 0, // key = array position
  value: 0, 
  selected: false,
  moved: false,
  htmlElement: ''
};


// Creating dynamic random ElementObj array
const elAmount = document.querySelector('.quantity input');
const elContainer = document.querySelector('.el-container');

// Creates li with where height = (randomNum * 4)px
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

    //Creates new elementObj, adds info, inserts into obj array
    const obj = Object.create(elementObj);
    obj.key = i;
    obj.value = Math.floor(Math.random() * 90) + 10;
    obj.htmlElement = createHtmlElementObj(obj.value);

    elArray.push(obj);
  }

  displayElementObjArray(elArray);
}

/** Two uses:
 * Display a new array
 * Display changes in sorting (everything stays the same except for 2)
 */
const displayElementObjArray = (arr) => {
  arr.forEach(el => elContainer.appendChild(el.htmlElement));
}

elAmount.addEventListener('change', (e) => {
  createElementObjArray(e.target.value);
}); 




// Create array on page load
createElementObjArray(50);