// import {
//     matches
// } from '../data/matches.js'

// import {
//     deliveries
// } from '../data/deliveries.js'

const { CsvToJson } = require("./csvToJson");
const { writeToFile } = require("./writeToFile");

const strikeRateOfBatsmanEachSeason = (batsman) => {
    const matches = CsvToJson("../data/matches.csv");
    const deliveries = CsvToJson("../data/deliveries.csv")

    const totalDeliveryOfThePlayer= deliveries.reduce((acc, delivery) => {
        if (delivery.batsman == batsman) {
            acc.push(delivery);
        }
        return acc;
    }, []);
    const result = totalDeliveryOfThePlayer.reduce((acc, delivery) => {
        const matchIdOfTheDelivery = delivery.match_id;
        const season = matches[matchIdOfTheDelivery].season;
        const run = delivery.batsman_runs;
        if (acc[season]) {
            acc[season] += Number(run);
        }
        else {
            acc[season] = Number(run);
        }
        return acc;
    }, {});
    writeToFile("7_strike_rate_of_batsman_each_season", JSON.stringify(result,null,2));
    return result;
}

console.log(strikeRateOfBatsmanEachSeason("SK Raina"));
