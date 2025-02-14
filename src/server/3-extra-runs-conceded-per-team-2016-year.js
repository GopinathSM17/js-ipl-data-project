import {
    deliveries,
} from '../data/deliveries.js'

import{
    matches
} from '../data/matches.js'


function extraRunsConcededPerTeamPerYear(deliveries, matches, year){
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


console.log(extraRunsConcededPerTeamPerYear(deliveries, matches, "2016"));