const chalk = require("chalk")
const trafficlight = ()=>{
    const red =  "stop"
    const yellow = "get ready"
    const green = "Go"

    setTimeout(() => {
            if (red) {
                console.log(chalk(red));
            }
            // else{
            //     console.log("ghjvnd,");
            // }
    }, );

    setTimeout(() => {
        if (yellow) {
            console.log(chalk(yellow));
        }
        // else{
        //     console.log("vjk");
        // }
    }, 3000);

    setTimeout(() => {
        if (green) {
            console.log(chalk(green));
        } 
        // else {
        //     console.log("popo");
        // }
    }, 4000);
}

trafficlight()