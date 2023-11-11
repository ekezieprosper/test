const {createReadStream, createWriteStream} = require("fs")
const {Transform} = require("stream")

const readable = createReadStream("./pro.txt")
const writable = createWriteStream("./test.txt")

const TransformToUpperCase =  ()=>{
    return new Transform({
        transform(chunk,encoding,callback){
            const uppercase = chunk.toString().toUpperCase()
            callback(null,uppercase)
        }
    })
} 

const uppercase = TransformToUpperCase()
readable.pipe(uppercase).pipe(writable)
console.log("finished")
