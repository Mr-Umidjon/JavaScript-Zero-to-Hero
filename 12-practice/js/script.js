"use strict";

const numberOfSeries = +prompt("How many series have you watched?", "0");

const seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    privat: false,
};

const lastSeries1 = prompt("Which series did you last watch?");
const score1 = +prompt("How many points did you score?", "5");

const lastSeries2 = prompt("Which series did you last watch?");
const score2 = +prompt("How many points did you score?", "5");

seriesDB.series[lastSeries1] = score1;
seriesDB.series[lastSeries2] = score2;

console.log(seriesDB);



// extra
const property = 'Age', value = 20;

const theif = {
    jacket: "Black",
};

theif[property] = value;

console.log(theif);