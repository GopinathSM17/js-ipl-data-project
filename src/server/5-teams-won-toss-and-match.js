// import {
//     matches
// } from '../data/matches.js'

const { CsvToJson } = require("./csvToJson");
const { writeToFile } = require("./writeToFile");

const teamsWonTossAndMatchInIPL = ()=>{
    const matches = CsvToJson("../data/matches.csv");

    const teamsWonBoth = {};

    for (const match of matches) {
        if(match.toss_winner == match.winner){
            if(teamsWonBoth[match.winner]){
                teamsWonBoth[match.winner] += 1;
            }
            else{
                teamsWonBoth[match.winner] = 1;
            }
        }
    }
    writeToFile("5_teams_won_toss_and_match", JSON.stringify(teamsWonBoth,null,2));
    return teamsWonBoth;
}

console.log(teamsWonTossAndMatchInIPL());
