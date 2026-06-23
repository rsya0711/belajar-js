// Logika Gacha

import { characters, rarityRates } from "./data.js";

export const stats = {
  totalPull: 0,
  common: 0,
  rare: 0,
  epic: 0,
  legendary: 0,
  pullsSinceLegendary: 0
};

function getRarity() {
  const random = Math.random();

  if (stats.pullsSinceLegendary >= 30) {
    stats.pullsSinceLegendary = 0;
    return "Legendary";
  }
  
  if (random < rarityRates.Common) {
    return "Common";
  } else if (random < rarityRates.Common + rarityRates.Rare) {
    return "Rare";
  } else if (random < rarityRates.Common + rarityRates.Rare + rarityRates.Epic) {
    return "Epic";
  } else {
    return "Legendary";
  }
}

function getCharacterByRarity(rarity) {
  const rarityKey = rarity.toLowerCase();
  const charList = characters[rarityKey];
  
  if (!charList) return null;
  
  const randomIndex = Math.floor(Math.random() * charList.length);
  return charList[randomIndex];
}

export function pull() {
  const rarity = getRarity();
  const character = getCharacterByRarity(rarity);

  stats.totalPull++;
  stats[rarity.toLowerCase()]++;

  if (rarity === "Legendary") {
    stats.pullsSinceLegendary = 0;
  } else {
    stats.pullsSinceLegendary++;
  }
  
  return {
    character: character.name,
    rarity: rarity
  };
}

export function pullTen() {
  const results = [];
  
  for (let i = 0; i < 10; i++) {
    results.push(pull());
  }
  
  return results;
}

export function reset() {
  stats.totalPull = 0;
  stats.common = 0;
  stats.rare = 0;
  stats.epic = 0;
  stats.legendary = 0;
  stats.pullsSinceLegendary = 0;
}
