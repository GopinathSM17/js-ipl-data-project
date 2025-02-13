import {
    matches
} from '../data/matches.js'

const playerAndThereMOMCount = matches.reduce((acc, match) => {
    if(acc[match.player_of_match]){
        acc[match.player_of_match] += 1; 
    }
    else{
        acc[match.player_of_match] = 1;
    }
    return acc;
}, {});

const MostMOMPlayerInIPL = Object.keys(playerAndThereMOMCount).reduce((acc, player) => { 
    if(playerAndThereMOMCount[acc] < playerAndThereMOMCount[player]){
        acc = player;
    }
    return acc;
}, Object.keys(playerAndThereMOMCount)[0]);

console.log(MostMOMPlayerInIPL);