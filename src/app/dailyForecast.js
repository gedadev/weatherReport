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
        super.clearContainer();
        const dailyInfo = this.reduceData(data);
        for (let i = 0; i < Object.entries(dailyInfo).length; i++) {
            const card = document.createElement('div');
            card.classList.add('daily-card');
            
            const date = document.createElement('div');
            date.classList.add('daily-date');
            date.textContent = dailyInfo.date[i];
            card.appendChild(date);
            
            const icon = document.createElement('img');
            icon.classList.add('daily-icon');
            icon.src = `https://openweathermap.org/img/wn/${dailyInfo.icon[i]}@2x.png`;
            card.appendChild(icon);
            
            const temp = document.createElement('div');
            temp.classList.add('daily-temp');
            const max = document.createElement('div');
            max.classList.add('max');
            max.textContent = `${Math.round(dailyInfo.maxTemp[i])}°`;
            temp.appendChild(max);
            const min = document.createElement('div');
            min.classList.add('min');
            min.textContent = `${Math.round(dailyInfo.minTemp[i])}°`;
            temp.appendChild(min);
            card.appendChild(temp);

            const forecast = document.createElement('div');
            forecast.classList.add('daily-forecast');
            forecast.textContent = dailyInfo.forecast[i];
            card.appendChild(forecast);

            container.appendChild(card);
        }
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