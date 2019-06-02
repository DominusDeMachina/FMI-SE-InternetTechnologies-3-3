import { Component, OnInit, Input } from "@angular/core";
import { ForecastUnit } from "../../models/Weather";

@Component({
  selector: "app-weather-item",
  templateUrl: "./weather-item.component.html",
  styleUrls: ["./weather-item.component.css"]
})
export class WeatherItemComponent implements OnInit {
  math = Math;
  number = Number;
  @Input() forecast: ForecastUnit;
  iconUrl: string;
  month: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  constructor() {}

  ngOnInit() {
    this.iconUrl = `http://openweathermap.org/img/w/${
      this.forecast.weather[0].icon
    }.png`;
  }
}
