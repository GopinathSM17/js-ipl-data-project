// import { matches } from "../data/matches.js";

const { CsvToJson } = require("./csvToJson");
const { writeToFile } = require("./writeToFile");

const matchesPerYearLoop = () => {
    const matches = CsvToJson("../data/matches.csv");
    const year = {};
    for (const match of matches) {
        if (year[match.season] == undefined) {
            year[match.season] = 0;
        }
        else {
            year[match.season] += 1;
        }
    }
    writeToFile("1_matches_Per_Year", JSON.stringify(year), null, 2);
    return year;
}
console.log(matchesPerYearLoop());

// console.log(matchesPerYear());

