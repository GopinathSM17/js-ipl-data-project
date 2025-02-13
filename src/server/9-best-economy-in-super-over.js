import {
    matches
} from '../data/matches.js'

import{
    deliveries
} from '../data/deliveries.js'

function bestEconomyBowlerInSuperOver(deliveries) {
    let superOverballs =[];
    for (const delivery of deliveries) {
        if(delivery.is_super_over == '1'){
            superOverballs.push(delivery);
        }
    }
    // console.log(superOverballs);


    const mapforTotalRuns = new Map();
    for (const delivery of superOverballs) {
        //console.log(delivery.bowler);
        if(mapforTotalRuns.has(delivery.bowler)){
            mapforTotalRuns.set(delivery.bowler, mapforTotalRuns.get(delivery.bowler) + parseInt(delivery.total_runs));
        }
        else{
            mapforTotalRuns.set(delivery.bowler, 0);
        }
    }

    const mapforTotalBalls = new Map();
    for (const delivery of superOverballs) {
        if(mapforTotalBalls.has(delivery.bowler)){
            mapforTotalBalls.set(delivery.bowler, mapforTotalBalls.get(delivery.bowler) + 1);
        }
        else{
            mapforTotalBalls.set(delivery.bowler, 0);
        }
    }
    let bestBowlerInSuperOverEconomy =100;
    let bestBowlerInSuperOver
    for (const bowler of mapforTotalBalls.keys()){
        const overs = mapforTotalBalls.get(bowler) / 6;
        const economy = mapforTotalRuns.get(bowler)/overs;
        if( economy < bestBowlerInSuperOverEconomy ){
            bestBowlerInSuperOverEconomy = economy
            bestBowlerInSuperOver=bowler;
        }

    }
    return bestBowlerInSuperOver;
    // console.log(mapforTotalRuns);
    // console.log(mapforTotalBalls);
}

const allTheSuperOverBalls = deliveries.reduce((acc , delivery)=> {
    if(delivery.is_super_over === "1"){

        acc.push(delivery);
    }
    return acc;
}, []);



// console.log(allTheSuperOverBalls);

const bowlersAndRuns =  allTheSuperOverBalls.reduce((acc, delivery)=> {
    if(acc[delivery.bowler]){
        acc[delivery.bowler] += parseInt(delivery.total_runs);
    }
    else{
        acc[delivery.bowler] = parseInt(delivery.total_runs);
    }
    return acc;
}, {});

const bestBowlerInSuperOver = Object.keys(bowlersAndRuns).reduce((acc, bowler)=>{
    if(acc [1] > bowlersAndRuns[bowler]){
       acc[0] = bowler;
       acc[1] =  bowlersAndRuns[bowler];
    }
    return acc;
}, ["" , 100]);



console.log(bestBowlerInSuperOver);
// console.log(bestEconomyBowlerInSuperOver(deliveries));