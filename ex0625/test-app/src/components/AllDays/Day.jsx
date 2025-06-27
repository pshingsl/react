import React from 'react'
import { BottomPart, DayWrapper, TopPart } from './styles'
import getWeatherIcon from '../../utils/getWeatherIcon.js'

const Day = ({day}) => {
  //console.log(day)

  const { date, forecast } = day;
  //console.log(forecast)

  //최고 온도
  const temp = Math.max(...forecast.map((x) => (
    Math.round(x.main.temp_max)
  )))

  //최저 온도
  const lowestTemp = Math.min(...forecast.map((x) => (
     Math.round(x.main.temp_min)
  )))
  
  //요일
  const weekDays = new Date(date);
  const dayofWeek = weekDays.toDateString().substring(0,3);
  const dates = date.split("-").join(".").substring(5);

  //console.log(forecast[0].weather[0].main)
  getWeatherIcon("clear")
  console.log(getWeatherIcon("clear"))
  console.log("111")

  let imageSrc = `./images/weatherIcons/${getWeatherIcon(forecast[0].weather[0].main)}`;

  return (
    <DayWrapper>
      <TopPart>
        <div>
          <h2>{dayofWeek}</h2>
          <h3>{dates}</h3>
        </div>
        <img src={imageSrc} alt='날씨 아이콘'></img>
      </TopPart>
      <BottomPart>
        <h1>{temp}°</h1>
        <h3>{lowestTemp}</h3>
      </BottomPart>
    </DayWrapper>
  )
}

export default Day