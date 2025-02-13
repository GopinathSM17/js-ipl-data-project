import {
    matches
} from '../data/matches.js'

import {
    deliveries
} from '../data/deliveries.js'

function strikeRateOfBatsmanEachSeason(deliveries, batsman, matches) {
    // const batsman = "SK Raina";
    var batsmansOverallDelivery = [];
    for (const delivery of deliveries) {
        if (delivery.batsman == batsman) {
            batsmansOverallDelivery.push(delivery);
        }
    }
    ///console.log(batsmansOverallDelivery);

    const map = new Map();
    for (const delivery of batsmansOverallDelivery) {
        const currMatch = matches[delivery.match_id];
        if (map.has(currMatch.season)) {
            map.set(currMatch.season, map.get(currMatch.season) + parseInt(delivery.total_runs));
        }
        else {
            map.set(currMatch.season, parseInt(delivery.total_runs));
        }
    }
    console.log(map);
}


const myFunction = (deliveries, batsman) => {

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
    return result;
}



console.log(myFunction(deliveries, "SK Raina"));

// console.log(totalDeliveryOfThePlayer);
// console.log(result);
// strikeRateOfBatsmanEachSeason(deliveries, "SK Raina", matches);