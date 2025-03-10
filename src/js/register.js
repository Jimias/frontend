import { fetchData } from './fetch.js';

const registerUser = async (event) => {
    event.preventDefault();
  
    // Haetaan oikea formi
    const registerForm = document.querySelector('.registerForm');
  
    // Haetaan formista arvot
    const username = registerForm.querySelector('#username').value.trim();
    const password = registerForm.querySelector('#password').value.trim();
    const email = registerForm.querySelector('#email').value.trim();
  
    // Luodaan body lähetystä varten taustapalvelun vaatimaan muotoon
    const bodyData = {
      username: username,
      password: password,
      email: email,
    };
  
    // Endpoint
    const url = 'http://localhost:3000/api/users';
  
    // Options
    const options = {
      body: JSON.stringify(bodyData),
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
    };
    console.log(options);
  
    // Hae data
    const response = await fetchData(url, options);
  
    if (response.error) {
      console.error('Virhe käyttäjän lisäämisessä:', response.error);
      alert('Virhe rekisteröitymisessä! Tarkista tiedot ja yritä uudelleen.');
      return;
    }
  
    if (response.message) {
      console.log(response.message, 'Onnistui');
    }
  
    console.log(response);

    // ohjataan käyttääjä kirjautumissivulle
    window.location.href = 'index.html';
    
    registerForm.reset(); // tyhjennetään formi
  };

// Lomakkeen lähetyksen kuuntelija
const registerForm = document.querySelector('.registerForm');
registerForm.addEventListener('submit', registerUser);
