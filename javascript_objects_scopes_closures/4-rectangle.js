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
    rotate(){
        this.print(this.width, this.height);
    }
    double(){
        this.print(this.width*2,this.height*2);
    }

};


module.exports = Rectangle;