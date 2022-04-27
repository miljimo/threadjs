"use strict"
import Runnable from "./runnable"
import Thread  from "./thread" 
import default_lib from "./default"


class Component{

    constructor(){
        this.name= "component;"
    }
}

Component.prototype.attachMethods=(function(methods){
    for (var attr in methods){
        const method = methods[attr];
        if(typeof method =="function"){
            this[attr] =(function(){
                          console.log(Proxy)
                          console.log(Promise)
                          method.bind(this);
                        });
        }
    }
})

var c = new Component()
c.attachMethods(default_lib)
c.render();


