import React, { use } from 'react'

async function getData(id : string) {
  const res = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${process.env.API_KEY}`
  );

  const data = await res.json();

  return data;
}

export default function City({ 
  params 
}: {
  params: { slug: string };
}) {
    const citySlug = params.slug; // e.g. get 'cityName-cityId' string from url
    const splitSlug = citySlug.split("-");
    const cityId = splitSlug[splitSlug.length - 1];
    const cityWeatherData = use(getData(cityId));
    console.log(cityWeatherData);
  return (
    <section>
      {cityWeatherData.city.name}
    </section>
  )
}