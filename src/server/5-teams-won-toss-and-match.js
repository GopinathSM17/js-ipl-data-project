// import {
//     matches
// } from '../data/matches.js'


const { CsvToJson } = require("./csvToJson");
const { writeToFile } = require("./writeToFile");


const teamsWonTossAndMatchInIPL = () => {
    const matches = CsvToJson("../data/matches.csv");
    const teamsWonTossAndMatch = matches.reduce((acc, match) => {
        if (match.toss_winner === match.winner) {
            if (acc[match.toss_winner]) {
                acc[match.toss_winner] += 1;
            }
            else {
                acc[match.toss_winner] = 1;
            }
        }
        return acc;
    }, {});
    writeToFile("5_teams_won_toss_and_match", JSON.stringify(teamsWonTossAndMatch,null,2));

    return teamsWonTossAndMatch;
}

console.log(teamsWonTossAndMatchInIPL());
