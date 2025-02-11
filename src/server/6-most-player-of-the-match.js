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

    console.log(matchesBySeason);

    // for (const match in matchesBySeason) {
    //     console.log(matchesBySeason[match]);
    //     // matchesBySeason[match].forEach(match => {

    //     //   });

    // }

//     const map=new Map();
//     for (const match of matches) {
//         if(map.has(match.player_of_match)){
//             map.set(match.player_of_match, map.get(match.player_of_match) + 1 );
//         }
//         else{
//             map.set(match.player_of_match, 1);
//         }
//     }
//     return map;
}

console.log(mostPlayerOfTheMatch(matches));