'use strict';

let x = 10;
let y = x;

y = y + 5;

console.log(x, y);

let isMarried = false;
let isSingle = isMarried;

isSingle = true;

console.log(isMarried, isSingle);



const number = {
    x: 10,
    y: 5,
};

const newNumber = number;

newNumber.x = 15;

console.log(number);
console.log(newNumber);



function copyObject(obj) {
    let objCopy = {};

    for (let key in obj){
        objCopy[key] = obj[key];
    }

    return objCopy;
}


const numbers = {
    x:10,
    y:5,
    z:{a:1, b:2}
};

const newNumbers = copyObject(numbers);

newNumbers.x = 12;
newNumbers.z.a = 23;

console.log(numbers);
console.log(newNumbers);


const values = {
    x:10,
    y:5,
    z:{a:1, b:2}
};

const newValues = Object.assign({}, values);

newValues.x = 15;
newValues.z.a = 234;

console.log(values);
console.log(newValues);


const value = {
    x:10,
    y:5,
};

const addValue = {
    z:23,
};

const allValue = Object.assign(value, addValue);

console.log(allValue);



const arr = [1, 2, 3, 4];
const nums = arr.slice();

nums[1] = "Umidjon";

console.log(arr);
console.log(nums);


// SPREAD 
const liverpool = ['Salah', "Mane"];
const manCity = ['Mahrez'];

const mixPlayer = [...liverpool, ...manCity];

console.log(mixPlayer);
console.log(...mixPlayer);

