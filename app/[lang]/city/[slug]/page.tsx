import { notFound } from 'next/navigation';
import { getDictionary } from '@/app/utils/helpers/getDictionary';
import { Locale } from "@/i18n-config";
import TodayWeather from '@/app/components/WeatherDisplay/TodayWeather';
import HourlyWeather from '@/app/components/WeatherDisplay/HourlyWeather';
import WeeklyWeather from '@/app/components/WeatherDisplay/WeeklyWeather';
import _cities from '../../../../lib/city.list.json';
import { 
  CityWeatherDataInterface,
  TodayDataInterface,
  CurrentDataInterface,
  HourlyDataInterface,
  WeeklyDataInterface 
} from '../../../utils/interfaces/data.interface';
import { CityInterface } from '@/app/components/Searchbar';

const cities = _cities as CityInterface[];

export const formatApiData = async (slug: string) => {
  const city: any = getCityById(slug);

  // timezonedb API call
  const resTimezoneDb = await fetch(
    `http://api.timezonedb.com/v2.1/get-time-zone?key=${process.env.TZ_API_KEY}&format=json&by=position&lat=${city.coord.lat}&lng=${city.coord.lon}`
  );

  const dataTimezoneDb = await resTimezoneDb.json();

  const timezone = dataTimezoneDb.zoneName;

  // Open-Meteo API call
  const resOpenMeteo = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${city.coord.lat}&longitude=${city.coord.lon}&timezone=${timezone}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,weathercode&hourly=temperature_2m,apparent_temperature,windspeed_10m,precipitation,precipitation_probability,is_day,weathercode`
  );

  const dataOpenMeteo = await resOpenMeteo.json();

  if (!dataTimezoneDb || !dataOpenMeteo ) {
    notFound();
  }

  console.log('OpenMeteo: ', dataOpenMeteo);

  const name: string = city.name;
  const country: string = city.country;
  const current: CurrentDataInterface = {
    temp: dataOpenMeteo.current_weather.temperature,
    windSpeed: dataOpenMeteo.current_weather.windspeed,
    weatherCode: dataOpenMeteo.current_weather.weathercode,
    isDay: dataOpenMeteo.current_weather.is_day === 1 ? true: false,
    time: dataOpenMeteo.current_weather.time,
  };
  const today: TodayDataInterface = {
    tempMax: dataOpenMeteo.daily.temperature_2m_max[0],
    tempMin: dataOpenMeteo.daily.temperature_2m_min[0],
    sunrise: dataOpenMeteo.daily.sunrise[0],
    sunset: dataOpenMeteo.daily.sunset[0],
    date: dataOpenMeteo.daily.time,
  };
  
  const hourly: HourlyDataInterface[] = dataOpenMeteo.hourly.time.map((t: string, index: number) => {
    return {
      time: t,
      temp: dataOpenMeteo.hourly.temperature_2m[index],
      weatherCode: dataOpenMeteo.hourly.weathercode[index],
    }
  });

  const weekly: WeeklyDataInterface[] = dataOpenMeteo.daily.time.map((t: string, index: number) => {
    return {
      time: t,
      tempMax: dataOpenMeteo.daily.temperature_2m_max[index],
      tempMin: dataOpenMeteo.daily.temperature_2m_min[index],
      weatherCode: dataOpenMeteo.hourly.weathercode[index],
    }
  });

  /* console.log('today: ', todayWeather); */

  return {
    cityName: name,
    country: country,
    timezone: timezone,
    current: current,
    today: today,
    hourly: hourly,
    weekly: weekly,
  } 

};

const getCityById = (slug: string) => {
  const splitSlug = slug.split("-");
  const cityId = splitSlug[splitSlug.length - 1]

  if (!cityId) {
      return notFound();
  }

  const city = cities.find((city) => city.id.toString() === cityId);

  if (city) {
      return city;
  } else {
      return notFound();
  }
};

export default async function City({
  params: {lang, slug}
}: {
  params: { lang: Locale, slug: string }
}) {

  const dictionary = await getDictionary(lang);
  console.log(slug);
  const cityWeather: CityWeatherDataInterface = await formatApiData(slug);
  // console.log('cityProps: ', cityProps)
  const { cityName, country, timezone, current, today, hourly, weekly } = cityWeather;

  return (
    <>
      <section className="w-full flex justify-center items-center">
        <TodayWeather 
          cityName={cityName}
          country={country}
          timezone={timezone}
          current={current}
          today={today}
          dictionary={dictionary}
        />
      </section>
      <section className="w-full flex justify-center items-center">
        <HourlyWeather 
          timezone={timezone}
          hourly={hourly}
          dictionary={dictionary}
        />
      </section>
      <section className="w-full flex justify-center items-center">
        <WeeklyWeather 
          timezone={timezone}
          weekly={weekly}
          dictionary={dictionary}
        />
      </section>
    </>
  )
};














/* const cities = _cities as CityInterface[];

export async function formatApiData(slug: string) {
  const city: any = getCityById(slug);

  // timezonedb API call
  const resTimezoneDb = await fetch(
    `http://api.timezonedb.com/v2.1/get-time-zone?key=${process.env.TZ_API_KEY}&format=json&by=position&lat=${city.coord.lat}&lng=${city.coord.lon}`
  );

  // OpenWeather API - Professional collections (Free) - call
  const resOpenWeather = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?id=${city.id}&appid=${process.env.OW_API_KEY}&exclude=minutely&units=metric`
  );

  // OpenWeather API - 5 day / 3 hour forecast data - call
  const resOpenWeatherHourForecast = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=${process.env.OW_API_KEY}&exclude=minutely&units=metric`
  );

  


  const dataTimezoneDb = await resTimezoneDb.json();
  const dataOpenWeather = await resOpenWeather.json();
  const dataOpenWeatherHourForecast = await resOpenWeatherHourForecast.json();
  

  const timezone = dataTimezoneDb.zoneName;

  // Open-Meteo API call
  const resOpenMeteo = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${city.coord.lat}&longitude=${city.coord.lon}&timezone=${timezone}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&hourly=temperature_2m,apparent_temperature,windspeed_10m,precipitation,precipitation_probability,is_day,weathercode`
  );

  const dataOpenMeteo = await resOpenMeteo.json();

  if (!dataTimezoneDb || !dataOpenWeather || !dataOpenWeatherHourForecast ) {
    notFound();
  }

  console.log('OpenMeteo: ', dataOpenMeteo);
  
  

  const weeklyWeather = dataOpenWeather.list;
  const hourlyFullForecastWeather = dataOpenWeatherHourForecast.list; // includes now forecast
  const hourlyWeather = [,...hourlyFullForecastWeather]; // hourly forecast excluding now
  const todayWeather = {...dataOpenWeather.city, ...hourlyFullForecastWeather[0], ...weeklyWeather[0]};
  
  /* console.log('today: ', todayWeather); *

  return {
    city: city,
    timezone: timezone,
    todayWeather: todayWeather,
    hourlyWeather: hourlyWeather,
    weeklyWeather: weeklyWeather,
  } 

};

const getCityById = (slug: string) => {
  const splitSlug = slug.split("-");
  const cityId = splitSlug[splitSlug.length - 1]

  if (!cityId) {
      return notFound();
  }

  const city = cities.find((city) => city.id.toString() === cityId);

  if (city) {
      return city;
  } else {
      return notFound();
  }
};


export default function City({
  params
}: {
  params: { slug: string }
}) {

  const cityProps = use(formatApiData(params.slug));
  // console.log('cityProps: ', cityProps)
  const { city, timezone, todayWeather, hourlyWeather, weeklyWeather } = cityProps;

  return (
    <>
      <section className="w-full">
        <TodayWeather 
          city={city}
          timezone={timezone}
          weather={todayWeather}
        />
      </section>
      <section className="w-full">
        <HourlyWeather 
          hourlyWeather={hourlyWeather}
          timezone={timezone}
        />
      </section>
      <section className="w-full">
        <WeeklyWeather 
          weeklyWeather={weeklyWeather}
          timezone={timezone}
        />
      </section>
    </>
  )
}; */














/* async function getData(id : string) {
  const res = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${process.env.API_KEY}&exclude=minutely&units=metric`
  );

  const data = await res.json(); 

  return data; // TODO: return { city, weather, timezone, currentWeather, hourlyWeather, weeklyWeather }
}

