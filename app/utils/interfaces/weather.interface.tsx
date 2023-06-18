import { 
    TodayDataInterface, 
    CurrentDataInterface, 
    HourlyDataInterface,
    WeeklyDataInterface
} from "./data.interface";

export interface TodayWeatherInterface {
    cityName: string,
    country: string,
    timezone: string,
    current: CurrentDataInterface,
    today: TodayDataInterface,
}

export interface HourlyWeatherInterface {
    timezone: string,
    hourly: HourlyDataInterface[],
}

export interface WeeklyWeatherInterface {
    timezone: string,
    weekly: WeeklyDataInterface[],
}