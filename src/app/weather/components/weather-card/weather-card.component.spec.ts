import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCardComponent } from './weather-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { WeatherDetailsMockComponent } from '../../mocks/weather-details-mock';
import { City } from '../../models/City.model';
import { Weather } from '../../models/Weather.model';

describe('WeatherCardComponent', () => {
  let component: WeatherCardComponent;
  let fixture: ComponentFixture<WeatherCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherCardComponent,
        WeatherDetailsMockComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the weather information that passed to it', () => {

    const city = new City("Amsterdam", 2759794, "description for the city", null, null, new Weather("icon"));
    component.city = city;
    fixture.detectChanges();

    const compiledComponent = fixture.debugElement.nativeElement;

    expect(compiledComponent.querySelector('.card-img').src).toContain(city.name.toLocaleLowerCase());
    expect(compiledComponent.querySelector('.weather-icon').src).toContain(city.weather.icon);
    expect(compiledComponent.querySelector('.card-title').innerText).toContain(city.name);
    expect(compiledComponent.querySelector('.card-text').innerText).toContain(city.description);

  });

  it('the user can click on the weather card and call the associated method', () => {

    const city = new City("Amsterdam", 2759794, "description for the city", null, null, new Weather("icon"));
    component.city = city;
    fixture.detectChanges();

    spyOn(component, 'goToCityPage');
    
    const compiledComponent = fixture.debugElement.nativeElement;
    compiledComponent.querySelector('.card').click();
    fixture.detectChanges();

    //take spyon no the actual function
    expect(component.goToCityPage).toHaveBeenCalled();

  });
});
