import openWeather from "./openWeather";
import { useQuery } from "@tanstack/react-query";

//주간으로 가져오는데이터
const getWeatherForecast = (city = "Seoul") =>
  openWeather.getThreeHourForecastByCityName({
    cityName: city,
    units: 'metric',
  })

 export const useWeatherForecast = (city = "Seoul") =>{
    const {data, ...rest} = useQuery({
      queryKey: ["weather-forecast", city],
      queryFn: () => getWeatherForecast(city)
    })
    console.log(data)
    return {
      ...rest,
      data,
    };
  }
  
  
