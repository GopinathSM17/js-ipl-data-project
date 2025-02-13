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

console.log(teamsWonTossAndMatch(matches));
