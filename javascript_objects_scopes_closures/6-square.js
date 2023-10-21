#!/usr/bin/node
const Square = require('./5-square');

class Square1 extends Square {
  constructor(size) {
    super(size);
  }

  double(){
    this.size = this.size*2;
  }

  charPrint(c) {
    if (c === undefined) {
      c = 'X';
    }
    for (let i = 0; i < this.size; i++) {
      let row = '';
      for (let j = 0; j < this.size; j++) {
        row += c;
      }
      console.log(row);
    }
  }
}

module.exports = Square1;
