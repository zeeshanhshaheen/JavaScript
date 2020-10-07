// Variables Decleration 

// Variables

// var, let, const
// variables can include letters, numbers, _, $

// var
// var name = "Zeeshan";
// console.log(name);
// var name = "Haider";
// console.log(name);

// // let 
// let name2 = "Zeeshan";
// console.log(name);
// name2 = "Haider";
// console.log(name);

// // const 
// const name3 = "Zeeshan";
// console.log(name); // cannot be re assigned...

// // object
// const person = {
//     name: 'Zeeshan',
//     age: 30
// }

// // array
// const numbers = [1, 2, 3, 4];
// numbers.push(5);
// console.log(numbers);

// Data Types

// Primitive TYpes
// Stored directly into the location

// String
// const name = 'Zeeshan Haider';
// console.log(typeof(name));
// // Number
// const agr = 40;
// // Boolean 
// const Iam = true;
// // nukk
// const car = null;
// // undefined 
// let a ;
// // symbol
// const symbol = Symbol();
// console.log(typeof(symbol));

// // Reference Types
// // Access from Memory location posinter is used

// // Array 
// const names = ['Zeeshan', 'Shaheen'];
// // Object 
// const address = {
//     city: "Multan",
//     country: "Pakistan"
// }

// Type Conversion

// let val;
// // Number to string
// // val = 123;
// val = String(123);
// val = String(1 + 2 + 3);
// // bool to string
// val = String(true);
// // date to string
// val = String(new Date());
// // Array to string
// val = String([1, 2, 3, 4]);

// // toString()
// val = (5).toString();
// val = (true).toString();

// // string to a number
// //val = '5';
// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// //val = Number('ok'); // not a number
// val = parseInt('100');
// val = parseFloat('100.055');
// console.log(val);
// console.log(typeof (val));
// // console.log(val.length); // works for string
// console.log(val.toFixed()); // works for number


// // Math Objets
// const num1 = 100;
// const num2 = 100;
// let val;

// // simple math
// val = num1 + num2;
// val = num1 * num2;
// val = num1 / num2;
// val = num1 - num2;

// val = Math.PI;
// val = Math.E;
// val = Math.round(2.7);
// val = Math.ceil(2.5);
// val = Math.floor(2.5);
// val = Math.sqrt(2);
// val = Math.abs(-3);
// val = Math.pow(7, 3);
// val = Math.min(5, 2, 1, 0, 777);
// val = Math.max(5, 2, 1, 0, 777);
// val = Math.random();
// val =  Math.floor(Math.random() * 20);
// console.log(val);

// String and Concatinatiob

// const firstName = 'Zeeshan';
// const lastName = 'Haider';
// const str = "I am zeeshu";
// const tags = "web, software, photography";
// const age = 22;

// let val;
// val = firstName + lastName;

// // Concatination
// val = firstName + ' ' + lastName;

// // Appending
// val = 'Shaheen ';
// val += 'Siddiqui';
// val = 'Hello my name is ' + firstName + ' and i am ' + age;

// // Escaping
// val = 'That\'s great, You\'re amazing';

// // length
// val = firstName.length;

// // concat
// val = firstName.concat(' ', lastName);

// // change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[0];

// // index of
// val = firstName.indexOf('s');
// val = firstName.lastIndexOf('s');

// // charAt()
// val = firstName.charAt('5');
// val = firstName.charAt(firstName.length - 1);

// // substring()
// val = firstName.substring(0, 4);

// // slice()
// val = firstName.slice(0,4);

// // split()
// val = str.split(' ');
// val = tags.split(',');

// // replace()
// val = str.replace('zeeshu', 'zeeshan');

// // includes()
// val = str.includes('zeeshu');

// console.log(val);

// Template Literals

// const name = 'Zeeshan';
// const age = 22;
// const job = 'Web Developer';
// const city = 'Multan';
// let html;

