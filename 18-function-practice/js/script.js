"use strict";

let numberOfSeries;

function startApp(){
    numberOfSeries = +prompt("How many series have you watched?");  

    while(numberOfSeries == "" || numberOfSeries == null || isNaN(numberOfSeries)){
        numberOfSeries = +prompt("How many series have you watched?");   
    }
}
startApp();


const seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMySeries(){
    for (let i = 0; i < 2; i++){
    const lastSeries = prompt("Which series did you last watch?");
    const score = +prompt("How many points did you score?");

    if (lastSeries != null && score != null && lastSeries != '' && score != '')
    {
        seriesDB.series[lastSeries] = score;
        console.log("done");
        
    }
    else{
        console.log("error");
        i--;
    }
    }
}

rememberMySeries();

function detectLevelSeries(){
    if (seriesDB.count < 5){
        console.log("You have seen few series.");
    } else if (seriesDB.count < 10){
        console.log("You have seen enough series");
    } else if (seriesDB.count >= 10){
        console.log("You have seen a lot of series");
    } else {
        console.log("Error");
    }
}
detectLevelSeries();


function writeGenres() {
    for (let i=0; i < 3; i++){
        const genre = prompt(`Your favorite genre ${i}`);
        seriesDB.genres[i] = genre;
    }
}
writeGenres();


function showDB(){
    if (!seriesDB.privat){
        console.log(seriesDB);
    }
}
showDB();




