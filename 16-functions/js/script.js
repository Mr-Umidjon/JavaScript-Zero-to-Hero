"use strict";

// Function declaration
function sayHelloWorld() {
    console.log("Hello World!");
}

sayHelloWorld();

function sayThing(text) {
    console.log(text);
}

sayThing("Hi! everyone");
sayThing("Hi! Umidbek");

function calc(a, b) {
    console.log(a + b);
}

calc(12, 23);
calc(233222, 2333);


function sayMyName(name, surname) {
    console.log(`My name is ${name} ${surname}`);    
}

sayMyName("Umidbek", "Maxammadsoliyev");

function addTwoNumber(a, b){
    return a + b;
}

console.log(addTwoNumber(10, 13));
console.log(addTwoNumber(23, 22));




// Function expression
const sumOfAandB = addTwoNumber(12, 123);
console.log(sumOfAandB);


const logger = function () {
    console.log("Hello Wolrd!");
};

logger();




// Arrow function
const add = (a, b) => a + b;

console.log(add(12, 23));
