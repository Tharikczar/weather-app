import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {
  private apikeys = "be89c79876a7c7f9385a2bdd87858796";

  constructor(private http: HttpClient) { }

  getWeatherReport(location: string): Observable<any> {
    
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${this.apikeys}`);
  }

  getWeatherForcastReport(lat:any,lon:any){
    
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${this.apikeys}`);

  }
}
