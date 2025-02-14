// import {
//     deliveries,
// } from '../data/deliveries.js'

// import {
//     matches
// } from '../data/matches.js'

const { CsvToJson } = require("./csvToJson");
const { writeToFile } = require("./writeToFile");


function top10EconomicalBowler(year) {
    const matches = CsvToJson("../data/matches.csv");
    const deliveries = CsvToJson("../data/deliveries.csv")
    const deliveriesOfYear = deliveries.reduce((acc, delivery)=> {
        const matchIdOfTheDelivery = delivery.match_id;
        const match =  matches.find(m => m.id === matchIdOfTheDelivery);
        if(!match){
            return acc;
        }
        const season = match.season;
        if( season === year){
            acc.push(delivery);
        }
        return acc;
    }, []);
    const bowlersAndTotalRuns = deliveriesOfYear.reduce((acc, delivery) =>{
        if(acc[delivery.bowler]){
            acc[delivery.bowler] += Number(delivery.total_runs);
        }
        else{
            acc[delivery.bowler] = Number(delivery.total_runs);
        }
        return acc;
    }, {});

    const bowlerAndTotalBalls = deliveriesOfYear.reduce((acc, delivery)=>{
        if(acc[delivery.bowler]){
            acc[delivery.bowler] += 1;
        }
        else{
            acc[delivery.bowler] = 1;
        }
        return acc;
    }, {})

    const bowlersAndEconomy = Object.keys(bowlerAndTotalBalls).reduce((acc, player)=>{
        const overs= bowlerAndTotalBalls[player] / 6;
        const economy = bowlersAndTotalRuns[player]/overs;
        acc[player] = economy;
        return acc;
    }, {});


    const top10Bowler = Object.entries(bowlersAndEconomy).sort((a, b) => a[1] - b[1]).slice(0,10);
    writeToFile("4_top10_economical_bowlers_in_2016", JSON.stringify(top10Bowler, null, 2))
    return top10Bowler;
}


console.log(top10EconomicalBowler("2015"));


