// const EventEmitter=require('events');
//import EventEmitter as class from event module
import EventEmitter from "events";

//create object
const event=new EventEmitter();

//first function defination then 
event.on('sayMyName',()=>{
                              console.log("My name is akhil");
})
//then function call ,always have points on it
event.emit("sayMyName");