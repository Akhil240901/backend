// const EventEmitter=require('events');
//import EventEmitter as class from event module
import EventEmitter from "events";

//create object
const event=new EventEmitter();


event.on('sayMyName',()=>{
                              console.log("My name is akhil");
})

event.emit("sayMyName");