export default function City({ 
  params 
}: {
  params: { slug: string };
}) {
    console.log(params);
    const citySlug = params.slug; // e.g. get 'cityName-cityId' string from url
    const splitSlug = citySlug.split("-");
    const cityId = splitSlug[splitSlug.length - 1];
    const cityWeatherData = use(getData(cityId));
    console.log(cityWeatherData);

    const weeklyWeather = cityWeatherData.list;

    /* const utcOffsetSeconds = moment().utcOffset(cityWeatherData.city.timezone);
    console.log(utcOffsetSeconds); *

    const currentLocalDateTime = cityWeatherData.list[0].dt;
    const main = cityWeatherData.list[0].main;
    const timezoneOffset = new Date(currentLocalDateTime).getTimezoneOffset();
    console.log(timezoneOffset);
    /* const getZoneFromOffset = timezoneOffset => moment.tz.names().filter(tz => moment.tz(tz).format('Z') === timezoneOffset);
    console.log('zone: ', getZoneFromOffset(timezoneOffset)); */

    /* const timezone = moment().zone(timezoneOffset); */
    /* const zoneName = moment.tz(cityWeatherData.list[0].dt).zoneName(); *
    /* console.log('main: ', main); *
    console.log('HK: ', moment.unix(1686087529).tz('Asia/Hong_Kong').format("LT"));
    /* console.log(moment.tz()) *
    console.log(moment.tz.zonesForCountry('HK'));
    console.log(moment.tz.names());

  return (
    <section>
      {cityWeatherData.city.name}
      <TodayWeather 
        city={cityWeatherData.city} 
        weather={weeklyWeather[0]} 
        timezone={cityWeatherData.city.timezone} 
      />
    </section>
  )
} */