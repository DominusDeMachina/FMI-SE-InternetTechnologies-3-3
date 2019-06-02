import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Weather } from "./../models/Weather";

const API_KEY: string = "036c73f3493eee9975f5c419ff833183";
const CITY = "Plovdiv,bg";
const BASE_URL: string = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&units=metric&appid=${API_KEY}`;
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(): Observable<Weather> {
    return this.http.get<Weather>(BASE_URL);
  }
}
