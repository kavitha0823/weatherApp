import { Component, OnInit } from '@angular/core';
import {WeatherDataService} from './services/weather-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WeatherDataService]
})
export class AppComponent implements OnInit{
  title = 'Weather App';
  cityList = ["Halifax","Montreal","Toronto","Vancouver","Victoria"];
  selectedCity ='Halifax';
  result:any;
  displayErrMsg = false;
  showLoader = true;

  /* Fetch weather data on dropdown change */
  selectedCityValue(val:any){
    this.selectedCity = val;
    this.fetchWeatherData();
  }
  constructor(private fetchData: WeatherDataService) { }
  ngOnInit(){
    this.fetchWeatherData();
  }
  
  /* Fetch Weather Data */
  fetchWeatherData(){
    this.showLoader = true;
    this.fetchData.getData(this.selectedCity).subscribe(data =>{
      if(data.data.length > 5){
        this.result = data.data.slice(0,5);
      } else {
        this.result = data.data;
      }
      this.displayErrMsg = false;
      this.showLoader = false;
    }, (error) => { 
      this.displayErrMsg = true;
      this.showLoader = false;
    }); 
  }
}
