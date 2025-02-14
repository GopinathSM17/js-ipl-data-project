// import {
//     matches
// } from '../data/matches.js'

// import {
//     deliveries
// } from '../data/deliveries.js'


const { CsvToJson } = require("./csvToJson");
const { writeToFile } = require("./writeToFile");

const bestEconomyInSuperOver = () => {
    const matches = CsvToJson("../data/matches.csv");
    const deliveries = CsvToJson("../data/deliveries.csv")
    const allTheSuperOverBalls = deliveries.reduce((acc, delivery) => {
        if (delivery.is_super_over === "1") {

            acc.push(delivery);
        }
        return acc;
    }, []);


    const bowlersAndRuns = allTheSuperOverBalls.reduce((acc, delivery) => {
        if (acc[delivery.bowler]) {
            acc[delivery.bowler] += parseInt(delivery.total_runs);
        }
        else {
            acc[delivery.bowler] = parseInt(delivery.total_runs);
        }
        return acc;
    }, {});

    const bowlersAndBalls = allTheSuperOverBalls.reduce((acc, delivery) => {
        if (acc[delivery.bowler]) {
            acc[delivery.bowler] += 1;
        }
        else {
            acc[delivery.bowler] = 1;
        }
        return acc;
    }, {});

    const bowlersAndEconomy = Object.keys(bowlersAndBalls).reduce((acc, bowler) => {
        const overs = bowlersAndBalls[bowler] / 6;
        const economy = bowlersAndRuns[bowler] / overs;
        acc[bowler] = economy;
        return acc;
    }, {});



    const bestBowlerInSuperOver = Object.keys(bowlersAndEconomy).reduce((acc, bowler) => {
        if (acc[1] > bowlersAndEconomy[bowler]) {
            acc[0] = bowler;
            acc[1] = bowlersAndEconomy[bowler];
        }
        return acc;
    }, ["", 100]);
    writeToFile("9_best_economy_in_super_over", JSON.stringify(bestBowlerInSuperOver,null,2));
    return bestBowlerInSuperOver;
}

console.log(bestEconomyInSuperOver());