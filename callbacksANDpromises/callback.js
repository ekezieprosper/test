//  A callback function is a function that is pass as an argument in another function

// setTimeout(()=>{
//     console.log("welcome")
// },4000)

// setTimeout(()=>{
//     console.log("welcome")
// },4000)

// setTimeout(()=>{
//     console.log("welcome")
// },4000)

// setTimeout(()=>{
//     console.log("welcome")
// },6000)





// // import fs module
// const fs  = require("fs")

// // import a document path
// const document = "./kkks.txt"

// // implement file with a callback
// fs.readFile(document,"utf8", (error, data)=>{
//     if (error) {
//         console.log("messege:evian file" + document);
//     } else {
        
//         console.log(data);
//     }
// })




const fs  =  require("fs")

const  doc = "./kkk.txt"

fs.writeFile(doc, "i love jesus",(error)=>{
    if (error) {
        console.log("bad");
    } else {
        console.log("successfull");
    }
})


