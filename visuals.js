const randObj = {
    key: 0, // key = array position
    value: 0, 
    selected: false,
    moved: false,
    htmlElement: ''
};

const container = document.querySelector('.container');

/** ----- Displays HTML when passed obj arr ----- */
export const displayArr = (arr) => {
    arr.forEach(el => container.appendChild(el.htmlElement));
}

/** ----- Visualize sorting/switching step for algorithms ----- */
export const switchPairs = (el1, el2) => {
    // visual Stuff for switching goes here

    return [el2, el1];
}


/** ----- Creating obj array of random numbers ----- */
const createHtmlObj = (randNum) => {
    let li = document.createElement("li");
    li.classList.add("rand-obj");
    li.classList.add("shadow-sm");
    li.style.height = `${randNum * 4}px`;

    return li;
}

export const createRandomArr = (quantity) => {
    container.innerHTML = '';
    let elArray = [];

    for (let i = 0; i < quantity; i++){
        //Creates new elementObj, adds info, inserts into obj array
        const obj = Object.create(randObj);
        obj.key = i;
        obj.value = Math.floor(Math.random() * 90) + 10;
        obj.htmlElement = createHtmlObj(obj.value);
        elArray.push(obj);
    }

    displayArr(elArray);
    return elArray;
}