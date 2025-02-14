// import { matches } from "../data/matches.js";

const { CsvToJson } = require("./csvToJson");
const { writeToFile } = require("./writeToFile");

function matchesWonPerTeamPerYear() {
    const matches = CsvToJson("../data/matches.csv");
    const map = new Map();
    const matchesPerSeason = {};
    for(const match of matches){
        if(matchesPerSeason[match.season]){
            if(matchesPerSeason[match.season][match.winner]){
                matchesPerSeason[match.season][match.winner] += 1;
            }
            else{
                matchesPerSeason[match.season][match.winner] = 1;
            }
        }
        else{
            matchesPerSeason[match.season] = {};
        }
    }
    writeToFile("2_matches_won_per_team_per_year", JSON.stringify(matchesPerSeason,null,2));

    return matchesPerSeason;
}

console.log(matchesWonPerTeamPerYear());