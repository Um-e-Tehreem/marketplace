let userObj = {
    name: "Kamran Khan Tessori",
    designation: "Governor Sindh",
    residence: "Governor House"
};
console.log(userObj);
console.log(userObj["name"]);

let teacherObj = {
    name: "Ali Aftab",
    designation: "Teacher",
    residence: "Karachi",
    age: 15,
    expertDeveloper: true,
    qualities: {
        hairColor: "Black",
        eyesColor: "brown",
        height: 5.11
    }
};

console.log(teacherObj.qualities);
console.log(teacherObj.qualities["hairColor"]);
console.log(teacherObj["qualities"].eyesColor);
console.log(teacherObj["qualities"]["height"]);

let studentObj = {
    name: "Ume Tehreem",
    designation: "Student",
    residence: "karachi",
    age: 19,
};

console.log(studentObj);
console.log(studentObj["age"]);