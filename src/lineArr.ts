interface Line {
    value: number;
    classes: string;
    htmlElement: HTMLElement;
}

export default class LineArr {
    len: number;
    arr: Line[];
    container: HTMLElement | null;

    constructor() {
        this.len = 0;
        this.arr = []
        this.container = document.querySelector('.container');
    }

    createGradient(randNum: number): string {
        let cl1 = 230, cl2 = 77, cl3 = 45;
        let cr1 = 252, cr2 = 166, cr3 = 29;
        let rgbDiff = [(cr1 - cl1) / 100, (cr2 - cl2) / 100, (cr3 - cl3) / 100];

        return `rgb(${cl1 + (rgbDiff[0] * (randNum - 1))},
${cl2 + (rgbDiff[1] * (randNum - 1))},
${cl3 + (rgbDiff[2] * (randNum - 1))})`;
    }

    createHtmlObj(randNum: number) {
        let li = document.createElement("li");
        li.classList.add("rand-obj");
        li.classList.add("shadow-sm");
        li.style.height = `${randNum * 5}px`;
        li.style.backgroundColor = this.createGradient(randNum);

        return li;
    }
    createRandomArr() {
        if (this.container) {
            this.container.innerHTML = '';
        }

        // Create  array
        let i = 1;
        let arr = [...new Array(100)].map(() => {
            let obj = {} as Line;
            obj.value = i++;
            obj.htmlElement = this.createHtmlObj(obj.value);
            return obj;
        });

        // Randomize (Fisher–Yates)
        for (i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }

        this.arr = arr;
        this.displayArr();
    }

    /** ----- Displays HTML when passed obj arr ----- */
    displayArr() {
        this.arr.forEach(el => {
            if (this.container && el.htmlElement) {
                this.container.appendChild(el.htmlElement);
            }
        });
    }

    /** ----- Slows down loops to see step by step ----- */
    sleep(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
