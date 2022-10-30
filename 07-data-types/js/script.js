"use strict";

// Number
let number = 10.4; // Data Type = Number

console.log(8 / 0); // Infinity
console.log(-8 / 0); // - Infinity

console.log("Samar" * 8); // NaN


// String
const clientName = "Umidjon"; // `Umidjon`
console.log(clientName);


// Boolean
const isMarried = false;
const isCircleEarth = true;
// true = yes
// false = no
console.log(isMarried);
console.log(isCircleEarth);


// null
// console.log(clientAge);


// undefined
let und;

console.log(und); // undefined


// Object
const thief = {
//  key: value
    age: 30, // number
    jacket: 'black', // string
    isLong: false, // boolean
};

console.log(thief.jacket); // thief['jacket']
console.log(thief.age); // thief['age']
console.log(thief.isLong); // thief['isLong']
console.log(thief);


// array
const colors = ['red', 'black', 'green'];

console.log(colors);
console.log(colors[0]);