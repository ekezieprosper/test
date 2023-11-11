// promise takes 2 parameters = resolve and reject


// syntax of promise

// const value = new Promise((resolve,reject)=>{
//     return resolve

// })



// function wait(ms) {
//     return  new Promise((resolve) =>{
//         setTimeout(resolve,ms)
//     });
// }
// wait(5000).then(() => {
//     console.log("Ahmed was the instructor for today's class")
// });




// const fs = require("fs").promises

// const mydoc = "./promise.txt"

// fs.readFile(mydoc, "utf-8").then(
//     (data)=>{
//         console.log(nhvd);
//     }
//     .catch(()=>{

//     })
// )











const fs = require("fs").promises

const newdoc = "./promise.txt"
const content = "mr ubani sabi teach"

fs.writeFile(newdoc, content,)
.then(()=>{
 console.log("that's true");
})
.catch((e)=>{
    console.log("messege", e);
})