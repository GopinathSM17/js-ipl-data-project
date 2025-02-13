import { matches } from "../data/matches.js";

const matchesPerYear = function (matches) {
    let matchCount = 0;
    const map = new Map();
    for (const element of matches) {
        if (map.has(element.season)) {
            matchCount++;
            map.set(element.season, matchCount);
        }
        else {
            matchCount = 1;
            map.set(element.season, matchCount);
        }
    }
    return map;
}

const matchesPerYearInIPL = matches.reduce( (acc, match) => {
    if(acc[match.season]){
        acc[match.season] += 1;
    }
    else{
        acc[match.season] = 1;
    }
    return acc;
}, {});
console.log(matchesPerYearInIPL);

// console.log(matchesPerYear(matches));

