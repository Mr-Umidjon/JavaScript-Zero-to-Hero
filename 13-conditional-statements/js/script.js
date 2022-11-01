"use strict";

const age = +prompt("How old are you?", '7');

if (age > 18) {
    console.log("Welcome!");
} else {
    console.log("No entry");
}

(age > 18) ? console.log("Welcome!") : console.log("No entry");

if (age > 25) {
    console.log("Horror films");
} else if (age > 18) {
    console.log("Boyevik films");
} else {
    console.log("Cartoon");
}


const color = 'red';

switch (color) {
    case 'red': 
        console.log("Stop");
        break;
    case "green":
        console.log("Go!");
        break;
    case "yellow":
        console.log("Wait");
        break;
    default:
        console.log("Traffic jam");
        break;
}
