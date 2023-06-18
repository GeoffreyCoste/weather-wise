export interface CityWeatherDataInterface {
    cityName: string,
    country: string,
    timezone: string,
    current: CurrentDataInterface,
    today: TodayDataInterface,
    hourly: HourlyDataInterface[],
    weekly: WeeklyDataInterface[],
  }
  
  export interface TodayDataInterface {
    tempMax: number,
    tempMin: number,
    sunrise: string,
    sunset: string,
    date: string,
  }
  
  export interface CurrentDataInterface {
    temp: number, 
    windSpeed: number, 
    weatherCode: number, 
    isDay: boolean, 
    time: string,
  }
  
  export interface HourlyDataInterface {
    time: string,
    temp: number,
    weatherCode: number
  }
  
  export interface WeeklyDataInterface {
    time: string,
    tempMax: number,
    tempMin: number,
    weatherCode: number
  }