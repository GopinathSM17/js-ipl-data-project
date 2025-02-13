//const matches = require('../data/matches');
//console.log(matches);
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

const matchesPerYearInIPL = matches.reduce( (yearAndMatch, match) => {
    if(yearAndMatch[match.season]){
        yearAndMatch[match.season] += 1;
    }
    else{
        yearAndMatch[match.season] = 1;
    }
    return yearAndMatch;
}, {});
console.log(matchesPerYearInIPL);

console.log(matchesPerYear(matches));

