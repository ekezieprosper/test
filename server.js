// // 
// const http = require("http")
// // create host
// const host = "localhost"
// // create port
// const port =  1234


// //create a server using a call back function 
// const server = http.createServer((req,res)=>{
// res.writeHead(200,{"content-Type":"text/plain"})
// res.write("i'm saved \n")
// res.write("jesus my saviour \n")
// res.write("in christ i live \n")
// res.end("")
// })

// // connecting port to server
// server.listen(port,host,()=>{
// console.log(`i am alive`);
// }
// )





// const http = require("http")
// const fs = require("fs")
// const host = "localhost"
// const port = 1234

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{"content-Type":"text/plain"})
//     const readStream = fs.createReadStream("./testfile.txt")
//     readStream.pipe(res)
// })

// server.listen(port,host,()=>{
//     console.log(`listen: ${host}: ${port}`);
// })











// const http = require("http")
// const fs = require("fs")
// const host ="localhost"
// const port = 4444

// const server = http.createServer((req, res)=>{
//     res.writeHead(200,{"content-Type": "text/plain"})

//     const readStream = fs.createReadStream("./testfile.txt", "utf8")
//     readStream.pipe(res)
// })

// server.listen(port,host,()=>{
//     console.log(`i'm listening to: ${host}:and: ${port}`);
// })


const email = "japhethprosper234@gmail.com"
let answer = prompt("input Email")

if (answer!==email) {
    alert("wrong input");
} else {
    alert("coeerct");
}