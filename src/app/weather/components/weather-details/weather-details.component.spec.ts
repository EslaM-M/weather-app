import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetailsComponent } from './weather-details.component';
import { Temperature } from '../../models/Temperature.model';
import { Wind } from '../../models/Wind.model';

describe('WeatherDetailsComponent', () => {
  let component: WeatherDetailsComponent;
  let fixture: ComponentFixture<WeatherDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should show the temperature and the wind', () => {
    let temperature = new Temperature(100, 'C');
    let wind = new Wind(5.1, 'M/S')

    component.temperature = temperature;
    component.wind = wind;
    fixture.detectChanges();

    const compiledComponent = fixture.debugElement.nativeElement;

    expect(compiledComponent.querySelector('.wind').innerText).toContain(`${wind.speed}${wind.unit}`);
    expect(compiledComponent.querySelector('.temperature').innerText).toContain(temperature.unit);
    expect(compiledComponent.querySelector('.temperature').innerText).toContain(temperature.degree);

  });
});
