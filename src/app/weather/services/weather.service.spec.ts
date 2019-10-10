import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { WeatherService } from './weather.service';
import { environment } from "../../../environments/environment"
import { cityForecastResponseMock, citiesResponseMock } from '../../../assets/data-mocks';
import { CityForecastAdapter } from '../models/CityForecast.model';
import { CityAdapter } from '../models/City.model';
import cities from "../data/cities"

describe('WeatherService', () => {

    let service: WeatherService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                WeatherService,
                CityForecastAdapter,
                CityAdapter
            ]
        })
        service = TestBed.get(WeatherService);
        httpTestingController = TestBed.get(HttpTestingController);
    }

    );

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('getWeather() should return list of cities that given in the paramters', () => {
        const citiesId = [2643743, 2759794];
        service.getWeather(citiesId).subscribe((citiesWeather) => {
            expect(citiesWeather.length).toEqual(2);
            citiesWeather.forEach((item, index) => {
                expect(citiesResponseMock.list[index].id).toEqual(item.id);
                expect(citiesResponseMock.list[index].name).toEqual(item.name);
                expect(citiesResponseMock.list[index].weather[0].icon).toEqual(item.weather.icon);
                expect(citiesResponseMock.list[index].wind.speed).toEqual(item.wind.speed);
                expect(citiesResponseMock.list[index].main.temp).toEqual(item.temperature.degree);
                expect(cities[item.id].description).toEqual(item.description);
            })
        });

        const req = httpTestingController.expectOne(
            `${environment.apiUrl}/group?id=${citiesId.toString()}&units=metric&appid=${environment.openWeatherApiKey}`
        );
        req.flush(citiesResponseMock);
    });

    it('getCityForecastById() should return the city weather data and the forecast for next hours', () => {
        //the requested cityForecast
        const cityId = 2643743;

        service.getCityForecastById(cityId).subscribe((forecastResponse) => {
            //assertion for city data
            expect(citiesResponseMock.list[0].id).toEqual(forecastResponse.id);
            expect(citiesResponseMock.list[0].name).toEqual(forecastResponse.name);
            expect(citiesResponseMock.list[0].weather[0].icon).toEqual(forecastResponse.weather.icon);
            expect(citiesResponseMock.list[0].wind.speed).toEqual(forecastResponse.wind.speed);
            expect(citiesResponseMock.list[0].main.temp).toEqual(forecastResponse.temperature.degree);
            expect(cities[forecastResponse.id].description).toEqual(forecastResponse.description);

            //assertion for city forecast data
            expect(forecastResponse.forecastList.length).toEqual(3);
            forecastResponse.forecastList.forEach((item, index) => {
                expect(cityForecastResponseMock.list[index].weather[0].icon).toEqual(item.weather.icon);
                expect(cityForecastResponseMock.list[index].wind.speed).toEqual(item.wind.speed);
                expect(cityForecastResponseMock.list[index].main.temp).toEqual(item.temperature.degree);
            })

        });

        // the request for getting city data
        const cityWeatherRequest = httpTestingController.expectOne(
            `${environment.apiUrl}/group?id=${cityId}&units=metric&appid=${environment.openWeatherApiKey}`
        );
        cityWeatherRequest.flush(citiesResponseMock);

        // the request for getting city forecast data
        const cityForecastRequest = httpTestingController.expectOne(
            `${environment.apiUrl}/forecast?id=${cityId}&units=metric&appid=${environment.openWeatherApiKey}`
        );
        cityForecastRequest.flush(cityForecastResponseMock);

    });
});
