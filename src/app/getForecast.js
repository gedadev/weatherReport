export class Forecast {

    constructor(city) {
        this.city = city;
        this.lat;
        this.lon;
    }

    async currentWeather(units = 'metric') {
        await this.getCoordinates();
        const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=5d0907efdadf22c907135983ee95c9d4&units=${units}`, {mode: 'cors'});
        const data = await resp.json();
        return data;
    }
    
    async getCoordinates() {
        const resp = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.city}&appid=5d0907efdadf22c907135983ee95c9d4`, {mode: 'cors'});
        const data = await resp.json();
        this.lat = data[0].lat;
        this.lon = data[0].lon;
    }

    displayData(data, div) {
        let p;
        for (let i = 0; i < 7; i++) {
            switch (i) {
                case 0:
                    let date = new Date(data.dt).toLocaleTimeString('en-US');
                    p = document.createElement('p');
                    p.innerHTML = `Updated at ${date}`;
                    div.appendChild(p);
                    break;
                case 1:
                    p = document.createElement('p');
                    p.innerHTML = `${data.name}, ${data.sys.country}`;
                    div.appendChild(p);
                    break;
                case 2:
                    p = document.createElement('p');
                    p.innerHTML = `${Math.round(data.main.temp)}°c`;
                    div.appendChild(p);
                    break;
                case 3:
                    p = document.createElement('p');
                    p.innerHTML = `Feels like: ${Math.round(data.main.feels_like)}°c`;
                    div.appendChild(p);
                    break;
                case 4:
                    p = document.createElement('p');
                    if (data.clouds.all < 1) {
                        p.innerHTML = `Clear sky`;
                    } else if (data.clouds.all >= 1 && data.clouds.all < 30) {
                        p.innerHTML = `Mostly clear`;
                    } else if (data.clouds.all >= 31 && data.clouds.all < 50) {
                        p.innerHTML = `Partly cloudy`;
                    } else if (data.clouds.all >= 51 && data.clouds.all < 80) {
                        p.innerHTML = `Mostly cloudy`;
                    } else if (data.clouds.all >= 81) {
                        p.innerHTML = `Overcast`;
                    }
                    div.appendChild(p);
                    break;
                case 5:
                    p = document.createElement('p');
                    p.innerHTML = `Humidity: ${data.main.humidity}%`;
                    div.appendChild(p);
                    break;
                case 6:
                    p = document.createElement('p');
                    p.innerHTML = `Wind speed: ${data.wind.speed}m/s`;
                    div.appendChild(p);
                    break;
                default:
                    break;
            }
        }
    }
}