// import {
//     deliveries,
// } from '../data/deliveries.js'

// import{
//     matches
// } from '../data/matches.js'

const { CsvToJson } = require("./csvToJson");
const { writeToFile } = require("./writeToFile");

const ExtraRunsConcededPerTeamInYear2016IPL = ()=>{
    const matches = CsvToJson("../data/matches.csv");
    const deliveries = CsvToJson("../data/deliveries.csv");

    const matchIdOf2016 = [];
    for (const match of matches) {
        if(match.season == "2016"){
            matchIdOf2016.push(match.id);
        }
    }

    const  teamAndExtraRuns = {}
    for (const matchId of matchIdOf2016) {
        for(const delivery of deliveries){
            if(delivery.match_id == matchId ){
                if(teamAndExtraRuns[delivery.bowling_team]){
                    teamAndExtraRuns[delivery.bowling_team] += Number(delivery.extra_runs, 2);
                }
                else{
                    teamAndExtraRuns[delivery.bowling_team] = Number(delivery.extra_runs, 2);
                }
            }
        }        
    }
    writeToFile("3_extra_runs_conceded_per_team_2016_year", JSON.stringify(teamAndExtraRuns,null,2));
    return teamAndExtraRuns;
}

console.log(ExtraRunsConcededPerTeamInYear2016IPL());