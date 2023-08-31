import './style.css';

async function populate() {
    const requestURL =
      "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IV1251GkSsG9dGnKrPGk/scores/";
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const allPlayers = await response.json();
  
    populateList(allPlayers);
  }

  //POPULATE LIST

function populateList(obj) {
  const displayList = document.querySelector(".displayList");
  const players = obj.result;

  for (const playerData of players) {
  
  const playerDiv = document.createElement('div');
  const user = document.createElement('h5');
  const score = document.createElement('span');

  playerDiv.classList.add('player');

  user.textContent = `${playerData.user}:`;
  score.textContent = `${playerData.score}`;
  
  playerDiv.appendChild(user);
  playerDiv.appendChild(score);
  displayList.appendChild(playerDiv);
}
}

populate();