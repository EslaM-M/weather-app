import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ForecastComponent } from './pages/forecast/forecast.component';


const routes: Routes = [
  { path: 'forecast/:id', component: ForecastComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
