'use strict';

const box = document.querySelector("#box");
const buttons = document.querySelectorAll('button');
const circles = document.querySelectorAll('.circle');
const circle = document.querySelector('.circle');
const hearts = document.querySelectorAll('.heart');
const circleWrapper = document.querySelector('.circle__wrapper');

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



const btn = document.createElement('button');
const text = document.createTextNode("I am text");

document.body.append(btn);


const myCircle = document.createElement('div');
myCircle.classList.add('circle');

// document.body.append(myCircle);
// circleWrapper.append(myCircle);
// circleWrapper.before(myCircle);
// circleWrapper.after(myCircle);
// circles[0].before(myCircle);
// circles[1].remove();
// circles[2].replaceWith(myCircle);

circleWrapper.append(myCircle);
// myCircle.innerHTML = '<h1>E</h1>';
myCircle.textContent = 'E';


circleWrapper.insertAdjacentHTML('afterbegin', '<pre>E</pre>');