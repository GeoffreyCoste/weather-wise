'use client'

import React from "react";
import moment from "moment-timezone";
/* import { usePathname } from "next/navigation"; */
import Image from "next/image";
import { WeeklyDataInterface } from "@/app/utils/interfaces/data.interface";
import { WeeklyWeatherInterface } from '@/app/utils/interfaces/weather.interface'
import { useTheme } from "@/app/utils/hooks/useTheme";

export default function WeeklyWeather({timezone, weekly, dictionary}: WeeklyWeatherInterface) {
  const { theme } = useTheme();

  /* const [currentLocale, setCurrentLocale] = useState('fr'); */
  /* const pathname = usePathname();
  const segments = pathname.split('/');
  const locale = '"' + segments[1] + '"';
  const m = moment(weekly[0].time).locale(locale);
  console.log(m.day()); */
  /* const handleCurrentLocale = () => {
    const segments = pathname.split('/');
    const locale = '"' + segments[1] + '"';
    setCurrentLocale(locale);
  } */

  /* useEffect(() => { */
    /* const segments = pathname.split('/');
    const locale = '"' + segments[1] + '"';
    moment.locale(locale);
    console.log(moment.locale());
    console.log(moment(weekly[0].time).format('dddd')) */
    /* handleCurrentLocale();
    moment.locale(currentLocale);
    console.log(moment.locale());
    console.log(moment(weekly[0].time).format('DDDD')) */
    /* console.log(locale);
    
  }); */


  /* console.log(currentLocale);

  console.log('date: ', new Date(weekly[1].time).getTime()); */
  return (
    <div id="weekly-weather" className={`w-full md:w-1/2 ${theme === 'light' ? 'bg-blue-50/50 text-blue-700' : 'bg-blue-950 text-blue-300'} mb-4 px-4 pt-6 pb-8 rounded-lg`}>
      <h3 className="text-lg font-bold mb-4">
        {dictionary.city.weekly.title.h3} <span className="font-normal">{dictionary.city.weekly.title.span}</span>
      </h3>

      <div className="w-full flex flex-nowrap md:flex-wrap justify-between overflow-x-scroll md:overflow-x-auto snap-x snap-mandatory">
        {weekly.length > 0 &&
          weekly.map((w: WeeklyDataInterface, index: number) => {
            /* if (index == 0) {
              return;
            } */
            let code = w.weatherCode;
            let weatherDescription = dictionary.city.codes[code];

            return (
            <div className={`w-36 md:w-full flex ${theme === 'light' ? 'bg-white text-blue-700' : 'bg-blue-700 text-white'} mr-2 md:mr-0 md:mb-4 p-2 md:p-4 rounded-lg snap-start`} key={`${index}-53048a96-2343-4062-b420-fc1c8731236f`}>
              <div className="w-36 md:w-full flex flex-col md:flex-row">
                <div className="basis-full md:basis-1/2 text-center md:text-start">
                  <div>
                    <h3 className="text-sm font-black">
                      {index === 0 ? dictionary.city.weekly.content.today : index === 1 ? dictionary.city.weekly.content.tomorrow : moment(w.time).format('dddd')}
                      
                      {/* {moment(weather.time).format('dddd')} */}
                    </h3>

                    <h4 className="text-xs">
                      {moment(w.time).format('LL')}
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

                <div className="basis-full md:basis-1/2 flex flex-wrap md:flex-nowrap">
                  <div className="basis-full md:basis-1/2">
                    <div>
                      {/* <Image
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt="Weather Icon"
                        layout="fill"
                      /> */}
                    </div>
                  </div>
                  <div className="basis-full md:basis-1/2 flex flex-col text-center md:text-start">
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
    </div>
  );
}