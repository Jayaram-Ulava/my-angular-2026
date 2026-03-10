import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {

  weatherdata:any;
  timedisply:string = '';

  constructor(private wetherservice:WeatherService){
    this.getweather();
  }

  getweather() {

    this.wetherservice.getweathercard().subscribe((wedata:any)=>{
      
      console.log(wedata);
      this.weatherdata = wedata;

      let temp = this.weatherdata.current_weather.temperature;

      if(temp < 20){
        this.timedisply = "🌅 Morning Time";
      }
      else if(temp >= 20 && temp < 30){
        this.timedisply = "☀️ Day Time";
      }
      else if(temp >= 30 && temp < 35){
        this.timedisply = "🌇 Evening Time";
      }
      else{
        this.timedisply = "🌙 Night Time";
      }

    })

  }

}