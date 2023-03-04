import './style.css';
import { Forecast } from './app/getForecast';

const searchInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#city-btn');

let forecast = new Forecast();

searchBtn.addEventListener('click', () => {
    forecast.getCoordinates(searchInput.value);
});
