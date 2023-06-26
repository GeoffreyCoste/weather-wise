'use client'

import React from "react";
import Image from "next/image";
import moment from "moment";
import { HourlyDataInterface } from "@/app/utils/interfaces/data.interface";
import { useTheme } from "@/app/utils/hooks/useTheme";
import { HourlyWeatherInterface } from '../../utils/interfaces/weather.interface'


export default function HourlyWeather({ timezone, hourly, dictionary }: HourlyWeatherInterface) {
  const { theme } = useTheme();

  return (
    <div id="hourly-weather" className={`w-full md:w-1/2 ${theme === 'light' ? 'bg-blue-50/50 text-blue-700' : 'bg-blue-950 text-blue-300'}  mb-4 px-4 pt-6 pb-8 rounded-lg`}>
      <h3 className="text-lg font-bold mb-4">
        {dictionary.city.hourly.title.h3} <span className="font-normal">{dictionary.city.hourly.title.span}</span>
      </h3>
      <div className="w-full flex flex-nowrap justify-between md:pb-4 overflow-x-scroll md:overflow-x-auto snap-x snap-mandatory md:scrollbar-thin md:scrollbar-thumb-slate-500 md:hover:scrollbar-thumb-blue-700 md:scrollbar-thumb-rounded-lg md:scrollbar-track-slate-200 md:scrollbar-track-rounded-lg">
        {hourly.length > 0 &&
          hourly.map((h: HourlyDataInterface, index: number) => (
            <div className={`flex ${theme === 'light' ? 'bg-white text-blue-700' : 'bg-blue-700 text-white'} mr-2 p-2 rounded-lg snap-start`} key={`${index}-98f7229d-24fc-4ed3-ba91-2fe8b2d69b7ae`}>
              <div className="w-10 flex flex-col justify-between items-center">
                <span className={index === 0 ? "font-bold text-sm" : "text-sm"}>
                  {index == 0
                    ? dictionary.city.hourly.content.now
                    : moment(h.time).format("h a")}
                </span>

                {/* <Image
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                  width="100"
                  height="100"
                /> */}

                <span>{h.temp.toFixed(0)}&deg;C</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}