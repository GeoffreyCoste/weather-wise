import React from 'react';
import Image from 'next/image';
import moment from 'moment-timezone';
import { weatherCodes, CurrentInterface, TodayInterface } from '@/app/city/[slug]/page';


interface TodayWeather {
  cityName: string,
  country: string,
  timezone: string,
  current: CurrentInterface,
  today: TodayInterface,
}

export default function TodayWeather({ cityName, country, timezone, current, today }: TodayWeather) {
    // console.log('city: ', city);
    /* let today = moment(1686236400).format('dddd');
    console.log('day: ', today); */

    let now = Date.now();
    let nowInTz = moment.tz(now, timezone);
    let dayInTz = moment(nowInTz).format('dddd');
    let dateInTz = moment(nowInTz).format('D');
    let monthInTz = moment(nowInTz).format('MMMM');
    let yearInTz = moment(nowInTz).format('YYYY');
    let timeInTz = moment(nowInTz).format('h:mm a');
    /* console.log('now: ', now);
    console.log('nowTz: ', nowInTz);
    console.log('dayTz: ', dayInTz);
    console.log('dateTz: ', dateInTz);
    console.log('monthTz: ', monthInTz);
    console.log('yearTz: ', yearInTz);
    console.log('timeTz: ', timeInTz); */

    let code = current.weatherCode;

    return (
        <div id="today-weather" className="w-full bg-gradient-to-tr from-blue-500 to-blue-700 text-white mb-4 px-4 pt-6 pb-8 rounded-lg">
          <div className="flex flex-wrap justify-between">
            <div className="basis-full flex justify-between">
                {/* <div>
                  <span className="font-bold">Currently / </span>
                  {monthInTz} {dateInTz} 
                </div>
                <div className="font-bold">
                  {timeInTz.toUpperCase()}
                </div> */}
                <h3 className="text-lg font-bold mb-4">
                  Currently <span className="font-normal">Weather</span>
                </h3>
            </div>
            <div className="basis-full flex rounded-lg">
              <div className="basis-1/2 px-4 rounded-r-lg">
                <div className="today__icon-wrapper">
                  <div>
                    {/* <Image
                      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                      alt="Weather Icon"
                      layout="fill"
                    /> */}
                  </div>
                </div>

                <h3 className="font-bold first-letter:uppercase">{weatherCodes[code]}</h3>
                <div className="text-xs">
                  <div>
                    <span>Sunrise: </span>
                    <span>
                      {moment(today.sunrise).format('h:mm a')}
                    </span>
                  </div>

                  <div>
                    <span>Sunset: </span>
                    <span>
                      {moment(today.sunset).format('h:mm a')}
                    </span>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 p-x4 rounded-lg">
                <h1 className=" text-2xl font-normal">
                  {cityName} ({country})
                </h1>

                <h2 className="text-6xl font-bold">
                  {current.temp.toFixed(0)}&deg;C
                </h2>

                <div className="text-xs">
                  <span>&#9650; {today.tempMax.toFixed(0)}&deg;C</span>
                  <span>&#9660; {today.tempMin.toFixed(0)}&deg;C</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
