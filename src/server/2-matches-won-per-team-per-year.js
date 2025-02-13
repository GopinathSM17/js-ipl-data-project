import { matches } from "../data/matches.js";

function matchesWonPerTeamPerYear(matches) {
    const map = new Map();
    let counter;
    // const filteredMatches = matches.filter(match => match.year === 2020);
    for (const match of matches) {
        if (map.has(match.winner)) {
            map.set(match.winner, map.get(match.winner) + 1);
        }
        else {
            map.set(match.winner, 1);
        }
    }
    return map;
}

const matchesWonPerTeamPerYearInIPL =  matches.reduce((acc, match) => {
    const team = match.winner;
    const year = match.season;

    if( ! acc[year]){
        acc[year] = {};
    }
    if( ! acc[year][team]){
        acc[year][team] = 0;
    }
    acc[year][team] +=  1;
    return acc
} , {} );

console.log(matchesWonPerTeamPerYearInIPL);

// console.log(matchesWonPerTeamPerYear(matches));