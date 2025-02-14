import { matches } from "../data/matches.js";

function matchesWonPerTeamPerYear(matches) {
    const map = new Map();

    const matchesPerSeason = {};
    for(const match of matches){
        if(matchesPerSeason[match.season]){
            if(matchesPerSeason[match.season][match.winner]){
                matchesPerSeason[match.season][match.winner] += 1;
            }
            else{
                matchesPerSeason[match.season][match.winner] = 1;
            }
        }
        else{
            matchesPerSeason[match.season] = {};
        }
    }
    return matchesPerSeason;
}

console.log(matchesWonPerTeamPerYear(matches));