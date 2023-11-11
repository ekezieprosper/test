// import the event module
const eventEmitter = require("events")

// extend a class to the eventEmitter
class myEmitter extends eventEmitter {}

// create an object of he class myEmitter
const emittedObject = new myEmitter()

emittedObject.on("lightUp", ()=>{
    console.log("UP NEPA");
})

emittedObject.emit("lightUp")
