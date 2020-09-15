
//---------- JavaScript Basics ------------

console.log('hello world');

let name = "Zeeshan";
console.log(name);

// Rules for Variables---
// Variables cannit be reserved keyword eg: if , not
// should be meaningful 
// connot start with number
// Cannot contain space
// Case Sensitive

const value = 10;
// const value cannot be changed

// Variable types

// ---- Primitive Types
// Inclde : String, Number, Boolean, undefined, null

let name = "Zeeshan"; // String Literal
let age = 22; // Number literal
let isTrue = true; // Boolean Literal
let firstName = undefined; //undefined
let lastName = null; //null

-- Reference Types
Include: Object, Array, Function

Object

let person = {
    name: 'Zeeshan Haider',
    age: 22
};

// --- Access Object values

// Dot Notation
person.name = 'Shaheen';

// Bracket Notation
person['name'] = 'Zeeshan';
console.log(person.name);

String Primitive
const message = 'hello';
console.log(message.toUpperCase());
//String Object
const anotherString = new String('hi');

//---Arrays

let selectedColors = ['red', 'blue']; // Array Literals

// Add element to array
selectedColors[2] = 'yellow';

//Access values
//console.log(selectedColors[0]);

console.log(selectedColors);

//-- Functions

function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName + '!');
}

// calling function
greet('Zeeshan', 'Shaheen');


function square(number) {
    return number * number;
}

let no = square(2);
console.log(no);

// -- Factory Functions

function creatCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = creatCircle(1);
console.log(circle1);

// Constructoe Function

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(1);

// ---Getter Setter

const person = {
    firstName: 'Zeeshan',
    lastName: 'Haider',
    get fulName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fulName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fulName= 'Zeeshan Shaheen';
console.log(person);


// COnditional Statemet

// if..else
let hour = 17;
if (hour >= 6 && hour < 12) {
    console.log('Good Morning');
} 
else if (hour >=12 && hour < 18) {
    console.log('Good Afternoon');
} else {
    console.log('Good Evening');
}

// Switch Statements

var day = 4;
switch (new Date().getDay()) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
}


// -- Loops

// -- For Loop

for (let i = 0; i < 10; i++) {
    if (i % 2 != 0)
        console.log(i);
}

// Another Method

for (let i = 10; i >= 1; i--) {
    if (i % 2 != 0)
        console.log(i);
}

// while

while (i < 10) {
    text += "The number is " + i;
    i++;
  }



// -- Clonning an Object

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const another = Object.assign({}, circle);
console.log(another);


// --- Templete Literatels

const msg = `This is my
first message`;
console.log(msg);

