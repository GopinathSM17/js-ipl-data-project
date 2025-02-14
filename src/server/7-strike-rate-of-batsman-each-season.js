import {
    matches
} from '../data/matches.js'

import {
    deliveries
} from '../data/deliveries.js'

const strikeRateOfBatsmanEachSeason = (deliveries, batsman) => {

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

console.log(strikeRateOfBatsmanEachSeason(deliveries, "SK Raina"));
