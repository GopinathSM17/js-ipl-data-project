import {
    matches
} from '../data/matches.js'

import{
    deliveries
} from '../data/deliveries.js'

function strikeRateOfBatsmanEachSeason(deliveries, batsman, matches) {
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
    console.log(map);
}

strikeRateOfBatsmanEachSeason(deliveries, "SK Raina", matches);