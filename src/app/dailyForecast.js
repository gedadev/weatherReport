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
        this.displayData(response.list, this.container);
    }

    displayData(data, container) {
        const dailyInfo = this.reduceData(data);
        console.log(dailyInfo);
    }
    
    reduceData(data) {
        let fiveDays = [];
        let date = [];
        let icon = [];
        let maxTemp = Array(5).fill(-100);
        let minTemp = Array(5).fill(100);
        let forecast = [];
        
        while (data[0]) {
            fiveDays.push(data.splice(0,8));
        }

        fiveDays.forEach((day, i) => {
            date.push(super.convertTimestamp(day[1].dt, true));
            icon.push(day[1].weather[0].icon);
            day.forEach((element) => {
                if (element.main.temp > maxTemp[i]) {
                    maxTemp[i] = element.main.temp;
                }
                if (element.main.temp < minTemp[i]) {
                    minTemp[i] = element.main.temp;
                }
            });
            forecast.push(day[1].weather[0].description);
        });

        return {date:date, icon: icon, maxTemp: maxTemp, minTemp: minTemp, forecast: forecast};
    }
}