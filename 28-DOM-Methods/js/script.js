'use strict';

const box = document.querySelector("#box");
const buttons = document.querySelectorAll('button');
const circles = document.querySelectorAll('.circle');
const circle = document.querySelector('.circle');
const hearts = document.querySelectorAll('.heart');

console.log(box);
console.dir(box);

box.style.backgroundColor = 'red';
box.style.height = '100px';
box.style.width = '100px';

box.style.cssText = 'backround-color: blue; width: 200px; height: 200px';

buttons[0].style.width = '100px';
circles[2].style.backgroundColor = 'yellow';
circles[3].style.backgroundColor = 'green';
circle.style.backgroundColor = 'blue';


for (let i=0; i < hearts.length; i++){
    hearts[i].style.backgroundColor = 'green';
}

hearts.forEach(element => {
    element.style.backgroundColor = 'blue';
});