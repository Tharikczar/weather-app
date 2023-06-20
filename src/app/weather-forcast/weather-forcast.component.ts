import { Component, OnInit } from '@angular/core';
import { WeatherserviceService } from '../service/weatherservice.service';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-weather-forcast',
  templateUrl: './weather-forcast.component.html',
  styleUrls: ['./weather-forcast.component.scss']
})
export class WeatherForcastComponent implements OnInit {
  weathercasting: any = 'madurai';
  lat:any = 9.9333;
  lon:any = 78.1167;
  todayweather: any;
  date: any;
  Sunrise:any;
  Sunset: any;
  weatherForcast: any;
  waetherArray:any =[];
  constructor(private weatherApi: WeatherserviceService) { }
  ngOnInit(): void {
    this.searchLocation()
  }

  searchLocation() {
    if(this.weathercasting){
      this.getDailyWeaterData();
    this.weatherHistory()
    }
    
  }
  getDailyWeaterData(){
    if (this.weathercasting) {
      this.weatherApi.getWeatherReport(this.weathercasting).subscribe((data: any) => {
        this.todayweather = data;
        console.log(this.todayweather)

// calculate local time from timeZone
        const d = new Date();
        const localTime = d.getTime();
        const localOffset = d.getTimezoneOffset() * 60000;

        const utc = localTime + localOffset;
        const offset = this.todayweather.timezone; 
        const location = utc + (1000 * offset);
        this.date = new DatePipe('en-US').transform(location,'MMM d, y, h:mm a');

        const sunrise =  this.todayweather.sys.sunrise * 1000;
        const sunset = this.todayweather.sys.sunset * 1000;
        this.Sunrise = new DatePipe('en-US').transform(sunrise,' h:mm a');
        this.Sunset = new DatePipe('en-US').transform(sunset,' h:mm a');
        console.log(this.Sunrise)

      })
    }
  }

  weatherHistory(){
    this.weatherApi.getWeatherForcastReport(this.lat,this.lon).subscribe((forcast:any)=>{
      this.weatherForcast = forcast['list'];
      
      this.weatherForcast.forEach((element: any) => {
        let data ={
          "day":element.dt_txt,
          "temp":element.main.temp,
          "icon":element.weather[0].icon,
        }
        this.waetherArray.push(data);
      });
      console.log(this.waetherArray)
    })
  }

  getWeatherIcon(icon: string) {
    return `https://openweathermap.org/img/w/${icon}.png`;
  }

}
