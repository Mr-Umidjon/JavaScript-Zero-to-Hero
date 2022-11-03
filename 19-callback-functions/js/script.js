"use strict";

// CallBack fubctions

function first(){
    // code
    setTimeout(() => {
        console.log(1);
    }, 1000);
}

function second() {
    // code
    console.log(2);
}

first();
second();



function  edu(subject, callback) {
    console.log(`I want to teach ${subject}`);
    callback();
}

function done() {
    console.log("That's great");
}

edu('JavaScript', done);
