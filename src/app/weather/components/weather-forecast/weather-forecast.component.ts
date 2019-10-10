import { Component, OnInit, Input } from '@angular/core';
import { Forecast } from '../../models/Forecast.model';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {

  @Input()
  forecast: Forecast = null;
  constructor() { }

  ngOnInit() {
  }

}
