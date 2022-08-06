const randObj = {
    value: 0, 
    htmlElement: undefined,
};

const container = document.querySelector('.container');

/** ----- Creating obj array of random numbers ----- */
const createGradient = (randNum) => { 
    let cl1 = 230, cl2 = 77, cl3 = 45;
    let cr1 = 252, cr2 = 166, cr3 = 29; 
    let rgbDiff = [(cr1 - cl1) / 100, (cr2 - cl2) / 100, (cr3 - cl3) / 100];
    
    return `rgb(${cl1 + (rgbDiff[0] * (randNum - 1))},
                ${cl2 + (rgbDiff[1] * (randNum - 1))},
                ${cl3 + (rgbDiff[2] * (randNum - 1))})`;
}

const createHtmlObj = (randNum) => {
    let li = document.createElement("li");
    li.classList.add("rand-obj");
    li.classList.add("shadow-sm");
    li.style.height = `${randNum * 5}px`;
    li.style.backgroundColor = createGradient(randNum);

    return li;
}

export const createRandomArr = () => {
    container.innerHTML = '';

    // Create  array
    let i = 1;
    let arr = [...new Array(100)].map(() => {
        const obj = Object.create(randObj);
        obj.value = i++;
        obj.htmlElement = createHtmlObj(obj.value);
        return obj;
    });

    // Randomize (Fisher–Yates)
    for (i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    displayArr(arr);
    return arr;
}

/** ----- Displays HTML when passed obj arr ----- */
export const displayArr = (arr) => {
    arr.forEach(el => container.appendChild(el.htmlElement));
}

/** ----- Slows down loops to see step by step ----- */
export const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}