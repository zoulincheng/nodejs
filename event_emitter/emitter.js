var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listener1 = function listener1(){
  console.log('listener1 executed.');
}

// listener #2
var listener2 = function listener2(){
  console.log('listener2 executed.');
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection',listener1);

// Bind the connection event with the listner2 function
eventEmitter.addListener('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listener(s) listening to connection event");


//fire the connection event
eventEmitter.emit('connection');

//remove the blinging of listner1 function
eventEmitter.removeListener('connection', listener1);
console.log("Listener 1 will not listen now.");


//fire the connection event
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");
