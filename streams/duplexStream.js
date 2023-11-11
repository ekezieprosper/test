const { PassThrough, Duplex} = require("stream")

const { createReadStream,createWriteStream } = require("fs")
const readStream = createReadStream("./pro.txt")
const writeStream = createWriteStream("./test.txt")
class sharp extends Duplex{
    constructor(time){
        super()
        this.delay = time
    }
    read(){

    }
    write(chunk,encoding,callback){
       this.push(chunk)
       setTimeout(callback,this.delay) 
    }
}
const tunnel = new PassThrough()
const guys = new sharp()

let amount = 0;
tunnel.on("data",(chunk)=>{
    amount+= chunk.lenght
    console.log("name : ",chunk);
})
readStream.pipe(tunnel).pipe(writeStream)