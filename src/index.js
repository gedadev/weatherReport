import './style.css';
import { Forecast } from './app/getForecast';

const searchInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#city-btn');
const container = document.querySelector('#forecast-container');

searchBtn.addEventListener('click', () => {
    let forecast = new Forecast(searchInput.value);
    forecast.currentWeather().then((response) => {
        forecast.displayData(response, container);
    });
});
