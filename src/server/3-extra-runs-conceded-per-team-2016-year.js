// import {
//     deliveries,
// } from '../data/deliveries.js'

// import{
//     matches
// } from '../data/matches.js'


const { CsvToJson } = require("./csvToJson");
const { writeToFile } = require("./writeToFile");

function extraRunsConcededPerTeamPerYear(year){
    const matches = CsvToJson("../data/matches.csv");
    const deliveries = CsvToJson("../data/deliveries.csv")

    const deliveriesOf2016 = deliveries.reduce((acc, delivery)=> {
        const matchIdOfTheDelivery = delivery.match_id;
        const match =  matches.find(m => m.id === matchIdOfTheDelivery);
        if(!match){
            return acc;
        }
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

    writeToFile("3_extra_runs_conceded_per_team_2016_year", JSON.stringify(teamAndExtraRuns,null,2));
    return teamAndExtraRuns;
}


console.log(extraRunsConcededPerTeamPerYear("2016"));