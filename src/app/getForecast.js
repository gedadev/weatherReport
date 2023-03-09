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
}