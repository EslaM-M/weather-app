import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  constructor(private weatherService: WeatherService, private activatedRoute: ActivatedRoute, private router: Router) { }

  public city = null;
  ngOnInit() {
    this.weatherService.getCityForecastById(this.activatedRoute.snapshot.params.id).subscribe((response) => {
      this.city = response;
    }, (error) => {
      this.router.navigate([''])
    })
  }

}
