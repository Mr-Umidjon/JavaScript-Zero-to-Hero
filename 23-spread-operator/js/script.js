"use strict";

const calc = [1, 2, 3];

function logger(x, y, z){
    console.log(x+y+z);
}

logger(1, 2, 3);
logger(...calc);

const arr = ['x', 'y'];
const newArr = [...arr];


const numbers = {
    x:10,
    y:5
};

const newNumbers = {...numbers};

console.log(numbers);
console.log(newNumbers);

