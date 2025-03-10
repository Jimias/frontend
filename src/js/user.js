import { fetchData } from './fetch'; 

const getUser = async (event) => {
  event.preventDefault();

  // Haetaan alue johon luodaan käyttäjäntiedot
  const user = document.getElementById('userInfo');

  // Endpoint
  const url = 'http://localhost:3000/api/auth/me';

  // Kutsun headers tiedot johon liitetään tokeni
  let headers = {};

  // Haetaan käyttäjän Token localstoragesta
  const token = localStorage.getItem('token');

  // Muodostetaa nyt headers oikeaan muotoon
  headers = {Authorization: `Bearer ${token}`};

  // Options
  const options = {
    headers: headers,
  };
  console.log(options);

  // Hae data
  const response = await fetchData(url, options);

  if (response.error) {
    console.error('Virhe käyttjätietojen hakemisessa:', response.error);
    return;
  }

  if (response.message) {
    console.log(response.message, 'Onnistui');
  }
  console.log(response);

  user.innerHTML = '';
  user.innerHTML = `
    <p><strong>Käyttäjätunnus:</strong> ${response.username}</p>
    <p><strong>Sähköposti:</strong> ${response.email}</p>
  `;
};

// Haetaan käyttäjän tiedot kun sivu latautuu
window.onload = getUser;
