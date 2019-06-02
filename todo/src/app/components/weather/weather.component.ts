import { Component, OnInit } from "@angular/core";

import { Weather } from "../../models/Weather";
import { WeatherService } from "../../services/weather.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"]
})
export class WeatherComponent implements OnInit {
  weather: Weather;

  constructor(private weatherService: WeatherService) {
    this.weather = {};
  }

  ngOnInit() {
    this.weatherService.getWeather().subscribe(w => {
      this.weather = w;
    });
  }
}
