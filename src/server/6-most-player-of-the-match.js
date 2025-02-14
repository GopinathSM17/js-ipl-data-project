import {
    matches
} from '../data/matches.js'

const mostPlayerOfTheMatchPerYear = (matches) => {
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
        }, { name: 'gopi', value: 0 });

        acc[year] = bestMOMPlayer;
        return acc;
    }, {});

    return yearAndManOfTheMatch;
}



console.log(mostPlayerOfTheMatchPerYear(matches));