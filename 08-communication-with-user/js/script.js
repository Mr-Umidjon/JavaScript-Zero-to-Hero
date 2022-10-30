"use strict";

alert("Hello JavaScript");

const place = confirm("Are you here?");
console.log(place);

const currentPlace = prompt("Where are you?", "Tashkent");
console.log(currentPlace);
console.log(typeof currentPlace);

const age = +prompt("How old are you?", "18");
console.log(age);
console.log(typeof age);

const favouriteColor = [];

// favouriteColor[0] = "blue";
favouriteColor[0] = prompt("What's your favourite color #1?");
favouriteColor[1] = prompt("What's your favourite color #2?");
favouriteColor[2] = prompt("What's your favourite color #3?");

console.log(favouriteColor);
