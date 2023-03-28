import { Forecast } from './getForecast';

export class DailyForecast extends Forecast {
    constructor(city, container, units, lat, lon) {
        super(city, container, units, lat, lon);
    }


}