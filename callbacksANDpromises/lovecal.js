// // calculator(prosper,oyinade)=>{}


// const love = new Promise((resolve)=>{
//     const boy = Math.floor(Math.random()*100)
//     resolve(boy)
// });

// const loveAgain = (s)=>{
//     const boy = s
//     const girl = Math.floor(Math.random()*100)
//     const answer =(boy + girl)/2;
//     const result = {boy: s, girl: girl, answer: answer}
//     return result
// }

// const moreLove =(s)=>{
//     switch(true){
//         case(s.answer >=90):
//             return(`boy is: ${s.boy}, girl is: ${s.girl}, answer is: ${s.answer} You're a match`)
//         case(s.answer >=80):
//             return(`boy is: ${s.boy}, girl is: ${s.girl}, answer is: ${s.answer} 50:50`)
//         case(s.answer >=60):
//             return(`boy is: ${s.boy}, girl is: ${s.girl}, answer is: ${s.answer} Are you still sure??`)
            
            
//             default:
//             return(`boy is: ${s.boy}, girl is: ${s.girl}, answer is: ${s.answer} JAPA!!!!`)
//      }
// }
// function failed(error){
//     console.error(`error occured: ${error}`);
// }
// love.then((result)=> loveAgain(result))
// .then((freshResult)=> moreLove(freshResult))
// .then((finalResult) =>{
//     console.log(`this is it: ${finalResult}`);
// })
// .catch(failed)


// // let myEmail = "japhethprosper234@gmail.com"
// // let answer = prompt("input email")
// // if (!answer==myEmail) {
// //     alert("sharp")
// // }
// // else{
// //     alert("wrong")
// // }


// const love = (male, female)=>{
//     const man = Math.floor(Math.random()*100)
//     const woman = Math.floor(Math.random()*100)
//     const average = (man + woman)/2
    
// setTimeout(()=>{
//     console.log(`the result of ${male}is ${man} and the result of ${female} is ${woman}, the averge is  ${average} `);
// },1000)

// setTimeout(() => {
//     if (average>= 70) {
//         console.log("you're a match");
//     }
//     else if(average >= 60){
//         console.log("you're slightly compatable");
//     }
    
// else if(average >=50){
//     console.log("are you still sure about this");
// }

// else if(average <=40){
//     console.log("don't marry");
// }

//     else {
//         console.log("run for ur life");
//     }
// }, 2000);
// }

// love("victory", "chioma")


















const love = (male, female)=>{
    const man = Math.floor(Math.random()*100)
    const woman = Math.floor(Math.random()*100)
    const average = (man + woman)/2


    setTimeout(() => {
        console.log(`${male} score is ${man}, ${female} score is ${woman}, and the average is ${average}%`);

if (average >= 80) {
    console.log("you're a match");
} 
else if(average >= 70){
    console.log("you're slightly compatible");
}
else if (average >= 60){
    console.log("this relationship might be a mistake");
}
else if(average >=50){
    console.log("are you still sure about this?");
}
else if(average >=40){
    console.log("dont marry");
}
else {
    console.log("JAPA");
}
    }, 2000);
}

love("" , "")












