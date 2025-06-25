import React from 'react'
import { HeaderWrapper, Logo, LogoIcon, LogoText } from './style'
import CitySelect from '../Header/CitySelect/CitySelect'


export const Header = () => {
  return (
 
      <HeaderWrapper as = "header">
        <Logo>
          <LogoIcon>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor" />
              <path d="M19 15L19.74 18.26L23 19L19.74 19.74L19 23L18.26 19.74L15 19L18.26 18.26L19 15Z" fill="currentColor" />
              <path d="M5 6L5.37 7.63L7 8L5.37 8.37L5 10L4.63 8.37L3 8L4.63 7.63L5 6Z" fill="currentColor" />
            </svg>
          </LogoIcon>
          <LogoText>
            <h1>Weather</h1>
            <span>Forecast</span>
          </LogoText>
        </Logo>
        {/* 이 부분에 셀렉트 박스 */}
        <CitySelect/>
      </HeaderWrapper>

  )
}

export default Header