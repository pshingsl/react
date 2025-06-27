import React from 'react'
import { BottomPart, DayWrapper, TopPart } from './styles'

const Day = ({day}) => {
  //console.log(day)

  const { date, forecast } = day;
  return (
    <DayWrapper>
      <TopPart>
        <div>
          <h2>wed</h2>
          <h3>06.25</h3>
        </div>
        <img src = "./images/weatherIcons/snow.svg" alt=""></img>
      </TopPart>
      <BottomPart>
        <h1>21°</h1>
        <h3>06.27</h3>
      </BottomPart>
    </DayWrapper>
  )
}

export default Day