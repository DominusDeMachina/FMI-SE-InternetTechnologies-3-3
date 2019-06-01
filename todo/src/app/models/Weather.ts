class Coord {
  lat: number;
  lon: number;
}

class City {
  id: number;
  name: string;
  coord: Coord;
}

class FUMain {}

class FUWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

class Cloud {
  all: number;
}
class Wind {
  speed: number;
  deg: number;
}
class Sys {
  pod: string;
}

class ForecastUnit {
  dt: number;
  main: FUMain;
  weather: Array<FUWeather>;
  clouds: Cloud;
  wind: Wind;
  sys: Sys;
  dt_txt: string;
}

export class Weather {
  cod: string;
  cnt: number;
  list: ForecastUnit;
  city: City;
}
