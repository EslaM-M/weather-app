import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from "../../../environments/environment"
import { CityAdapter, City } from '../models/City.model';
import { CityForecastAdapter, CityForecast } from '../models/CityForecast.model';
@Injectable()
export class WeatherService {

  constructor(private http: HttpClient, private cityAdapter: CityAdapter, private cityForecastAdapter: CityForecastAdapter) { }

  public getWeather(cities: number[]): Observable<City[]> {
    return this.http.get(`${environment.apiUrl}/group?id=${cities.toString()}&units=metric&appid=${environment.openWeatherApiKey}`).pipe(
      map((data: any) => {
        return data.list.map(city => this.cityAdapter.adapt(city))
      })
    )
  }

  public getCityForecastById(cityId: number): Observable<CityForecast> {
    return forkJoin([
      this.http.get(`${environment.apiUrl}/group?id=${cityId}&units=metric&appid=${environment.openWeatherApiKey}`).pipe(map((response: any) => {
        return response.list[0]
      })),
      this.http.get(`${environment.apiUrl}/forecast?id=${cityId}&units=metric&appid=${environment.openWeatherApiKey}`)
    ]).pipe(map(response => this.cityForecastAdapter.adapt(response)))
  }

}
