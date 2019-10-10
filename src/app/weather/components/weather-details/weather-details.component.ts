import { Component, OnInit, Input } from '@angular/core';
import { Wind } from '../../models/Wind.model';
import { Temperature } from '../../models/Temperature.model';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  constructor() { }

  @Input()
  public wind: Wind;
  
  @Input()
  public temperature: Temperature;

  ngOnInit() {
  }

}
