import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { WeatherRoutingModule } from './weather-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ForecastComponent } from './pages/forecast/forecast.component';
import { WeatherService } from './services/weather.service';
import { CityAdapter } from './models/City.model';
import { CityForecastAdapter } from './models/CityForecast.model';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';


@NgModule({
  declarations: [ HomeComponent, ForecastComponent, WeatherCardComponent, WeatherForecastComponent, WeatherDetailsComponent],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    HttpClientModule,
  ],
  providers:[
    WeatherService,
    CityAdapter,
    CityForecastAdapter
  ]
})
export class WeatherModule { }
