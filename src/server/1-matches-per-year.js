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

console.log(matchesPerYear());

