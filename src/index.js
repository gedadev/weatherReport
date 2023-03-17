import './style.css';
import { Forecast } from './app/getForecast';

const searchInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#city-btn');
const container = document.querySelector('#forecast-container');
const metric = document.querySelector('#metric-selector');


metric.addEventListener('click', () => {
    console.log(metric.checked);
});
searchBtn.addEventListener('click', () => {
    let forecast = new Forecast(searchInput.value, container);
    forecast.run();
});