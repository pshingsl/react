import React from 'react'
import { ThisDayInfoWrapper, ImgWrapper } from './styles'

// 4시 수업
import useWeather from '../../utils/useWeather.js'

const nameInfo = ["Temperature", "Pressure", "Humidity", "Wind"];

const imgInfo = [
  "./images/temperature.svg",
  "./images/pressure.svg",
  "./images/humidity.svg",
  "./images/wind.svg",
];

const ThisDayInfo = () => {
  const {data, isLoading} = useWeather("Seoul");

  const temp = `${Math.round(data?.main.temp || 0)}°C feels like ${Math.round(
    data?.main.feels_like || 0
  )}°C`;
  const pressureMetric = Math.round((data?.main.pressure || 0) / 1.333);
  const pressure = `${pressureMetric} mmHg  - ${pressureMetric < 748 ? "low" : pressureMetric > 770 ? "high" : "normal"
    }`;
  const humidity = `${data?.main.humidity} %`;
  const wind = `${Math.round((data?.wind.speed || 0) * 10)} mph`;
  const dataInfo = [temp, pressure, humidity, wind];

  return (
    <ThisDayInfoWrapper>
      <div>
        {imgInfo.map((img, index) => (
          <ImgWrapper key ={index}>
           <img src={img} />
          </ImgWrapper>
        ))}
      </div>
      <div>
          {
            nameInfo.map((info, index) => (
              <h2 key={index}>{info}</h2>
            ))
          }
      </div>
      <div>
        {dataInfo.map((info, index)=> (
          <p key = {index}>{info}</p>
        ))}
      </div>
       </ThisDayInfoWrapper>

  )
}
export default ThisDayInfo