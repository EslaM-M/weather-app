import { Component, OnInit, Input } from '@angular/core';
import { City } from '../../models/City.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {


  constructor(private router: Router) { }

  @Input()
  public city: City = null;

  ngOnInit() {
  }
  goToCityPage(city) {
    this.router.navigateByUrl(`forecast/${city.id}`);
  }

}
