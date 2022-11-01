"use strict";

let startNum = 1;


// First
while (startNum <= 100) {
    console.log(startNum);
    startNum++;
}


// Second 
do {
    console.log(startNum);
    startNum++;
} while (startNum <= 100);


// Third
for (let i = 1; i <= 100; i++) {
    console.log(i);
}


// break
for (let i = 1; i <= 10; i++ ) {
    if (i == 8){
        break;
    }
    console.log(i);
}


// continue
for (let i = 1; i <= 10; i++ ) {
    if (i == 8){
        continue;
    }
    console.log(i);
}