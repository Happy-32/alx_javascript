#!/usr/bin/node
const Rectangle = require('./4-rectangle');

class Square extends Rectangle{
    constructor(size){
        super(size, size);
        this.size = size;
        // console.log("Just inherited")
    }
}
 
// const s1 = new Square(3);
// s1.print()

module.exports = Square;