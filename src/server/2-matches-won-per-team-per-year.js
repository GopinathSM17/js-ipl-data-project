// import { matches } from "../data/matches.js";

const { CsvToJson } = require("./csvToJson");
const { writeToFile } = require("./writeToFile");

const matchesWonPerTeamPerYearIPL = ()=>{
    const matches = CsvToJson("../data/matches.csv");
    const yearAndTeams = {};
    for (const match of matches) {
        if(yearAndTeams[match.season] ){
            if(yearAndTeams[match.season][match.winner] === undefined){
                yearAndTeams[match.season][match.winner] = 1;
            }
            else{
                yearAndTeams[match.season][match.winner] += 1;
            }
        }
        else{
            yearAndTeams[match.season] = {};
        }
    }
    writeToFile("2_matches_won_per_team_per_year", JSON.stringify(yearAndTeams, null, 2));
    return yearAndTeams;
}

console.log(matchesWonPerTeamPerYearIPL());