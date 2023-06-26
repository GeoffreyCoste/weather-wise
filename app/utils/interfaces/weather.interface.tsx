import { 
    TodayDataInterface, 
    CurrentDataInterface, 
    HourlyDataInterface,
    WeeklyDataInterface
} from "./data.interface";
import { dictionaryInterface } from "./dictionary.interface";

export interface TodayWeatherInterface {
    cityName: string,
    country: string,
    timezone: string,
    current: CurrentDataInterface,
    today: TodayDataInterface,
    dictionary: dictionaryInterface
}

export interface HourlyWeatherInterface {
    timezone: string,
    hourly: HourlyDataInterface[],
    dictionary: dictionaryInterface
}

export interface WeeklyWeatherInterface {
    timezone: string,
    weekly: WeeklyDataInterface[],
    dictionary: dictionaryInterface
}