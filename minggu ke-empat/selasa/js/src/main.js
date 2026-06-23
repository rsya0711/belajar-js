import { pull, pullTen, reset } from "./gacha.js";
import { displayPullResult, displayMultiplePullResults, updateStats, clearResults } from "./ui.js";


window.addEventListener("DOMContentLoaded", () => {

  updateStats();

  const pullBtn = document.getElementById("pullBtn");
  pullBtn.addEventListener("click", () => {
    const result = pull();
    displayPullResult(result);
    updateStats();
  });

  const pullTenBtn = document.getElementById("pullTenBtn");
  pullTenBtn.addEventListener("click", () => {
    const results = pullTen();
    displayMultiplePullResults(results);
    updateStats();
  });

  const resetBtn = document.getElementById("resetBtn");
  resetBtn.addEventListener("click", () => {
    reset();
    clearResults();
    updateStats();
  });
});
