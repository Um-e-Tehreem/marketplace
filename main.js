import { myFirst } from "./modules/index.js";
console.log(myFirst);
import { myTeacher, mySecondTeacher } from "./second.js";
console.log(myTeacher, mySecondTeacher);
//inquirer assiment done.
import inquirer from "inquirer";
let answers = await inquirer.prompt([{
        name: "age",
        type: "number",
        message: "Enter your Age:",
    }
]);
console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");
// operators practice.
let num1 = 2;
let num2 = 5;
let sum = num1 + num2;
console.log(sum);
let num3 = 20;
let num4 = 5;
let divi = num3 / num4;
console.log(divi);
let num5 = 5;
let num6 = 2;
let multi = num5 * num6;
console.log(multi);
let num7 = 4;
let num8 = 3;
let sub = num7 - num8;
console.log(sub);
// Exponentiation [**] practice.
let layer = 7;
let apples = 7;
let power = layer ** 2;
console.log(power);
let layers = 3;
let apple = 3;
let powers = layers ** 2;
console.log(powers);
// Modulus [%] practice.
let mango = 7;
let bags = 3;
let Reminder = mango % bags;
console.log(Reminder);
let pencil = 13;
let boxes = 2;
let reminder = pencil % boxes;
console.log(reminder);
// Unary operators [++] [--] practice.
// post increment = a++       // post decrement = a--
// pre increment = ++a        // pre decrement = --a
let a = 5;
let b = 2;
console.log(a++);
console.log(a);
console.log(++a);
console.log(b++);
let c = 6;
console.log(c--);
console.log(c);
console.log(--c);
// Home work.
let e = 3;
let f = 1;
let g;
g = ++e + e++ + --f + f-- + e + f++ + f;
console.log(g);
let h = 5;
let i = 2;
let j;
j = ++h + h++ + --i + i-- + h + i++ + i;
console.log(j);
// Combining Operators, practice.
let result = 3 + 4 * 4;
console.log(result);
let results = 5 + 3 - 8;
results++;
console.log(results);
let value = 2 - 5 + 7;
console.log(value);
let values = 3 + 4 * 5;
values++;
console.log(values);
let eidi = 9999;
if (eidi == 10000) {
    console.log("hurraayyyyy");
}
else {
    console.log("ohhhh shit");
}
;
let weather = "cloudy";
if (weather == "Rainy") {
    console.log("wear a rain coat");
}
else if (weather == "cloudy") {
    console.log("wear a banniyaan");
}
else if (weather == "cloudy") {
    console.log("wear a chaddi banniyaan");
}
else {
    console.log("wear sunglases");
}
let myEidii = 7500;
if (myEidii >= 7500) {
    console.log("go to tariq road");
}
else if (myEidii >= 5000 && myEidii < 7500) {
    console.log("go to burns road");
}
else if (myEidii >= 2500 && myEidii < 5000) {
    console.log("go to rayri");
}
else {
    console.log("soo jao");
}
function azeemCook() {
    let cooked = "biryani";
    console.log(cooked);
}
function habibullahCook() {
    let cooked = "white karahi";
    console.log(cooked);
}
azeemCook(); //invoke //call.
habibullahCook();
function taskOne() {
    console.log("Task one done");
}
taskOne();
// string concatention
let myyName = "Ume tehreem";
let myyLastName = " Muhammad jamil ";
let myyFullName = myyName + '' + myyLastName;
console.log(myyFullName);
// template literals
let myName = "Ume tehreem";
let myAge = 19;
let myDetails = `my name is ${myName} and i am ${myAge} years old`;
console.log(myDetails);
function halfryEgg(egg, butter, salt) {
    return egg + butter + salt;
}
console.log(halfryEgg(1, 1.5, 0.5));
// Global scope
var name1 = "tehreem";
let name2;
const name3 = "rubab";
// Block scope
if (name1 = "tehreem") {
    name2 = "esha";
}
console.log(name2);
function coffee(milk, sugar, coffee) {
    return milk + sugar + coffee;
}
console.log(coffee(1, 1.5, 1));
// Array literals.
let arr = [1, 'Ali', true];
console.log(arr.length);
console.log(arr[1] = 'Bilal');
let students = [{
        name: 'Tehreeem',
        age: 19,
        isdeveloper: true,
    },
    {
        name: 'Sir Bilal',
        age: 30,
        isdeveloper: true
    }];
console.log(students[1].age);
let fruits = ['apple', 'banana', 'orange',
    'grapes', 'cherry'];
fruits.push('mango'); // push add karta he last me
let dropItem = fruits.pop(); // pop last walay ko remove karta he
fruits.unshift('mango'); // start me add karta he
let dropsItem = fruits.shift(); // start walay ko remove kaarta he
let sliceItems = fruits.slice(); // index, lenght 
fruits.splice(1, 0, 'mango', 'kiwi', 'pineapple'); // delete kar saktay he or add bhi kar saktay he
console.log(fruits);
console.log(dropItem);
console.log(fruits);
console.log(dropsItem);
console.log(sliceItems);
console.log(fruits);
// multi data types
let vegetables = [true, 5,
    "khaas guest"];
let personalInfo = ['Ali', 123, true];
let [name, rollNo, onsite] = personalInfo;
console.log("name:", name, "rollNo:", rollNo, "onsite:", onsite);
// any leraning
let mySirName = "ubaid";
console.log(mySirName.toUpperCase());
let age = 5;
if (typeof age === "number") {
    console.log(age = 2);
}
else {
    console.log("incorrect data");
}
let person = "Ali Aftab";
console.log(person.toUpperCase());
