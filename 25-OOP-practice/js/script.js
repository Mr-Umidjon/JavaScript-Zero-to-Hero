"use strict";

const seriesDB = {
    count: 0,
    series: {},
    actors: {},
    genres: [],
    privat: true,
    start: () => {
        seriesDB.count = +prompt("How many series have you watched?");  

        while(seriesDB.count == "" || seriesDB.count == null || isNaN(seriesDB.count)){
            seriesDB.count = +prompt("How many series have you watched?");   
    }
    },
    rememberMySeries: () => {
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
    },
    detectLevelSeries: () => {
        if (seriesDB.count < 5){
            console.log("You have seen few series.");
        } else if (seriesDB.count < 10){
            console.log("You have seen enough series");
        } else if (seriesDB.count >= 10){
            console.log("You have seen a lot of series");
        } else {
            console.log("Error");
        }
    },
    writeGenres: () => {
        for (let i=0; i < 3; i++){
            const genre = prompt(`Your favorite genre ${i}`);
            if (genre != null && genre != ''){
                seriesDB.genres[i] = genre;   
            }else {
                i--;
            }
        }
        seriesDB.genres.forEach(function (genre, index, genres) {
            console.log(`Your favorite genre ${index + 1}: ${seriesDB.genres[index]}`);
        });
    },
    showDB: () => {
        if (!seriesDB.privat){
            console.log(seriesDB);
        }
    },
    visibleDB: () => {
        seriesDB.privat = !seriesDB.privat;
    }

};

seriesDB.start();
seriesDB.rememberMySeries();
seriesDB.detectLevelSeries();
seriesDB.writeGenres();
seriesDB.visibleDB();
seriesDB.showDB();

