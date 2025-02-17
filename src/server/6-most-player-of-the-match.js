// import {
//     matches
// } from '../data/matches.js'

const { CsvToJson } = require("./csvToJson");
const { writeToFile } = require("./writeToFile");

const mostPlayerOfTheMatchInEachSeason = ()=>{
    const matches = CsvToJson("../data/matches.csv");
    const yearAndMOMPlayers = {};
    for (const match of matches) {        
        if(yearAndMOMPlayers[match.season]){
            if(yearAndMOMPlayers[match.season][match.player_of_match]){
                yearAndMOMPlayers[match.season][match.player_of_match] += 1;
            }
            else{
                yearAndMOMPlayers[match.season][match.player_of_match] = 1;
            }
           
        }
        else{
            yearAndMOMPlayers[match.season] = {};
        }
    }
    
    const yearAndMostMOMPlayer = {};
    for (const year in yearAndMOMPlayers) {
        let mostMOMPlayer;
        let MOMCount = 0;
        for(let player in yearAndMOMPlayers[year]){
            if(yearAndMOMPlayers[year][player]  > MOMCount){
                MOMCount = yearAndMOMPlayers[year][player];
                mostMOMPlayer = player;
            }
        }
        yearAndMostMOMPlayer[year] = mostMOMPlayer;
    }
    writeToFile("6_most_player_of_the_match", JSON.stringify(yearAndMostMOMPlayer,null,2));
    return yearAndMostMOMPlayer;
}

console.log(mostPlayerOfTheMatchInEachSeason());