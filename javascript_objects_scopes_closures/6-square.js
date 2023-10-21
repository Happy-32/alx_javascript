#!/usr/bin/node
// const Square = require('./5-square');

// class Square1 extends Square{
//     constructor(size){
//         super(size);
//         // this.size = size;
//         // console.log("Just inherited")
//     }
//     charPrint(c){
//         let i, j;
//         for (i=0; i<this.size; i++){
//             let row = '';
//             for(j=0;j<this.size;j++){
//                 if (typeof c === 'undefined'){
//                     row += "X"
//                 } else{
//                     row += c;
//                 }
//             }
//             console.log(row);
//         }
//     }
// }
 
// // const s1 = new Square(3);
// // s1.print()

// module.exports = Square1;

const BaseSquare = require('./5-square');

class Square extends BaseSquare {
  constructor(size) {
    super(size);
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

module.exports = Square;
