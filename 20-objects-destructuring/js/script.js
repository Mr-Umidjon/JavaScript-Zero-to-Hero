'use strict';

const theif = {
    jacket: "black",
    heigh: 1.7,
    colors: {
        hair: "gray",
        style: 'curley',
    },
    howOut: function() {
        console.log("Fast with help doors");
    }
};

theif.howOut();

const {hair, style} = theif.colors;

console.log(hair);
console.log(style);

console.log(theif.heigh);

delete theif.jacket;

console.log(theif);

console.log(Object.keys(theif));
console.log(Object.values(theif));

console.log(Object.keys(theif).length);
console.log(Object.values(theif).length);


for (let key in theif){
    if (typeof theif[key] === 'object'){
        for (let i in theif[key]){
            console.log(`Property ${i} has value ${theif[key][i]}`);
        }      
    }else{
        console.log(`Property ${key} has value ${theif[key]}`);
    }
}




const numbers = [1, 2, 3, 4, 5];

for (let num of numbers){
    console.log(`Number ${num}`);
}
