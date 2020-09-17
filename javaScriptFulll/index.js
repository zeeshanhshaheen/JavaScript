// --JavaScript
// --Data Types
// --Number
// --Boolean
// -- String
// --Objects
// -- Arrays
// -- special values eg: undefined, null, NaN

// variables

var general = 6; // variable decleration
console.log(typeof general); // checking the type of variable
console.log(general);  // printing value on console
document.write("hello world!");

var general1 = "Zeeshan";
console.log(typeof general1);

general1 = [1, 2, 3, 4]
console.log(typeof general1);
console.log(general1.length); // to check the length of array

// // Type conversion 

console.log("hi " + "there"); // concatination
console.log(2 + " hello");

// // prompt
var num = prompt("Enter some value");
console.log(typeof num);
console.log(parseInt(num) + 9); // Type conversion 

// // Alert
alert("hello there!");

// --Javascript Operators
// --Arthematic Operators -- +, -, /. *
// -- Assignment Operators
// --Ternery Operators
// -- String Operators
// -- Compersion operators
// -- Boolean Operators

// -- Conditional Statements
// If -- else

if (condition) {

} else {
}

// switch
var weight = parseFloat(prompt("Enter your weight"));
switch (weight) {
    case 1: document.write("Weight is 1");
        break;
    case 2: document.write("Weight is 2");
         break;
    default:
        break;
}


// --Loops
// for loops

var subjects = ["math", "ITC"];
var marks = new Array();
var num;
for(var j=0; j<subjects.length; j++) {
    num = parseFloat(prompt("Enter marks: "+ subjects[j]));
    marks[j] = num;
}

// for in loop

for( m in marks) {
    console.log(marks[m]);
}

// While loops
var i = 9;
while (i < 10) {
    console.log(i);
    i++;
}
// do while

do {
} while (condition);

// --Functions
// --Types: Named Functions, Anonymous Function, Self Invking Function. Constructors


// Named Function

function addNum(a, b) {
    return a + b;
}

console.log(addNum(2, 3));

// Anonymous Function

var fun = function (a, b) {
    console.log("Anonymous Function");
    return a + b;
}

console.log(fun(5, 6));

// Constructors

var c = new Function("a", "b", "console.log('fun')");
c();

// Self Invoking Function

(function(a,b) {
    console.log("self invoking functions");
    return a+b;
})(2,6);

// Object Creatiob

var person = new Object();
person.name = "Zeeshan";
person.age = 19;

// // Another Method
function creatFunction() {
    var person = new Object();
    person.name = "Zeeshan";
    person.age = 19;
    return person;
}

var details = creatFunction();
console.log(details);

// Another Method

function creatFunction() {
    var person = {};
    person.name = "Zeeshan";
    person.age = 22;
    return person;
}

var details = creatFunction();
console.log(details);

// By usig Arrays

function creatFunction() {
    var person = {};
    person["name"] = "Zeeshan";
    person["age"] = 22;
    return person;
}

var details = creatFunction();
console.log(details);

// Another Method

function creatFunction() {
    var person = {
        name: "Zeeshan",
        age: 22
    };
    return person;
}

var details = creatFunction();
console.log(details.name); // accessing person object name

// by using Constructor Function

function Person() {
    this.name = "Zeeshan";
    this.age = 22;
}

var person = new Person();
console.log(person.age);

// functions as objects
var Animal = {
    type: "Animals",
    displayType: function () {
        alert("type is: " + this.type);
    }
}

var dog = Object.create(Animal);  
dog.type = "dog"; // chaning properties
dog.displayType();
delete Animal.type; // delete some properties

// DOM(Document Obect Model)

// Finding Elements

// getElementById()
// getElementByClassName()
// getElementByTagName()
// document.querySelector();

document.getElementById("abc").innerHTML = "Hello"; // changing property using innerHTML
document.getElementById("abc").style.color = "red"; // changing style

document.getElementById("abc").setAttribute("style", "font-weight: bold;"); // to change the style


// Events

document.getElementById("abc").addEventListener("click", paraClicked);

function paraClicked() {
    document.getElementById("abc").setAttribute("style", "color:blue");

}

document.getElementById("abc").addEventListener("mouseover", paraMouseOver);

function paraMouseOver() {
    document.getElementById("abc").setAttribute("style", "color:brown");
}

function buttonClick() {
    document.getElementById("b").setAttribute("style", "color:blue");
}

// Form Validation

function validateForm() {

    // check name id added or not
    let nameVar = document.getElementById("name");
    let phoneNo = document.getElementById("pno");

    if (nameVar.value == "") {
        alert("please enter name");
    }

    if (!isNaN(nameVar.value)) {
        alert("please enter name you entered number");
    }

    if (isNaN(nameVar.value)) {
        alert("please enter phone number");
    }
}

// -- Object Orianted Programming in JavaScript

// --objects

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log('draw');
    }
}; //object literal syntax

circle.draw();

// Factory or COnstructor Function

function creatCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

const circle = creatCircle(1);
circle.draw();

// --4 Pillers
// 1: Encapsulation
// 2: Abstraction
// 3: Inheritance
// 4: Polymorpism

// --Encapsulation
// We group funactions and variables togather which is called an object
// and this is called Encapsulation. Reduce Complexity 

let employee = {
    baseSalary: 300000,
    overTime: 10,
    rate: 20,
    getWage: function () {
        return this.baseSalary + (this.overTime * this.rate);
    }
};

console.log(employee.getWage());

// Arrow Functions 

hello = () => "Hello World!";