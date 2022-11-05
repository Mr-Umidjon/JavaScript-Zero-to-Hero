'use strict';

const arr = [1, 2, 3, 4, 5, 6];

console.log(arr.length);

arr.pop();
arr.push(7);
console.log(arr);

arr.shift();
arr.unshift(0);
console.log(arr);


for (let i=0; i < arr.length; i++){
    console.log(arr[i]);
}

for (let value of arr){
    console.log(value);
}

const arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr1);

arr1[99] = 12;
console.log(arr1.length);
console.log(arr1);


const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
arr2.forEach(function (item, index, arr2){
    console.log(`${index}: ${item} into arr ${arr2}`);
});

const movies = prompt("What's your favourite movies", '');
const userMovies = movies.split(', ');

console.log(userMovies);
console.log(userMovies.join('-'));

const numbers = [2, 3, 1, 4, 5, 1, 33, 22];
numbers.sort();
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);