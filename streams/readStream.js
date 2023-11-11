// readStream
// imprt the file system module (fs)
const fs = require("fs")

// read a file
const myReadStream = fs.createReadStream("./test.txt", "utf8")

// read the file in chunks
myReadStream.on("data",(chunk)=>{
    console.log(`ourChunk: ${chunk}`);
});

// end the read stream opration 
myReadStream.on("end",()=>{
    console.log("END OF OPREATION");
})