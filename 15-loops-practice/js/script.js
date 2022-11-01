"use strict";

const numberOfSeries = +prompt("How many series have you watched?");

const seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    privat: false,
};

let i = 0;
while ( i < 2)
{
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
    i++;
    
}


if (seriesDB.count < 5){
    console.log("You have seen few series.");
} else if (seriesDB.count < 10){
    console.log("You have seen enough series");
} else if (seriesDB.sount >= 10){
    console.log("You have seen a lot of series");
} else {
    console.log("Error");
}

console.log(seriesDB);



