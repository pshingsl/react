import React from 'react'
import Header from '../components/Header/Header'
import { HomeWrapper, BackgroundGradient, MainContent,
   WeatherSection, InfoSection, ForcastSection } from './style'
import ThisDay from '../components/ThisDay/ThisDay'
import ThisDayInfo from '../components/Header/ThisDayInfo/ThisDayInfo'
import AllDays from '../components/AllDays/AllDays'
// Home 화살표 함수 선언
// 컴포넌트 호출 시 <div>Home</div> 보여줌

const Home = () => {
  return (
    <HomeWrapper>
      <BackgroundGradient>
        <Header />
        <MainContent>
          <WeatherSection>
              <ThisDay/>
          </WeatherSection>
       <InfoSection>
        <ThisDayInfo/>
       </InfoSection> 
        
        </MainContent>
        <ForcastSection>
          <AllDays/>
        </ForcastSection>
      </BackgroundGradient>
    </HomeWrapper>
  )
}

export default Home