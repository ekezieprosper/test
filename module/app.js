// // main application
// // import module
// // method 1 (dot notation)

// const myAddition = require("./maths");
// const mySubtraction = require("./maths");
// const myMultiplication =require("./maths")
// const myDivision = require("./maths")

// // add two numbers
// let firstNumber = 5;
// let secondNumber =20;
// let result = myAddition.add(firstNumber, secondNumber);
// console.log(result);

// // multiply two numbres
// let m = 5;
// let n =20;
// let  answer= myMultiplication.mult(n, m);
// console.log(answer);


// // sub two numbers
// let a = 100;
// let b =20;
// let solution = mySubtraction.sub(a, b);
// console.log(solution);


// // divide two numbres
// let o = 20;
// let p =120;
// let sumUp = myDivision.division(o, p);
// console.log(sumUp);



// method 2 (destructuring)
const {add, sub, mult, division} = require("./maths")
// add two numbers
let firstNumber = 5;
let secondNumber =20;
let result = add(firstNumber, secondNumber);
console.log(result);

// sub two numbers
let a = 100;
let b =20;
let solution = sub(a, b);
console.log(solution);

// multiply two numbres
let m = 5;
let n =20;
let  answer= mult(n, m);
console.log(answer);

// divide two numbres
let o = 20;
let p =120;
let sumUp = division(o, p);
console.log(sumUp);
