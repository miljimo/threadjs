"use strict"

class Runnable 
{ 
    constructor(){
        Object.defineProperty(this,"id",{value:(++Runnable.counterUID), writable:false});
    }
}

Runnable.counterUID = 0;


//an empty  method called run
Runnable.prototype.run= (function(){
   throw new Error("@method not implemented")
});


export default Runnable;