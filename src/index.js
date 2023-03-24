import './style.css';
import { Forecast } from './app/getForecast';

const searchInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#city-btn');
const container = document.querySelector('#forecast-container');
const units = document.querySelector('#units-selector');

units.addEventListener('click', () => {
    if (units.checked) {
        units.parentNode.children[1].style.color = 'var(--color-1)';
        units.parentNode.children[3].style.color = 'var(--color-4)';
    } else {
        units.parentNode.children[1].style.color = 'var(--color-4)';
        units.parentNode.children[3].style.color = 'var(--color-1)';
    }
    let forecast = new Forecast(searchInput.value, container, (units.checked ? 'imperial' : 'metric'));
    forecast.run();
});
searchBtn.addEventListener('click', () => {
    let forecast = new Forecast(searchInput.value, container, (units.checked ? 'imperial' : 'metric'));
    forecast.run();
});
  
function success(pos) {
    const crd = pos.coords;
    let forecast = new Forecast(searchInput.value, container, (units.checked ? 'imperial' : 'metric'), crd.latitude, crd.longitude);
    forecast.run();
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, {timeout: 3000});