import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import citiesData from "../../data/cities";
import { City } from '../../models/City.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public citiesWeatherList: City[] = [];
  public cities = citiesData;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather([2759794, 2643743, 4717560, 5134295, 6356055]).subscribe((cities: City[]) => {
      this.citiesWeatherList = cities;
    })
  }
}
