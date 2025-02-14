// import {
//     matches
// } from '../data/matches.js'

const { CsvToJson } = require("./csvToJson");
const { writeToFile } = require("./writeToFile");

function teamsWonTossAndMatch() {
    const matches = CsvToJson("../data/matches.csv");
    const map = new Map();
    for (const match of matches) {
        let tossWinner = match.toss_winner;
        let matchWinner = match.winner;
        if (tossWinner == matchWinner) {
            if (map.has(matchWinner)) {
                map.set(matchWinner, map.get(matchWinner) + 1);
            }
            else {
                map.set(matchWinner, 1);
            }
        }
    }
    writeToFile("5_teams_won_toss_and_match", JSON.stringify(map,null,2));
    return map;
}

console.log(teamsWonTossAndMatch());
