#!/usr/bin/node
const myObject = {
    type: 'object',
    value: 12
  };
  console.log(myObject);
 
 function incr(){
    myObject.value += 1;
    return myObject.value;
 }
//  incr.call(myObject);
myObject.incr = incr;
 console.log(myObject);

//  myObject.incr = incr;
//   myObject.incr();
//   console.log(myObject);
//   myObject.incr();
//   console.log(myObject);
//   myObject.incr();
//   console.log(myObject);