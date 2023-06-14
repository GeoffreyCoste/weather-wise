import React from "react";
import moment from "moment-timezone";
import Image from "next/image";
import { WeeklyInterface } from "@/app/city/[slug]/page";
import { weatherCodes } from "@/app/city/[slug]/page";
import { ObjectType } from "typescript";

interface WeeklyWeather {
  timezone: string,
  weekly: WeeklyInterface[],
}

export default function WeeklyWeather({timezone, weekly}: WeeklyWeather) {
  return (
    <div id="weekly-weather" className="w-full flex flex-wrap bg-blue-50/50 text-blue-700 mb-4 px-4 pt-6 pb-8 rounded-lg">
      <h3 className="text-lg font-bold mb-4">
        Weekly <span className="font-normal">Weather</span>
      </h3>

      {weekly.length > 0 &&
        weekly.map((w: WeeklyInterface, index: number) => {
          /* if (index == 0) {
            return;
          } */
          let code = w.weatherCode;
          let weatherDescription = weatherCodes[code];

          return (
            <div className="w-full basis-full" key={`${index}-53048a96-2343-4062-b420-fc1c8731236f`}>
              <div className="flex bg-white text-blue-700 mb-4 p-4 rounded-lg">
                <div className="basis-1/2">
                  <div>
                    <h3 className="text-sm font-black">
                      {index === 0 ? 'Today' : index === 1 ? 'Tomorrow' : moment(w.time).format('dddd')}
                      
                      {/* {moment(weather.time).format('dddd')} */}
                    </h3>

                    <h4 className="text-xs">
                      {moment(w.time).format('MMMM D')}
                    </h4>
                  </div>

                  {/* <div className="weekly__sun-times">
                    <div>
                      <span>Sunrise</span>
                      <span>
                        {moment.unix(weather.sunrise).tz(timezone).format("LT")}
                      </span>
                    </div>

                    <div>
                      <span>Sunset</span>
                      <span>
                        {moment.unix(weather.sunset).tz(timezone).format("LT")}
                      </span>
                    </div>
                  </div> */}
                </div>

                <div className="basis-1/2 w-full flex">
                  <div className="basis-1/2">
                    <div>
                      {/* <Image
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt="Weather Icon"
                        layout="fill"
                      /> */}
                    </div>
                  </div>
                  <div className="basis-1/2">
                    <h5 className="text-sm font-semibold first-letter:uppercase">{weatherDescription}</h5>
                    <div className="text-xs">
                      <span>&#9650; {w.tempMax.toFixed(0)}&deg;C</span>
                      <span>&#9660; {w.tempMin.toFixed(0)}&deg;C</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}