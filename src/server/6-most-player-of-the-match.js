import {
    matches
} from '../data/matches.js'

function  mostPlayerOfTheMatch(matches) {
    const matchesBySeason = matches.reduce((acc, match) => {
        if(!acc[match.season]){
            acc[match.season]=[];
        }
        acc[match.season].push(match);
        return acc;
    }, {});
    
    for (const season in matchesBySeason) {
        const mapForSeasonAndPlayerOfTheMatch = new Map();
        let matchesOfEachSeason = matchesBySeason[season];
        // console.log(matchesOfEachSeason);
        const mapForPlayer = new Map();
        for (const match of matchesOfEachSeason) {
            const playerOfMatch = match.player_of_match;
            if(mapForPlayer.has(playerOfMatch)){
                mapForPlayer.set(playerOfMatch, mapForPlayer.get(playerOfMatch) + 1);
            }
            else{
                mapForPlayer.set(playerOfMatch, 1);
            }
        }
        const currMostMOM =0;
        let currMostMOMPlayer = 'BB McCullum';
        for (const [key, value] of mapForPlayer) {
            if(currMostMOM < value){
                currMostMOMPlayer = key;
            }
        }
        console.log(currMostMOMPlayer + " is has most man of the match award in the year "+ season);
        // console.log(mapForPlayer);
        console.log("---xxx-----");
    }
}

console.log(mostPlayerOfTheMatch(matches));