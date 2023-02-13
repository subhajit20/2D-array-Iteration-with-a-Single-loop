class MultiArrayIterator{
    
    constructor(arr=null){
        this.multiarr = arr;
        this.oneDimArray = [];
    }

    iterate(){
        if(this.multiarr == null){
            return [];
        }else{
            let x = 0;
            let y = 0;
            let len =  this.multiarr.length - 1
            let nthArr =  this.multiarr[x].length - 1
            while(x <= len && y <= nthArr){
                this.oneDimArray.push(this.multiarr[x][y])
                y = y + 1
                if(y > nthArr && x <= len){
                    x = x + 1;
                    y = 0;
                    if(x > len){
                        break;
                    }else{
                        nthArr = this.multiarr[x].length - 1;
                    }
                }
            }
            return this.oneDimArray;
        }
    }
}

let arr2 = [
    ["s","u","b"],
    ["h","a","i"],
    ["i","t"]
];

const mArr = new MultiArrayIterator(arr2);

const d = mArr.iterate();
console.log(d)