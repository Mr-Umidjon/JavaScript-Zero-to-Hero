'use strict';

const firstName = 'Umidjon';
const str = new String(firstName);

console.log(firstName);
console.log(str);

console.log(typeof firstName);
console.log(typeof str);


const car = {
    motor: 'X',
    color: 'red',
    isAirbag: true,
    isSpeed: function () {
        console.log(320);
    }
};


const gm = {
    isAirbag: false
};


gm.__proto__ = car;

console.log(gm);
console.log(gm.color);
gm.isSpeed();


Object.setPrototypeOf(gm, car);

console.log(gm);

const bmv = Object.create(car);

console.log(bmv);
