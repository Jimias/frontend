import { fetchData } from './fetch.js';

const submitDiaryEntry = async (event) => {
  event.preventDefault();

  // Haetaan oikea formi
  const form = document.getElementById("create-entry-form");

  // Haetaan formista arvot
  const entry_date = form.querySelector('#entry_date').value.trim();
  const mood = form.querySelector('#mood').value.trim();
  const weight = form.querySelector('#weight').value.trim();
  const sleep_hours = form.querySelector('#sleep_hours').value.trim();
  const notes = form.querySelector('#notes').value.trim();

  // Luodaan body lähetystä varten taustapalvelun vaatimaan muotoon
  const bodyData = {
    entry_date: entry_date,
    mood: mood,
    weight: weight,
    sleep_hours: sleep_hours,
    notes: notes,
  };

  // Haetaan token localStoragesta
  const token = localStorage.getItem('token');

  if (!token) {
    console.log('Ei löytynyt käyttäjän tokenia!');
    return;
  }

  // Muodostetaan headers oikeaan muotoon
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };

  // Endpoint
  const url = 'http://localhost:3000/api/entries';

  // Options
  const options = {
    body: JSON.stringify(bodyData),
    method: 'POST',
    headers: headers,
  };

  // Lähetetään pyyntö
  const response = await fetchData(url, options);

  // Virheiden käsittely
  if (response.error) {
    console.error('Virhe merkinnän tallentamisessa:', response.error);
    alert('Virhe merkinnän tallentamisessa! Tarkista tiedot ja yritä uudelleen.');
    return;
  }

  // Vastauksen käsittely ja ohjaus
  if (response.message) {
    console.log(response.message, 'Onnistui');
  }

  console.log(response);

  // Ilmoitetaan käyttäjälle ja tyhjennetään lomake
  alert('Merkintä tallennettu!');
  form.reset();
};

// Lomakkeen lähetyksen kuuntelija
const form = document.getElementById("create-entry-form");
form.addEventListener('submit', submitDiaryEntry);
