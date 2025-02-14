// import {
//     deliveries,
// } from '../data/deliveries.js'

// import {
//     matches
// } from '../data/matches.js'

const { CsvToJson } = require("./csvToJson");
const { writeToFile } = require("./writeToFile");

function top10EconomicalBowlersIn2016() {
    const matches = CsvToJson("../data/matches.csv");
    const deliveries = CsvToJson("../data/deliveries.csv");

    const matchIdOf2015 = [];
    for (const match of matches) {
        if (match.season == "2015") {
            matchIdOf2015.push(match.id);
        }
    }
    // console.log(matchIdOf2015);
    const deliveriesOf2015 = deliveries.filter(
        (delivery) => matchIdOf2015.includes(delivery["match_id"]));

    const mapforTotalRuns = new Map();
    for (const delivery of deliveriesOf2015) {
        //console.log(delivery.bowler);
        if(mapforTotalRuns.has(delivery.bowler)){
            mapforTotalRuns.set(delivery.bowler, mapforTotalRuns.get(delivery.bowler) + parseInt(delivery.total_runs));
        }
        else{
            mapforTotalRuns.set(delivery.bowler, 0);
        }
    }

    const mapforTotalBalls = new Map();
    for (const delivery of deliveriesOf2015) {
        if(mapforTotalBalls.has(delivery.bowler)){
            mapforTotalBalls.set(delivery.bowler, mapforTotalBalls.get(delivery.bowler) + 1);
        }
        else{
            mapforTotalBalls.set(delivery.bowler, 0);
        }
    }
    const bowlerAndEconomy = [];
    for (const bowler of mapforTotalBalls.keys()) {
        const overs = mapforTotalBalls.get(bowler)/6;
        const economy = mapforTotalRuns.get(bowler)/overs;
        bowlerAndEconomy.push({ [bowler] : economy});
    }
    bowlerAndEconomy.sort((a, b) => a[Object.keys(a)[0]] - b[Object.keys(b)[0]]);
    //console.log(bowlerAndEconomy);
    const top10Bowler=[];
    let count=1;
    for (const bowler of bowlerAndEconomy) {
        top10Bowler.push(bowler);
        count++;
        if(count == 10){
            break
        }
    }

    writeToFile("4_top10_economical_bowlers_in_2016", JSON.stringify(top10Bowler,null,2));
    return top10Bowler;

}

console.log(top10EconomicalBowlersIn2016());
