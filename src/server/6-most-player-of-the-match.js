import {
    matches
} from '../data/matches.js'

function mostPlayerOfTheMatch(matches) {
    const matchesBySeason = matches.reduce((acc, match) => {
        if (!acc[match.season]) {
            acc[match.season] = [];
        }
        acc[match.season].push(match);
        return acc;
    }, {});

    // console.log(matchesBySeason);

    for (const season in matchesBySeason) {
        //  console.log(season);
        // console.log(matchesBySeason[season]);
        const mapForSeasonAndPlayerOfTheMatch = new Map();
        let matchesOfEachSeason = matchesBySeason[season];
        // console.log(matchesOfEachSeason);
        const mapForPlayer = new Map();
        for (const match of matchesOfEachSeason) {
            const playerOfMatch = match.player_of_match;
            if (mapForPlayer.has(playerOfMatch)) {
                mapForPlayer.set(playerOfMatch, mapForPlayer.get(playerOfMatch) + 1);
            }
            else {
                mapForPlayer.set(playerOfMatch, 1);
            }
        }
        const currMostMOM = 0;
        let currMostMOMPlayer = 'BB McCullum';
        for (const [key, value] of mapForPlayer) {
            if (currMostMOM < value) {
                currMostMOMPlayer = key;
            }
        }
        console.log(currMostMOMPlayer + " is has most man of the match award in the year " + season);
        // console.log(mapForPlayer);
        console.log("---xxx-----");
    }
}

const yearAndManOfTheMatchList = matches.reduce((acc, match) => {
    if (acc[match.season]) {
        if (acc[match.season][match.player_of_match]) {
            acc[match.season][match.player_of_match] += 1
        }
        else {
            acc[match.season][match.player_of_match] = 1
        }
    }
    else {
        acc[match.season] = {};
    }
    return acc;
}, {});


const yearAndManOfTheMatch = Object.keys(yearAndManOfTheMatchList).reduce((acc, year) => {
    const players = yearAndManOfTheMatchList[year];
    const bestMOMPlayer = Object.keys(players).reduce((acc2, player) => {
        return players[player] > acc2.value ? { name: player, value: players[player] } : acc2;
    }, { name: null, value: -Infinity });

    acc[year] = bestMOMPlayer;
    return acc;
}, {});



console.log(yearAndManOfTheMatch);
// console.log(mostPlayerOfTheMatch(matches));