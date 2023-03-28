import './style.css';
import { Forecast } from './app/getForecast';
import { DailyForecast } from './app/dailyForecast';

const searchInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#city-btn');
const container = document.querySelector('#forecast-container');
const units = document.querySelector('#units-selector');
const dailyContainer = document.querySelector('#daily-container');

let daily = new DailyForecast(searchInput.value, dailyContainer, (units.checked ? 'imperial' : 'metric'));
console.log(daily);

searchBtn.addEventListener('click', getForecast);

currentPosition();

units.addEventListener('click', () => {
    if (units.checked) {
        units.parentNode.children[1].style.color = 'var(--color-1)';
        units.parentNode.children[3].style.color = 'var(--color-4)';
    } else {
        units.parentNode.children[1].style.color = 'var(--color-4)';
        units.parentNode.children[3].style.color = 'var(--color-1)';
    }

    searchInput.value === "" ? currentPosition() : getForecast();
});

function getForecast() {
    let forecast = new Forecast(searchInput.value, container, (units.checked ? 'imperial' : 'metric'));
    forecast.run();
}

function currentPosition() {
    navigator.geolocation.getCurrentPosition(success, error, {timeout: 3000});
}

function success(pos) {
    const crd = pos.coords;
    let forecast = new Forecast(searchInput.value, container, (units.checked ? 'imperial' : 'metric'), crd.latitude, crd.longitude);
    forecast.run();
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    // Add a msg to indicate the user to turn on the browser location or to enter a value in the search box
}