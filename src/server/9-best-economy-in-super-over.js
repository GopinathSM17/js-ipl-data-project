// import {
//     matches
// } from '../data/matches.js'

// import{
//     deliveries
// } from '../data/deliveries.js'


const { CsvToJson } = require("./csvToJson");
const { writeToFile } = require("./writeToFile");


function bestEconomyBowlerInSuperOver() {
    const matches = CsvToJson("../data/matches.csv");
    const deliveries = CsvToJson("../data/deliveries.csv");
    let superOverballs = [];
    for (const delivery of deliveries) {
        if (delivery.is_super_over == '1') {
            superOverballs.push(delivery);
        }
    }

    const mapforTotalRuns = new Map();
    for (const delivery of superOverballs) {
        if (mapforTotalRuns.has(delivery.bowler)) {
            mapforTotalRuns.set(delivery.bowler, mapforTotalRuns.get(delivery.bowler) + parseInt(delivery.total_runs));
        }
        else {
            mapforTotalRuns.set(delivery.bowler, 0);
        }
    }

    const mapforTotalBalls = new Map();
    for (const delivery of superOverballs) {
        if (mapforTotalBalls.has(delivery.bowler)) {
            mapforTotalBalls.set(delivery.bowler, mapforTotalBalls.get(delivery.bowler) + 1);
        }
        else {
            mapforTotalBalls.set(delivery.bowler, 0);
        }
    }
    let bestBowlerInSuperOverEconomy = 100;
    let bestBowlerInSuperOver
    for (const bowler of mapforTotalBalls.keys()) {
        const overs = mapforTotalBalls.get(bowler) / 6;
        const economy = mapforTotalRuns.get(bowler) / overs;
        if (economy < bestBowlerInSuperOverEconomy) {
            bestBowlerInSuperOverEconomy = economy
            bestBowlerInSuperOver = bowler;
        }

    }
    writeToFile("9_best_economy_in_super_over", JSON.stringify(bestBowlerInSuperOver,null,2));
    return bestBowlerInSuperOver;
}

console.log(bestEconomyBowlerInSuperOver());