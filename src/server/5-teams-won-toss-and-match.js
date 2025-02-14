import {
    matches
} from '../data/matches.js'

const teamsWonTossAndMatchInIPL = (matches) => {
    const teamsWonTossAndMatch = matches.reduce((acc, match) => {
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
    return teamsWonTossAndMatch;
}

console.log(teamsWonTossAndMatchInIPL(matches));
