import {
    matches
} from '../data/matches.js'

function teamsWonTossAndMatch(matches) {
    const map = new Map();
    for (const match of matches) {
        let tossWinner = match.toss_winner;
        let matchWinner = match.winner;
        if (tossWinner == matchWinner) {
            if (map.has(matchWinner)) {
                map.set(matchWinner, map.get(matchWinner) + 1);
            }
            else {
                map.set(matchWinner, 1);
            }
        }
    }
    return map;
}

const teamsWonTossAndMatchInIPL = matches.reduce((acc, match) => {
    if (match.toss_winner === match.winner) {
        if (acc[match.toss_winner]) {
            acc[match.toss_winner] += 1;
        }
        else {
            acc[match.toss_winner] = 1;
        }
    }
    return acc;
}, {});

console.log(teamsWonTossAndMatchInIPL);

console.log(teamsWonTossAndMatch(matches));
