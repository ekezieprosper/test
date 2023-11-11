const love = (male, female)=>{

    const man = Math.floor(Math.random()*100)
    const woman = Math.floor(Math.random()*100)
    const average = (man + woman) /2

    setTimeout(() => {
        console.log(`${male} average is ${man}%`);
    }, 1000);

    setTimeout(() => {
        console.log(`${female} average is ${woman}%`);
    }, 2000);

    setTimeout(() => {
        console.log(`and the answer = ${average}%`);
    }, 3000);

setTimeout(() => {
    if (average >= 70) {
        console.log("you're made for each other");
    } 
    
    else if(average >= 60){
        console.log("you're slightly compatible");
    }

    else if(average >= 50){
        console.log("this relationship might be a mistake");
    }

    else if(average >= 40){
        console.log("are you still sure about this?");
    }

    else {
        console.log("run for your life");
    }
}, 4000);
}

love("ifeanyi" , "chioma")