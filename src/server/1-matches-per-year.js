// import { matches } from "../data/matches.js";

const { CsvToJson } = require("./csvToJson");
const { writeToFile } = require("./writeToFile");

const matchesPerYear = function () {
    const matches = CsvToJson("../data/matches.csv");
    let matchCount = 0;
    const map = new Map();
    for (const element of matches) {
        if (map.has(element.season)) {
            matchCount++;
            map.set(element.season, matchCount);
        }
        else {
            matchCount = 1;
            map.set(element.season, matchCount);
        }
    }
    writeToFile("1_matches_per_year", JSON.stringify(Object.fromEntries(map),null,2));
    return map;
}

const matchesPerYearLoop = ()=>{
    const matches= CsvToJson("../data/matches.csv");
    const year = {};
    for (const match of matches) {
        if(year[match.season] == undefined){
            year[match.season] = 0;
        }
        else{
            year[match.season] 
        } 
    }
}
console.log(matchesPerYearLoop());

// console.log(matchesPerYear());

