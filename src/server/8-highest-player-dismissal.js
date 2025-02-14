// import {
//     matches
// } from '../data/matches.js'

// import {
//     deliveries
// } from '../data/deliveries.js'


const { CsvToJson } = require("./csvToJson");
const { writeToFile } = require("./writeToFile");


function highestPlayerDismissal() {
  const matches = CsvToJson("../data/matches.csv");
    const deliveries = CsvToJson("../data/deliveries.csv")

    const dismissals = deliveries.reduce((acc, delivery) => {
        if (delivery.player_dismissed) {
          if (acc[delivery.bowler] === undefined) {
            acc[delivery.bowler] = {};
          }
          if (acc[delivery.bowler][delivery.batsman] === undefined) {
            acc[delivery.bowler][delivery.batsman] = 0;
          }
          acc[delivery.bowler][delivery.batsman]++;
        }
        return acc;
      }, {});

      const bowlers = Object.keys(dismissals);
  let highestDismissal = bowlers.reduce(
    (accumulator, bowler) => {
      const battters = Object.keys(dismissals[bowler]);
      const currentHighest = battters.reduce(
        (accumulator, batsman) => {
          accumulator =
            accumulator.dismissals > dismissals[bowler][batsman]
              ? accumulator
              : {
                  bowler: bowler,
                  batsman: batsman,
                  dismissals: dismissals[bowler][batsman],
                };
          return accumulator;
        },
        {
          bowler: "",
          batsman: "",
          dismissals: 0,
        }
      );

      return accumulator.dismissals > currentHighest.dismissals
        ? accumulator
        : currentHighest;
    },
    {
      bowler: "",
      batsman: "",
      dismissals: 0,
    }
  );
  writeToFile("8_highest_player_dismissal", JSON.stringify(highestDismissal,null,2));
  return highestDismissal;
};

console.log(highestPlayerDismissal());
