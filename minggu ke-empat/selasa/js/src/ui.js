// Fungsi untuk DOM Manipulation

import { rarityColors } from "./data.js";
import { stats } from "./gacha.js";

export function displayPullResult(result) {
  const resultsContainer = document.getElementById("results");
  
  const resultCard = document.createElement("div");
  resultCard.className = "result-card";
  resultCard.style.backgroundColor = rarityColors[result.rarity];
  
  const resultContent = document.createElement("div");
  resultContent.className = "result-content";
  
  const rarity = document.createElement("p");
  rarity.className = "result-rarity";
  rarity.textContent = `[${result.rarity.toUpperCase()}]`;
  
  const name = document.createElement("p");
  name.className = "result-name";
  name.textContent = result.character;
  
  resultContent.append(rarity, name);
  resultCard.append(resultContent);
  
  resultsContainer.insertBefore(resultCard, resultsContainer.firstChild);
}

export function displayMultiplePullResults(results) {
  results.forEach((result, index) => {
    setTimeout(() => {
      displayPullResult(result);
    }, index * 200); 
  });
}

export function updateStats() {
  const statsContainer = document.getElementById("stats");
  
  statsContainer.innerHTML = `
    <div class="stat-item">
      <span>Total Pull:</span>
      <span class="stat-value">${stats.totalPull}</span>
    </div>
    <div class="stat-item">
      <span>Common:</span>
      <span class="stat-value" style="color: ${rarityColors['Common']}">${stats.common}</span>
    </div>
    <div class="stat-item">
      <span>Rare:</span>
      <span class="stat-value" style="color: ${rarityColors['Rare']}">${stats.rare}</span>
    </div>
    <div class="stat-item">
      <span>Epic:</span>
      <span class="stat-value" style="color: ${rarityColors['Epic']}">${stats.epic}</span>
    </div>
    <div class="stat-item">
      <span>Legendary:</span>
      <span class="stat-value" style="color: ${rarityColors['Legendary']}">${stats.legendary}</span>
    </div>
    <div class="stat-item">
      <span>Pity Counter:</span>
      <span class="stat-value">${stats.pullsSinceLegendary}/30</span>
    </div>
  `;
}

export function clearResults() {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";
}
