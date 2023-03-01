/* 模拟实现一个动态数组 */
class MyVector<T> {
  private data: Array<T>;
  public capacity: number;
  public size: number;

  constructor(capacity: number) {
    this.data = new Array(capacity);
    this.capacity = capacity;
    this.size = 0;
  }
  public push(key: T) {
    /* if (this.size < this.capacity) {
			this.data[this.size++] = key
    } */
    if (this.size === this.capacity) {
      this.resize(2 * this.capacity);
    }
    this.data[this.size++] = key;
  }
  public pop(): T | undefined {
    if (this.size > 0) {
      const ret: T = this.data[this.size - 1];
      this.size--;
      /* 防止复杂度震荡 */
      if (this.size === this.capacity / 4) {
        this.resize(this.capacity / 2);
      }
      return ret;
    }
  }
  private resize(capacity: number): void {
    console.log('resize');
    if (capacity >= this.size) {
      const newData: Array<T> = new Array(capacity);
      for (let i = 0; i < this.size; i++) {
        newData[i] = this.data[i];
      }
      this.data = null;
      this.data = newData;
      this.capacity = capacity;
    }
  }
}

const vector: MyVector<number> = new MyVector<number>(10);

for (let i = 0, len = 17; i < len; i++) {
  vector.push(i);
}
console.log(vector.capacity);
console.log(vector.size);
