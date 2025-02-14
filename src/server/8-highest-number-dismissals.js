// import {
//     deliveries,
// } from '../data/deliveries.js'

// import{
//     matches
// } from '../data/matches.js'


const { CsvToJson } = require("./csvToJson");
const { writeToFile } = require("./writeToFile");


const highestNumberOfDismissal = () => {
  const matches = CsvToJson("../data/matches.csv");
  const deliveries = CsvToJson("../data/deliveries.csv");
  const dissmissals = {};
  for (const bowl of deliveries) {
    if (bowl.player_dismissed) {
      if (dissmissals[bowl.bowler] === undefined) {
        dissmissals[bowl.bowler] = {};
      }
      if (dissmissals[bowl.bowler][bowl.batsman] === undefined) {
        dissmissals[bowl.bowler][bowl.batsman] = 0;
      }
      dissmissals[bowl.bowler][bowl.batsman]++;
    }
  }
  let highestDissmissal = { bowler: "", batsman: "", dissmissals: 0 };

  for (const bowler in dissmissals) {
    let player = "";
    let playerDissmissals = 0;
    for (const batsman in dissmissals[bowler]) {
      if (dissmissals[bowler][batsman] >= playerDissmissals) {
        player = batsman;
        playerDissmissals = dissmissals[bowler][batsman];
      }
    }
    dissmissals[bowler] = { [player]: playerDissmissals };
    if (playerDissmissals >= highestDissmissal.dissmissals) {
      highestDissmissal = {
        bowler: bowler,
        batsman: player,
        dissmissals: playerDissmissals,
      };
    }
  }
  writeToFile("8_highest_number_dismissals", JSON.stringify(highestDissmissal,null,2));
  return highestDissmissal;
}

console.log(highestNumberOfDismissal());