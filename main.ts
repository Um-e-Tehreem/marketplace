import { myFirst } from "./modules/index.js";
console.log(myFirst);
import { myTeacher, mySecondTeacher } from "./second.js";
console.log(myTeacher, mySecondTeacher);


// //inquirer assiment done.

// import inquirer from "inquirer";

// let answers = await inquirer.prompt([{
//       name: "age",
//       type: "number",
//       message: "Enter your Age:",
// }
// ]);
// console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");

// operators practice.

let num1: number = 2;
let num2: number = 5;
 
let sum: number = num1 + num2;
console.log(sum);
 
let num3 = 20;
let num4 = 5;

let divi = num3 / num4;
console.log(divi);

let num5: number = 5;
let num6: number = 2;
 
let multi = num5 * num6;
console.log(multi);

let num7 = 4;
let num8 = 3;

let sub = num7 - num8;
console.log(sub);
   
// Exponentiation [**] practice.

let layer: number = 7;
let apples: number = 7;

let power: number = layer ** 2;
console.log(power);

let layers = 3;
let apple = 3;

let powers =  layers ** 2;
console.log(powers);

// Modulus [%] practice.

let mango: number = 7;
let bags: number = 3;

let Reminder: number = mango % bags;
console.log(Reminder);

let pencil = 13;
let boxes = 2;

let reminder = pencil % boxes;
console.log(reminder);

// Unary operators [++] [--] practice.

// post increment = a++       // post decrement = a--
// pre increment = ++a        // pre decrement = --a

let a : number = 5;
let b : number = 2;

console.log(a++);
console.log(a);
console.log(++a);
console.log(b++);

let c : number = 6;

console.log(c--);
console.log(c);
console.log(--c);
