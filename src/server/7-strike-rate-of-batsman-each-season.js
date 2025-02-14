// import {
//     matches
// } from '../data/matches.js'

// import{
//     deliveries
// } from '../data/deliveries.js'


const { CsvToJson } = require("./csvToJson");
const { writeToFile } = require("./writeToFile");


function strikeRateOfBatsmanEachSeason(batsman) {
    const matches = CsvToJson("../data/matches.csv");
    const deliveries = CsvToJson("../data/deliveries.csv");

    // const batsman = "SK Raina";
    var batsmansOverallDelivery=[];
    for (const delivery of deliveries) {
        if(delivery.batsman == batsman){
            batsmansOverallDelivery.push(delivery);
        }
    }
    ///console.log(batsmansOverallDelivery);

    const map=new Map();
    for(const delivery of batsmansOverallDelivery ){
        const currMatch = matches[delivery.match_id];
        if(map.has(currMatch.season)){
            map.set(currMatch.season, map.get(currMatch.season) + parseInt(delivery.total_runs) );
        }
        else{
            map.set(currMatch.season, parseInt(delivery.total_runs));
        }
    }
    writeToFile("7_strike_rate_of_batsman_each_season", JSON.stringify(Object.fromEntries(map),null,2));
    return map;
}

console.log(strikeRateOfBatsmanEachSeason("SK Raina"));