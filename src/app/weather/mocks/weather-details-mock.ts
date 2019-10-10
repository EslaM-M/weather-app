import { Component, OnInit, Input } from '@angular/core';
import { Wind } from '../models/Wind.model';
import { Temperature } from '../models/Temperature.model';

@Component({
    selector: 'app-weather-details',
    template: '',
})
export class WeatherDetailsMockComponent implements OnInit {

    constructor() { }

    @Input()
    public wind: Wind;

    @Input()
    public temperature: Temperature;

    ngOnInit() {
    }

}
