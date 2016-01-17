
<html>
<head>
<script>

/*let create an interface class just like the way it works in Java programming language.
Let call it Runnable
*/
 if(!js) var js={};
 js.Runnable =(function()
 { 
	Object.defineProperty(this,"id",{value:(++js.Runnable.counterUID), writable:false});
 });
  js.Runnable.counterUID=0;
 //an empty  method called run
 js.Runnable.prototype.run=(function(){
  console.log(this.name);
 });
 
 
 
 
 
 //Let create a thread class that takes the interface class 
 js.Thread=(function(runnableInterface, threadname)
 {
    if(runnableInterface instanceof  js.Runnable)// this will create a runnable object that can be changed but readonly
		Object.defineProperty(this, "runnable",{value:runnableInterface, writable:false} )
	 //an init function that will be called 
	 onInit:(function()
	 { 
	    this.threadid = null;
	    if(!this.runnable)this.runnable= new js.Runnable();
		Object.defineProperty(this.runnable,"name",{value:threadname, writable:false});
	 }).bind(this)();// so that will can used the this  inside the onInit function
	
 });
 
js.Thread.prototype.sleep=100;
js.Thread.prototype.interrupt= false;


 js.Thread.prototype.start=(function()
 {  if(!this.sleep)this.sleep=100;
     this.threadid = window.setInterval((function()
	 {    //if interupt is true stop the thread function
		  if(this.interrupt){
			 window.clearInterval(this.threadid);
			 console.log(this.threadid+ " Thread killed ");
			 this.threadid = null;
			}
		  this.runnable.run.bind(this.runnable)();
	 }).bind(this),100);
	 return this;
 });
 
 
 //A simple javaScript function to for inheritances
 //p= parant class 
 //construct is the constructor for the child class
 js.extends = (function (p, construct)
{   
    //throw a class defination ex
	   if(!js.Object.isClass(construct)) return ;
	   var cls = construct;
	    Object.defineProperty(cls.prototype,"displayName",{value:"js.Class", writable:true});
		if(p && p !== null){
			  cls.prototype = Object.create(p.prototype);
			  cls =  Object.assign(cls,p);
			  Object.defineProperty(cls.prototype,"constructor",{value:cls, writable:true});
		}
	  return cls; 
});
 
 
 //used this function to inherit the js.Runnable class
 js.Game = js.extends(js.Runnable,(function()
 { //called the call method to called the default constructor of js.Runnable
	js.Runnable.call(this);
 }));
 
 
 
 //override the run method
 js.Game.prototype.run=(function(){
    console.log("The game started ");
 });
 
 //a function to call so that the game will run on its own thread
js.Game.prototype.start=(function()
{
  //pass the object to the game
    var thread = new js.Thread(this, "game");
    thread.start();
});

//create a game object 

var game = new js.Game();
/*if the game start method is  a new thread will be created,
 when the thread is created  the run method of the game will be the function
 that the thread will run continues on the time interface specified default is 100 utils its killed or interrupted;
*/
game.start();
 
</script>
</head>
