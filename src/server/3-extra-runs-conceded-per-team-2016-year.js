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
    const deliveriesOf2016 = deliveries.filter((delivery) => matchIdOf2016.includes(delivery["match_id"]));
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

function mySolution(deliveries, matches, year){
    const deliveriesOf2016 = deliveries.reduce((acc, delivery)=> {
        const matchIdOfTheDelivery = delivery.match_id;
        const match =  matches.find(m => m.id === matchIdOfTheDelivery);
        const season = match.season;
        if( season === year){
            acc.push(delivery);
        }
        return acc;
    }, []);
    const teamAndExtraRuns = deliveriesOf2016.reduce((acc, delivery) => {
        if(acc[delivery.bowling_team]){
            acc[delivery.bowling_team] +=  Number(delivery.extra_runs);
        }
        else{
            acc[delivery.bowling_team] = Number(delivery.extra_runs);
        }
        return acc;
    }, {});
    return teamAndExtraRuns;
}


console.log(mySolution(deliveries, matches, "2016"));
// console.log(ExtraRunsConcededPerTeamInYear2016(deliveries,matches));