import React from 'react'
import { AllDaysWrapper } from './styles';
import Day from './Day'

export const AllDays = () => {
  return (
    <>
    <AllDaysWrapper>
      <Day/>
      <Day/>
      <Day/>
      <Day/>
      <Day/>
      <Day/>
    </AllDaysWrapper>
    </>
  )
}

export default AllDays;
