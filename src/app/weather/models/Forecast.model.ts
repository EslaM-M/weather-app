import { Weather } from './Weather.model';
import { Wind } from './Wind.model';
import { Temperature } from './Temperature.model';

export class Forecast {
    time: Date;
    wind: Wind;
    temperature: Temperature;
    weather: Weather;
    constructor(time: Date, wind: Wind, temperature: Temperature, weather: Weather) {
        this.time = time;
        this.wind = wind;
        this.temperature = temperature;
        this.weather = weather;
    }
}