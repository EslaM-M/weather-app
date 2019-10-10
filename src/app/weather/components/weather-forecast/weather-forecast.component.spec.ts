import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastComponent } from './weather-forecast.component';
import { RouterTestingModule } from '@angular/router/testing';
import { WeatherDetailsMockComponent } from '../../mocks/weather-details-mock';
import { Forecast } from '../../models/Forecast.model';
import { Weather } from '../../models/Weather.model';

describe('WeatherForecastComponent', () => {
  let component: WeatherForecastComponent;
  let fixture: ComponentFixture<WeatherForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherForecastComponent,
        WeatherDetailsMockComponent
      ],
      providers: [
        RouterTestingModule
      ],

      imports: [
        RouterTestingModule

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the forecast information that passed to it', () => {

    const forecast = new Forecast(new Date(1470492800000), null, null, new Weather("icon"));
    component.forecast = forecast;
    fixture.detectChanges();

    const compiledComponent = fixture.debugElement.nativeElement;

    expect(compiledComponent.querySelector('.weather-icon').src).toContain(forecast.weather.icon);
    expect(compiledComponent.querySelector('h5').innerText).toEqual("4:13 PM");
  
  });

});
