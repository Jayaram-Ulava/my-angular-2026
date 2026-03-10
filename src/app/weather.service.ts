import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpweather:HttpClient) { }

  getweathercard() {
    return this.httpweather.get('https://api.open-meteo.com/v1/forecast?latitude=17.385044&longitude=78.486671&current_weather=true');
  }
}
