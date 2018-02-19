class Sorter {
  constructor() {
    // your implementation
    this.array = [];
    this.arrLength = 0;
    this.comparator = false;
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
    var temp = [];
    for (var i = 0; i < indices.length; i++) {
      temp[i] = this.array[indices[i]];
    }
    if (this.comparator != false) {
      temp.sort(this.comparator)
    }
    else {
      temp.sort(function (a, b) {
        return a - b;
      })
    }
    for (var j = 0; j < temp.length; j++) {
      this.array[j] = temp[j];
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;