// import {
//     matches
// } from '../data/matches.js'

// import{
//     deliveries
// } from '../data/deliveries.js'


const { CsvToJson } = require("./csvToJson");
const { writeToFile } = require("./writeToFile");

const bestEconomyBowlerInSuperOverInIPL = () => {
    const deliveries = CsvToJson("../data/deliveries.csv");

    const superOverballs = [];

    for (const delivery of deliveries) {
        if (delivery.is_super_over === "1") {
            superOverballs.push(delivery);
        }
    }

    const bowlerAndRuns = {};
    const bowlerAndBalls = {};

    for (const delivery of superOverballs) {
        if (bowlerAndRuns[delivery.bowler]) {
            bowlerAndRuns[delivery.bowler] += Number(delivery.total_runs);
        }
        else {
            bowlerAndRuns[delivery.bowler] = Number(delivery.total_runs);
        }
    }
    for (const delivery of superOverballs) {
        if (bowlerAndBalls[delivery.bowler]) {
            bowlerAndBalls[delivery.bowler] += 1;
        }
        else {
            bowlerAndBalls[delivery.bowler] = 1;
        }
    }

    const bowlerAndEconomy = {};
    for (const bowler in bowlerAndBalls) {
        const balls = bowlerAndBalls[bowler];
        const overs = balls / 6;
        const runs = bowlerAndRuns[bowler];
        const economy = runs / overs;
        bowlerAndEconomy[bowler] = economy;
    }

    let topPlayer;
    let topEconomy = 100;
    for (const bowler in bowlerAndEconomy) {
        const economy = bowlerAndEconomy[bowler];
        if(topEconomy > economy){
            topPlayer = bowler;            
            topEconomy = economy;
        }
    }
    const result = {};
    result[topPlayer] = topEconomy;
    return result;
}

console.log(bestEconomyBowlerInSuperOverInIPL());