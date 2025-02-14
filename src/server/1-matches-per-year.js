// import { matches } from "../data/matches.js";

const { CsvToJson } = require("./csvToJson");
const { writeToFile } = require("./writeToFile");

const matchesPerYearInIPL = () => {
    const matches = CsvToJson("../data/matches.csv");
    const matchesPerYear = matches.reduce((acc, match) => {
        if (acc[match.season]) {
            acc[match.season] += 1;
        }
        else {
            acc[match.season] = 1;
        }
        return acc;
    }, {});
    writeToFile("1_matches_per_year", JSON.stringify(matchesPerYear, null, 2));
    return matchesPerYear;
}
console.log(matchesPerYearInIPL());


