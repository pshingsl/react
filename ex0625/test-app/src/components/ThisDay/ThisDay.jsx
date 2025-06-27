
import React, { useEffect, useState } from 'react'
import { ThisDayWrapper, Top, Bottom } from './styles';
import CurrentTime from './CurrentTime';
import useWeather from '../../utils/useWeather';


const ThisDay = () => {

  const { data, isLoading } = useWeather("Seoul");
  console.log(data)
  const temperature = Math.round(data?.main.temp || 0);

  // 15 아직 데이터값이 없어서 최초로 쓰는 값을 만듬
  const cityName = data?.name;

  // 아래 조건문에 이미지가 없을거 대비해 ApI에서 제공한 임의 주소로 함
  const weatherIcon = data?.weather[0].main;

  let imageSrc = "./images/weatherIcons/clear-sky.svg";

  if (weatherIcon === "clear") {
    imageSrc = "./images/weatherIcons/clear-sky.svg";
  } else if (weatherIcon === "clouds") {
    imageSrc = "./images/weatherIcons/few-clouds.svg";
  } else if (weatherIcon === "Atmosphere") {
    imageSrc = "./images/weatherIcons/mist.svg";
  } else if (weatherIcon === "Rain") {
    imageSrc = "./images/weatherIcons/rain.svg";
  } else if (weatherIcon === "Snow") {
    imageSrc = "./images/weatherIcons/snow.svg";
  } else if (weatherIcon === "ThunderStrorm") {
    imageSrc = "./images/weatherIcons/thunderstrorm.svg";
  }

  return (
    <ThisDayWrapper>
      {
        // isLoading: 데이터가 아직 안옴
        // 로딩속도 제어하려면 개발자 도구-> 네트워크 와이파이 -> 커스텀
        isLoading ?
          (
            "Loding..."
          ) :
          (<>
              <Top>
                <div>
                  <h2>{temperature}°</h2>
                  <h3>Now</h3>
                </div>
                <img src={imageSrc } alt="" />
              </Top>
              <Bottom>
                <CurrentTime />
                <div>
                  {cityName} - KR
                </div>
              </Bottom>
           
          </>
          )
      } </ThisDayWrapper>
    )
      }


      export default ThisDay;