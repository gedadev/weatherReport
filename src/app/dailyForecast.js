import { Forecast } from './getForecast';

export class DailyForecast extends Forecast {
    constructor(city, container, units, lat, lon) {
        super(city, container, units, lat, lon);
    }

    async getDailyForecast() {
        await super.getCoordinates();
        const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&units=${this.units}&appid=5d0907efdadf22c907135983ee95c9d4`, {mode: 'cors'});
        const data = resp.json();
        return data;
    }

    async run() {
        const response = await this.getDailyForecast();
        console.log(response.list);
    }
}