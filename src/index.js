class Sorter {
  constructor() {
    // your implementation
    this.array = [];
    this.arrLength = 0;
  }

  add(element) {
    // your implementation
    this.array.push(element);
    this.arrLength++;
  }

  at(index) {
    // your implementation
    return this.array[index];
  }

  get length() {
    // your implementation
    return this.arrLength;
  }

  toArray() {
    // your implementation
    return this.array;
  }

  sort(indices) {
    // your implementation
    return this.array.sort(function(a,b) {
      return a-b;
    })
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;