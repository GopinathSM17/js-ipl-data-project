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

console.log(matchesWonPerTeamPerYear(matches));