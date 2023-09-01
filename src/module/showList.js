const populateList = (obj) => {
  const displayList = document.querySelector('.displayList');
  const players = obj.result;
  displayList.innerHTML = '';

  players.forEach((playerData) => {
    const playerDiv = document.createElement('div');
    const user = document.createElement('h5');
    const score = document.createElement('span');

    playerDiv.classList.add('player');

    user.textContent = `${playerData.user}:`;
    score.textContent = `${playerData.score}`;

    playerDiv.appendChild(user);
    playerDiv.appendChild(score);
    displayList.appendChild(playerDiv);
  });
};

export default populateList;