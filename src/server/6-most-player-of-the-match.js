// import {
//     matches
// } from '../data/matches.js'

const { CsvToJson } = require("./csvToJson");
const { writeToFile } = require("./writeToFile");

function  mostPlayerOfTheMatch() {
    const matches = CsvToJson("../data/matches.csv");
    const matchesBySeason = matches.reduce((acc, match) => {
        if(!acc[match.season]){
            acc[match.season]=[];
        }
        acc[match.season].push(match);
        return acc;
    }, {});

    const yearAndMOMPlayers={};
    for (const season in matchesBySeason) {
        const mapForSeasonAndPlayerOfTheMatch = new Map();
        let matchesOfEachSeason = matchesBySeason[season];
        const mapForPlayer = new Map();
        for (const match of matchesOfEachSeason) {
            const playerOfMatch = match.player_of_match;
            if(mapForPlayer.has(playerOfMatch)){
                mapForPlayer.set(playerOfMatch, mapForPlayer.get(playerOfMatch) + 1);
            }
            else{
                mapForPlayer.set(playerOfMatch, 1);
            }
        }
        let currMostMOM =0;
        let currMostMOMPlayer = 'BB McCullum';

        for (const [key, value] of mapForPlayer) {
            if(currMostMOM < value){
                currMostMOMPlayer = key;
                currMostMOM = value;
            }
        }
        yearAndMOMPlayers[season] = currMostMOMPlayer

    }
    writeToFile("6_most_player_of_the_match", JSON.stringify(yearAndMOMPlayers,null,2));
    return yearAndMOMPlayers;
}

const mostPlayerOfTheMatchInEachSeason = ()=>{
    const matches = CsvToJson("../data/matches.csv");
    const yearAndMOMPlayers = {};
    for (const match of matches) {        
        if(yearAndMOMPlayers[match.season] === undefined){
            yearAndMOMPlayers[match.season] = {};
        }
        else{
            if(yearAndMOMPlayers[match.season][match.player_of_match]){
                yearAndMOMPlayers[match.season][match.playerOfMatch] = 1;
            }
            else{
                yearAndMOMPlayers[match.season][match.playerOfMatch] += 1;
            }
        }
    }
    console.log(yearAndMOMPlayers);
    
    const yearAndMostMOMPlayer = {};
    for (const year of yearAndMOMPlayers) {
        let mostMOMPlayer;
        let MOMCount = 0;
        for(let player of year){
            if(yearAndMOMPlayers[year][player]  > MOMCount){
                MOMCount = yearAndMOMPlayers[year][player];
                mostMOMPlayer = player;
            }
        }
        yearAndMostMOMPlayer[mostMOMPlayer] = MOMCount;
    }
    return yearAndMostMOMPlayer;
}

console.log(mostPlayerOfTheMatchInEachSeason());