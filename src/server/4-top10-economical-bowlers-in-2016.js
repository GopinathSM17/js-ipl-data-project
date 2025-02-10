import {
    deliveries,
} from '../data/deliveries.js'

import {
    matches
} from '../data/matches.js'


function top10EconomicalBowlersIn2016(deliveries, matches) {
    const map = new Map();
    const matchIdOf2015 = [];
    for (const match of matches) {
        if (match.season == "2015") {
            matchIdOf2015.push(match.id);
        }
    }
    // console.log(matchIdOf2015);
    const deliveriesOf2015 = deliveries.filter((delivery) => matchIdOf2015.includes(delivery["match_id"]));

    
    // const deliveriesByBowler = deliveriesOf2015.reduce((acc, delivery) => {
    //     if (!acc[delivery.bowler]) {
    //         acc[delivery.bowler] = [];
    //     }
    //     acc[delivery.bowler].push(delivery);
    //     return acc;
    // }, {});



}

console.log(top10EconomicalBowlersIn2016(deliveries, matches));
