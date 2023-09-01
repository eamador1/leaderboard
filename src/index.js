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
  displayList.innerHTML = '';

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

const form = document.querySelector('.addForm');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const user = form.querySelector('[name="user"]').value;
  const score = form.querySelector('[name="score"]').value;

  try {
    const res = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IV1251GkSsG9dGnKrPGk/scores/',
      {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8' ,
          },
        body: JSON.stringify({user:user, score:score}),
      },
    );

    const resData = await res.json();

    emptyInputText()

  } catch (err) {
    console.error(err.message);
  }
});

const emptyInputText = () => {
  const user = form.querySelector('[name="user"]');
  const score = form.querySelector('[name="score"]');
  user.value = '';
  score.value= '';
};

const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', async event => {

await populate();
});