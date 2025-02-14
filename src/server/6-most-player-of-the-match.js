// import {
//     matches
// } from '../data/matches.js'


const { CsvToJson } = require("./csvToJson");
const { writeToFile } = require("./writeToFile");



const mostPlayerOfTheMatchPerYear = () => {
    const matches = CsvToJson("../data/matches.csv");
    const yearAndManOfTheMatchList = matches.reduce((acc, match) => {
        if (acc[match.season]) {
            if (acc[match.season][match.player_of_match]) {
                acc[match.season][match.player_of_match] += 1
            }
            else {
                acc[match.season][match.player_of_match] = 1
            }
        }
        else {
            acc[match.season] = {};
        }
        return acc;
    }, {});

    const yearAndManOfTheMatch = Object.keys(yearAndManOfTheMatchList).reduce((acc, year) => {
        const players = yearAndManOfTheMatchList[year];
        const bestMOMPlayer = Object.keys(players).reduce((acc2, player) => {
            return players[player] > acc2.value ? { name: player, value: players[player] } : acc2;
        }, { name: 'gopi', value: 0 });

        acc[year] = bestMOMPlayer;
        return acc;
    }, {});

    writeToFile("6_most_player_of_the_match", JSON.stringify(yearAndManOfTheMatch,null,2));
    return yearAndManOfTheMatch;
}



console.log(mostPlayerOfTheMatchPerYear());