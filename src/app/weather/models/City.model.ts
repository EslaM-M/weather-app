import { Wind } from './Wind.model';
import { Weather } from './Weather.model';
import { Temperature } from './Temperature.model';
import { Injectable } from '@angular/core';
import { Adapter } from '../adapter';
import cities from "../data/cities";
export class City {
    name: string;
    id: number;
    description: string;
    wind: Wind;
    temperature: Temperature;
    weather: Weather;
    constructor(name: string, id: number, description: string, wind: Wind, temperature: Temperature, weather: Weather) {
        this.name = name;
        this.id = id;
        this.description = description;
        this.wind = wind;
        this.temperature = temperature;
        this.weather = weather;
    }
}


@Injectable()
export class CityAdapter implements Adapter<City> {
    adapt(item: any): City {
        const city = new City(
            item.name,
            item.id,
            cities[item.id].description,
            new Wind(item.wind.speed, 'M/S'),
            new Temperature(item.main.temp, 'C'),
            new Weather(item.weather[0].icon),
        );  
        return city;
    }
}