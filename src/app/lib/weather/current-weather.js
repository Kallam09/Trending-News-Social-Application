import fetch from "cross-fetch";


export default function getCurrentWeather(locationName){
  const params = new URLSearchParams([["q", locationName], ["appid", "730f0bf91b40d671b109f2e529d29165"], ["units", "metric"]]);
  return fetch(`https://api.openweathermap.org/data/2.5/weather?${params}`, {method:"GET"})
  .then((response)=>{
    return response.json();
  })
}