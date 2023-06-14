import React from "react";
import Image from "next/image";
import moment from "moment";
import { HourlyInterface } from "@/app/city/[slug]/page";

interface HourlyWeather {
  timezone: string,
  hourly: HourlyInterface[],
}

export default function HourlyWeather({ timezone, hourly }: HourlyWeather) {
  return (
    <div id="hourly-weather" className="w-full bg-blue-50/50 text-blue-700 mb-4 px-4 pt-6 pb-8 rounded-lg">
      <h3 className="text-lg font-bold mb-4">
        Hourly <span className="font-normal">Weather</span>
      </h3>
      <div className="w-full flex flex-nowrap justify-between text-blue-700 md:pb-4 overflow-x-scroll md:overflow-x-auto snap-x snap-mandatory md:scrollbar-thin md:scrollbar-thumb-slate-500 md:hover:scrollbar-thumb-blue-700 md:scrollbar-thumb-rounded-lg md:scrollbar-track-slate-200 md:scrollbar-track-rounded-lg">
        {hourly.length > 0 &&
          hourly.map((h: HourlyInterface, index: number) => (
            <div className="flex bg-white mr-2 p-2 rounded-lg snap-start" key={`${index}-98f7229d-24fc-4ed3-ba91-2fe8b2d69b7ae`}>
              <div className="w-10 flex flex-col justify-between items-center">
                <span className={index === 0 ? "font-bold text-sm" : "text-sm"}>
                  {index == 0
                    ? "Now"
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