import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherForcastComponent } from './weather-forcast/weather-forcast.component';

const routes: Routes = [
  {
    path:"weather",component:WeatherForcastComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
