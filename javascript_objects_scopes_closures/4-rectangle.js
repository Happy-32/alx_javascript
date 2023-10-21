#!/usr/bin/node
class Rectangle {
    constructor(w, h) { 
        if (w>0 && h>0){
            this.width = w;
            this.height = h;
        }
        else if (w <= 0 || h <= 0){
            
        }

        else if (w > 0 && h <= 0){
        }

        else if (w <= 0 && h > 0){
        }

        
    }
    print(w=this.width,h=this.height){
        let i, j;
        for (i=0; i<h; i++){
            let row = '';
            for(j=0;j<w;j++){
                row += 'X';
            }
            console.log(row);
        }
    }

    rotate() {
        const temp = this.width;
        this.width = this.height;
        this.height = temp;
        //just interchange the values of height and width
        //when print is called, execute with the new values
      }
    
      double() {
        this.width *= 2;
        this.height *= 2;
      }
    // rotate(){
    //     this.print(this.height, this.width);
    // }
    // double(){
    //     this.print(this.width*2,this.height*2);
    // }

};





// const r1 = new Rectangle(2, 3);


module.exports = Rectangle;