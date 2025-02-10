import {
    deliveries,
} from '../data/deliveries.js'

import{
    matches
} from '../data/matches.js'


function ExtraRunsConcededPerTeamInYear2016(deliveries, matches) {
    const map=new Map();
    const matchIdOf2016=[];
    for (const match of matches) {
        if(match.season == "2016"){
            matchIdOf2016.push(match.id);
        }
    }

    const deliveriesOf2016 = deliveries.filter((delivery)=> matchIdOf2016.includes(delivery["match_id"]));
    let extraRuns;
    for (const eachDelivery of deliveriesOf2016) {
        if(map.has(eachDelivery.bowling_team)){
            extraRuns = parseInt(eachDelivery.extra_runs , 10);
            map.set(eachDelivery.bowling_team, map.get(eachDelivery.bowling_team)+ extraRuns);
        }
        else{
            extraRuns =  parseInt(eachDelivery.extra_runs , 10);
            map.set(eachDelivery.bowling_team, extraRuns);
        }
    }
    return map;
}


console.log(ExtraRunsConcededPerTeamInYear2016(deliveries,matches));