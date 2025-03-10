import { fetchData } from './fetch';

const getEntries = async () => {

  // Haetaan alue johon luodaan kortit
  const diaryContainer = document.getElementById('diary');
  console.log(diaryContainer);

  // Endpoint
  const url = 'http://localhost:3000/api/entries';

  // Haetaan Token localstoragesta
  const token = localStorage.getItem('token');

  // Tarkistetaan, että token on olemassa
  if (!token) {
    console.log('Ei löytynyt käyttäjän tokenia!');
    return;
  }

  // Muodostetaan headers oikeaan muotoon
  const headers = { Authorization: `Bearer ${token}` };

  // Options
  const options = {
    headers: headers,
  };

  // Haetaan data rajapinnasta
  const response = await fetchData(url, options);

  if (response.error) {
    console.log('Tapahtui virhe fetch haussa!!');
    return;
  }

  console.log(response);

  // Looppi jossa luodaan yksittäiset kortit
  diaryContainer.innerHTML = '';
  response.forEach((entry) => {

    const date = new Date(entry.entry_date);
    let newdate = date.toLocaleDateString();

    const card = document.createElement('div');
    card.classList.add('card');

    const cardImg = document.createElement('div');
    cardImg.classList.add('card-img');

    const img = document.createElement('img');
    img.src = 'src/img/background.jpg';
    img.alt = 'Diary Image';
    cardImg.appendChild(img);

    const cardDiary = document.createElement('div');
    cardDiary.classList.add('card-diary');
    cardDiary.innerHTML = `
      <p><strong>Päivämäärä:</strong> ${newdate}</p>
      <p><strong>Mieli:</strong> ${entry.mood}</p>
      <p><strong>Paino:</strong> ${entry.weight} kg</p>
      <p><strong>Unet:</strong> ${entry.sleep_hours} tuntia</p>
      <p><strong>Muistiinpanot:</strong> ${entry.notes}</p>
    `;

    card.appendChild(cardImg);
    card.appendChild(cardDiary);
    diaryContainer.appendChild(card);
  });
};
// Haetaan merkinnät kun sivu latautuu
window.onload = getEntries;

