import { matches } from "../data/matches.js";

const matchesWonPerTeamPerYearInIPL = (matches) => {
    const matchesWonPerTeamPerYear = matches.reduce((acc, match) => {
        const team = match.winner;
        const year = match.season;

        if (!acc[year]) {
            acc[year] = {};
        }
        if (!acc[year][team]) {
            acc[year][team] = 0;
        }
        acc[year][team] += 1;
        return acc
    }, {});
    return matchesWonPerTeamPerYear
}

console.log(matchesWonPerTeamPerYearInIPL(matches));
