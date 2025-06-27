import React from 'react'
import Header from '../components/Header/Header'
import {HomeWrapper, BackgroundGradient, MainContent, WeatherSection, InfoSection, ForecastSection } from './styles'
import ThisDay from '../components/ThisDay/ThisDay'
import ThisDayInfo from '../components/ThisDayInfo/ThisDayInfo'
import AllDays from '../components/AllDays/AllDays'

const Home = () => {
  return (
    <HomeWrapper>
      <BackgroundGradient>
        <Header/>
        <MainContent>
          <WeatherSection>
            <ThisDay/>
          </WeatherSection>
          <InfoSection>
            <ThisDayInfo/>
          </InfoSection>
        </MainContent>
        <ForecastSection>
          <AllDays/>
        </ForecastSection>
      </BackgroundGradient>
    </HomeWrapper>  
  )
}

export default Home