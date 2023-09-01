import './style.css';

// POPULATE LIST

import populateList from './module/showList.js';

const populate = async () => {
  const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IV1251GkSsG9dGnKrPGk/scores/';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const allPlayers = await response.json();

  populateList(allPlayers);
}

populate();

const form = document.querySelector('.addForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const user = form.querySelector('[name="user"]').value;
  const score = form.querySelector('[name="score"]').value;

  try {
    await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IV1251GkSsG9dGnKrPGk/scores/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ user, score }),
      },
    );

    const emptyInputText = () => {
      const user = form.querySelector('[name="user"]');
      const score = form.querySelector('[name="score"]');
      user.value = '';
      score.value = '';
    };

    emptyInputText();
  } catch (err) {
    return err;
  }
  return {};
});

const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', async () => {
  await populate();
});