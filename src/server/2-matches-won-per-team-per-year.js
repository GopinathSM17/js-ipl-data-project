// import { matches } from "../data/matches.js";


const  {CsvToJson } = require("./csvToJson");
const  {writeToFile}  = require("./writeToFile");

const matchesWonPerTeamPerYearInIPL = () => {
    const matches = CsvToJson("../data/matches.csv");
    const matchesWonPerTeamPerYear = matches.reduce((acc, match) => {
        const team = match.winner;
        const year = match.season;

        if (!acc[year]) {
            acc[year] = {};
        }
        if (!acc[year][team]) {
            acc[year][team] = 0;
        }
        acc[year][team] += 1;
        return acc
    }, {});
    writeToFile("2_matches_won_per_team_per_year", JSON.stringify(matchesWonPerTeamPerYear,null,2));

   return matchesWonPerTeamPerYear;
}

console.log(matchesWonPerTeamPerYearInIPL());
