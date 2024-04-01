import LineArr from './lineArr.ts';

export default class Algos extends LineArr {
  isSorted = false;

  constructor() {
    super();
  }

  async bubbleSort() {
    do {
      for (let i = 0; i < this.arr.length - 1; i++) {
        if (this.arr[i].value > this.arr[i + 1].value) {
          [this.arr[i], this.arr[i + 1]] = [this.arr[i + 1], this.arr[i]];
          this.isSorted = true;
          this.displayArr();
        }
        await this.sleep(25);
      }
    } while (this.isSorted);
  }

  async insertion() {
    let element;

    for (let i = 1; i < this.arr.length; i++) {
      element = this.arr[i].value;

      for (let j = i - 1; j >= 0; j--) {
        if (element < this.arr[j].value) {
          [this.arr[j + 1], this.arr[j]] = [this.arr[j], this.arr[j + 1]];
          this.displayArr();
          await this.sleep(25);
        }
        else {
          break;
        }
      }
    }
  }
};

