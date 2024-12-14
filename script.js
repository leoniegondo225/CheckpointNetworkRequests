// script.js

// API Key et URL de base
const API_KEY = 'votre_cle_api'; // Remplacez par votre clé API OpenWeather
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Sélection des éléments HTML
const cityInput = document.getElementById('city');
const getWeatherButton = document.getElementById('Obtenir la météo');
const locationDisplay = document.getElementById('location');
const descriptionDisplay = document.getElementById('description');
const temperatureDisplay = document.getElementById('temperature');

// Fonction pour récupérer les données météo
async function fetchWeather(city) {
    try {
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(`Erreur : ${error.message}`);
    }
}

// Fonction pour afficher les données météo
function displayWeather(data) {
    const { name, sys, weather, main } = data;
    locationDisplay.textContent = `${name}, ${sys.country}`;
    descriptionDisplay.textContent = weather[0].description;
    temperatureDisplay.textContent = `${main.temp}°C`;
}

// Événement lors du clic sur le bouton
getWeatherButton.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        alert('Veuillez entrer un nom de ville');
    }
});
