// import {
//     deliveries,
// } from '../data/deliveries.js'

// import {
//     matches
// } from '../data/matches.js'

const { CsvToJson } = require("./csvToJson");
const { writeToFile } = require("./writeToFile");

const top10EconomicalBowlersIn2016InIPL = ()=>{
    const matches = CsvToJson("../data/matches.csv");
    const deliveries = CsvToJson("../data/deliveries.csv");
    
    const matchIdOf2015 =[];

    for (const match of matches) {
        if(match.season == "2015"){
            matchIdOf2015.push(match.id);
        }
    }

    const deliveriesOf2015 = [];

    for(const delivery of deliveries){
        if(matchIdOf2015.includes(delivery.match_id)){
            deliveriesOf2015.push(delivery);
        }
    }

    const bowlersAndRuns = {}
    for (const delivery of deliveriesOf2015) {
        if(bowlersAndRuns[delivery.bowler]){
            bowlersAndRuns[delivery.bowler] += Number(delivery.total_runs);
        }
        else{
            bowlersAndRuns[delivery.bowler] = Number(delivery.total_runs);
        }
    }
    const bowlersAndBalls = {}
    for (const delivery of deliveriesOf2015) {
        if(bowlersAndBalls[delivery.bowler]){
            bowlersAndBalls[delivery.bowler] += 1;
        }
        else{
            bowlersAndBalls[delivery.bowler] = 1;
        }
    }

    const bowlerAndEconomy = [];
    for (const bowler in bowlersAndBalls) {

        const balls = bowlersAndBalls[bowler];
        const overs = balls /6;
        const runs = bowlersAndRuns[bowler];
        const economy = runs / overs;
        bowlerAndEconomy.push({ [bowler] : economy});
    }

    bowlerAndEconomy.sort((a, b) => a[Object.keys(a)[0]] - b[Object.keys(b)[0]]);

    const top10Bowler=[];
    let count=0;
    for (const bowler of bowlerAndEconomy) {
        top10Bowler.push(bowler);
        count++;
        if(count == 10){
            break;
        }
    }

    return top10Bowler;
  }

console.log(top10EconomicalBowlersIn2016InIPL());
