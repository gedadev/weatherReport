async function currentWeather(lat, lon) {
    console.log(lat, lon);
    const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5d0907efdadf22c907135983ee95c9d4`, {mode: 'cors'});
    const data = await resp.json();
    console.log(data);
}

async function getCoordinates(city) {
    const resp = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=5d0907efdadf22c907135983ee95c9d4`, {mode: 'cors'});
    const data = await resp.json();
    currentWeather(data[0].lat, data[0].lon);
}

getCoordinates('mexico');