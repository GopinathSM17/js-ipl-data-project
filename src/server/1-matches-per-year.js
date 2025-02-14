import { matches } from "../data/matches.js";

const matchesPerYearInIPL = (matches) => {
    const matchesPerYear = matches.reduce((acc, match) => {
        if (acc[match.season]) {
            acc[match.season] += 1;
        }
        else {
            acc[match.season] = 1;
        }
        return acc;
    }, {});

    return matchesPerYear
}
console.log(matchesPerYearInIPL(matches));


