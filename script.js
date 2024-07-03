let clickCount = 0;
let highScore = 0;
let historyList = document.getElementById("history-list");
let btn = document.getElementById("button");



btn.addEventListener("click", function () {
  clickCount++;
  document.getElementById("click-count").textContent = clickCount;


  if (clickCount > highScore) {
    highScore = clickCount;
    document.getElementById("high-score").textContent = highScore;
  }
});

function saveHistory() {
  let currentTime = new Date().toLocaleTimeString();
  let listItem = document.createElement("p");


  document.getElementById("click-count").textContent = clickCount;

  
  if (clickCount > 0) {
    listItem.textContent = `${currentTime} - ${clickCount}`;
    historyList.appendChild(listItem);
  }
  clickCount = 0; 
}

setInterval(saveHistory, 5000); 