// without templete string
// html = '<ul><li>Name: ' + name
//     + '</li><li>Age: ' + age
//     + '</li><li>Job: ' + job
//     + '</li><li>City: ' + city
//     + '</li></ul>';

// with templete string
// html = `<ul>
//             <li>Name: ${name}</li>
//             <li>Age: ${age}</li>
//             <li>Job: ${job}</li>
//             <li>City: ${city}</li>
//         <ul>`
// document.body.innerHTML = html;

// Arrays and Methods
// const numbers = [43, 56, 33, 23, 44, 100];
// const numbers2 = new Array(22, 44, 88, 0, 1, 99);
// const fruit = ['Apple, orange, banana'];
// const mixed = [22, 'hello', true, undefined, { a: 1, b: 1 }];
// console.log(mixed);
// val = numbers.length;

// // check isArray()
// val = Array.isArray(numbers);

// GET single value
// val = numbers[2];

// // insert into array
// numbers[2] = 774;

// // find index of value
// val = numbers.indexOf(774);

// // Mutating Array

// // add to end
// numbers.push(110);

// // add to start
// numbers.unshift(1);

// // take off from end
// numbers.pop();

// // take off from start
// numbers.shift();

// // splce num
// numbers.splice(0, 3);

// // reverse array
// numbers.reverse();

// // concatinate array
// val = numbers.concat(numbers2);

// sort
// val = fruit.sort();
// val = numbers.sort(function(x, y) {
//     return x-y;
// });

// val = numbers.sort(function(x, y) {  // reverse sort
//     return y-x;
// });

// function under50(num) {
//     return num < 50;
// }

// val = numbers.find(under50);
// // console.log(numbers);
// console.log(val);

// object literals

// const person = {
//     firstName: 'Zeeshan',
//     lastName: 'Haider',
//     age: 23,
//     email: 'zeeshanhshaheen@gmail.com',
//     hobbies: ['photography', 'coding'],
//     address: {
//         city: 'Multan',
//         country: 'Pakistan'
//     },
//     getBorthYear: function () {
//         return 1997 - this.age;
//     }
// }

// let val;

// val = person;
// val = person.firstName;
// val = person['firstName'];
// val = person.age;
// val = person.hobbies[0];
// val = person.address.country;
// val = person.address['city'];
// val = person.getBorthYear();


// const people = [
//     { name: 'Zeeshan', age: 23 },
//     { name: 'Shaheen', age: 25 },
//     { name: 'Zeeshan', age: 26 }
// ];

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].name);
//     console.log(people[i].age);
// }
// console.log(val);

// Date and Time

// let val;
// const today = new Date();
// const birthday = new Date('January 18 1997');
// val = today.getMonth();
// console.log(val);

// compersion 
// const id = 100;
// if (id === 10) {
//     console.log('ok');
// } else {
//     console.log('wrong');
// }

// console.log(id===10? 'ok' : 'false');

// switch 

// const color = 'pink';
// switch (color) {
//     case 'red':
//         console.log('ok')
//         break;

//     default:
//         console.log(',jbcead');
//         break;
// }

// loops

// for loop
// for(let i=0; i<10; i++) {
//     console.log(i);
// }

// wile loop
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// do while
// let i = 0;
// do {
//     console.log(i);
//     i++;
// }
// while (i < 10);

// for each
// const cars = ['Audi', 'Toyota', 'Mehran', 'GLI'];
// cars.forEach(function (car, index) {
//     console.log(`${index} : ${car}`);
// });

// Map
// const users = [
//     {id: 1, name: 'Zeeshan'},
//     {id: 2, name: 'Haider'},
//     {id: 2, name: 'Shaheen'},
// ];

// const ids = users.map(function(user) {
//     return user.id;
// });

// console.log(ids);

const user = {
    firstName: 'Zeeshan',
    lastName: 'Shaheen',
    age: 22
}

for (let i in user) {
    console.log(`${i} : ${user[i]}`);
}