
// // -- Object Orianted Programming in JavaScript

// // --objects

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function () {
//         console.log('draw');
//     }
// }; //object literal syntax

// circle.draw();

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

// // --4 Pillers
// // 1: Encapsulation
// // 2: Abstraction
// // 3: Inheritance
// // 4: Polymorpism

// // --Encapsulation
// // We group funactions and variables togather which is called an object
// // and this is called Encapsulation. Reduce Complexity 

// let employee = {
//     baseSalary: 300000,
//     overTime: 10,
//     rate: 20,
//     getWage: function () {
//         return this.baseSalary + (this.overTime * this.rate);
//     }
// };

// console.log(employee.getWage());

// --Abstraction
// Hiding properties from outside and show only essentials. Helps us reduce impact of change. 
// We can make simple interface.  


// --Inhertitance
// If we have several objects having same properties, so instead of writing 
// properties of several objects again and again we write the properites 
// in seperate object and inherit the other objects with those objects




// --Polymorphism
// means Many forms
// Allows us to get rid of if else and switch statments
// 