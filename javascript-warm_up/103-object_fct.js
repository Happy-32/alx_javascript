const myObject = {
   type: 'object',
   value: 12
 };
 
 console.log(myObject);
 
 function incr() {
   this.value += 1;
   return this.value;
 }
 

 myObject.incr = incr;
 
 console.log(myObject);

// myObject.incr = function(){
//    incr.call(this);
//  };
 
 myObject.incr();
 console.log(myObject);
 
 myObject.incr();
 console.log(myObject);
 
 myObject.incr();
 console.log(myObject);
 