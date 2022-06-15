import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  constructor(private http: HttpClient) { }
  getData(city:any):Observable<any>{
    return this.http.get(environment.api+"forecast/daily?city="+city+"&key="+environment.apiKey);
  }
}
