// // working with async/await
// // import a file system module

// // const fs = require("fs")

// // const myBad = async()=>{
// //   try{
// //     await fs.readFile("./testfile.txt", "utf8", (error, data)=>{
// //       if(error){
// //         console.log("this file does not exist");
// //       }
// //       else{
// //         console.log(data);
// //       }
// //     })
// //   }catch(e){
// //     console.log(e);
// //   }
// // }
    
// // myBad()

// const fs = require("fs")
// const mydoc = async()=>{
//   try {
//     const content = "hating is a sin"
//     await fs.writeFile("./testfile.txt", content, (error)=>{
//       if (error) {
//         console.log("faild");
//       } else {
//         console.log("success");
//       }
//     })

//   } catch (error) {
//     console.log("e.message");
//   }
// }

// mydoc()













const { error } = require("console")
const fs = require("fs")
const mylove = async()=>{
  const data = "life don tire me"
  await fs.writeFile(data, "./testfile.txt",(error)=>{
    if (error) {
      console.log("get out");
    } else {
      console.log("YES<YES");
    }
  })
} 