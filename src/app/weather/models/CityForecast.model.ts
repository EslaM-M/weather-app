import { City } from './City.model';
import { Wind } from './Wind.model';
import { Temperature } from './Temperature.model';
import { Weather } from './Weather.model';
import { Forecast } from './Forecast.model';
import { Injectable } from '@angular/core';
import { Adapter } from '../adapter';
import cities from "../data/cities";

export class CityForecast extends City {
    time: Date;
    forecastList: Forecast[];
    constructor(name: string, id: number, description: string, wind: Wind, temperature: Temperature, weather: Weather, time: Date, forecastList: Forecast[]) {
        super(name, id, description, wind, temperature, weather);
        this.time = time;
        this.forecastList = forecastList;
    }
}

@Injectable()
export class CityForecastAdapter implements Adapter<City> {
    adapt(item: any): CityForecast {
        const cityJson = item[0];
        const forecastJson = item[1].list;
        const city = new CityForecast(
            cityJson.name,
            cityJson.id,
            cities[cityJson.id].description,
            new Wind(cityJson.wind.speed, 'M/S'),
            new Temperature(cityJson.main.temp, 'C'),
            new Weather(cityJson.weather[0].icon),
            new Date(),
            this.convertForecastJsonToList(forecastJson)
        );
        return city;
    }

    convertForecastJsonToList(forecastJson) {
        return forecastJson.filter((forecast: any) => {
            const date = new Date(forecast.dt * 1000);
            if (date.getDate() == new Date().getDate()) {
                return forecast
            }
        }).map((forecast) => {
            return new Forecast(
                new Date(forecast.dt * 1000),
                new Wind(forecast.wind.speed, 'M/S'),
                new Temperature(forecast.main.temp, 'C'),
                new Weather(forecast.weather[0].icon),
            )
        })
    }
}