<script type="text/javascript">

const app = require("express")();
const { playerTypeTable } = require("./api/runescape");

const { rsMapping } = require("./utils");
let cors = require("cors");

app.use(cors());

PORT = process.env.PORT || 3001;

function parseRSData(dataString) {
  let newData = dataString.split("\n");
  let sanitizedData = [];
  newData.forEach((line, index) => {
    let lineData = line.split(",");

    if (rsMapping[index]) {
      sanitizedData[index] = {
        name: rsMapping[index],
        rank: lineData[0],
        level: lineData[1],
        experience: lineData[2] || -1,
      };
    }
  });
  //   console.log(sanitizedData);

  return sanitizedData;
}

async function getHighScores(playerType, playerName) {
  let result = await playerTypeTable[playerType].get("", {
    params: {
      player: playerName,
    },
  });

  let scoresData = parseRSData(result.data);
  return scoresData;
}

{
  skills: {
 "name": "overall",
 "rank": 1234,
 "level"|: 1234,
 "xp": 1234
 },
{
      "name": "Total",
      "rank": 1,
      "level": 2277,
      "xp": 4600000000
    },
    {
      "name": "Attack",
      "rank": 15,
      "level": 99,
      "xp": 200000000
    },
    {
      "name": "Defence",
      "rank": 28,
      "level": 99,
      "xp": 200000000
    },
    {
      "name": "Strength",
      "rank": 18,
      "level": 99,
      "xp": 200000000
    },
        {
      "name": "Magic",
      "rank": 32,
      "level": 99,
      "xp": 200000000
    },
    {
      "name": "Cooking",
      "rank": 159,
      "level": 99,
      "xp": 200000000
    },
   
    {
      "name": "Fishing",
      "rank": 9,
      "level": 99,
      "xp": 200000000
    },
    {
      "name": "Firemaking",
      "rank": 48,
      "level": 99,
      "xp": 200000000
    },
    {
      "name": "Crafting",
      "rank": 4,
      "level": 99,
      "xp": 200000000
    },
    {
      "name": "Smithing",
      "rank": 3,
      "level": 99,
      "xp": 200000000
    },
    {
      "name": "Mining",
      "rank": 25,
      "level": 99,
      "xp": 200000000
    },
    {
      "name": "Herblore",
      "rank": 5,
      "level": 99,
      "xp": 200000000
    },
    {
      "name": "Agility",
      "rank": 23,
      "level": 99,
      "xp": 200000000
    },
    {
      "name": "Thieving",
      "rank": 12,
      "level": 99,
      "xp": 200000000
    },
    {
      "name": "Slayer",
      "rank": 2,
      "level": 99,
      "xp": 200000000
    },
    {
      "name": "Farming",
      "rank": 19,
      "level": 99,
      "xp": 200000000
    },
    {
      "name": "Runecrafting",
      "rank": 7,
      "level": 99,
      "xp": 200000000
    },
    {
      "name": "Hunter",
      "rank": 4,
      "level": 99,
      "xp": 200000000
    },
    {
      "name": "Construction",
      "rank": 4,
      "level": 99,
      "xp": 200000000
    }
  },
  "clues": {
    all: { rank: 453, score: 12345 },
    beginner: { rank: 52356, score: 2 },
    ...
  },
  "bosses": {
    kingBlackDragon: { rank: 1, score: 11 },
    theatreOfBlood: { rank: 654, score: 86 },
    ...
  },
  "bountyHunter": {
    hunter: { rank: 567, score: 3456 },
    rogue: { rank: -1, score: -1 }
  },
  "leaguePoints": { rank: 4321, score: 2 },
  "lastManStanding": { rank: 234, score: 235 }
}
"minigames": [
    {
      "name": "Clue Scroll (All)",
      "rank": 552278,
      "score": 22
    },
    {
      "name": "Clue Scroll (Hard)",
      "rank": 375830,
      "score": 22
    },

module.exports = {
  spec: 'lib/**/*.spec.js',
  watchFiles: ['lib/**/*.js'],


  ;
  </script>
