import styled from 'styled-components'
import { Container } from '../../Containers';

export const HeaderWrapper = styled(Container)`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  margin-top:20px;
  z-index: 7;
`;

export const Logo = styled.div`
display: flex;
align-items: center;
`;

export const LogoIcon = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50px;
height: 50px;
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
border-radius: 12px;
color: white;
box-shadow: 0 4px 15px rgba(102, 106, 234, 0.4);
`;

export const LogoText = styled.div`
display: flex;
flex-direction: column;

h1 {
  fons-weight: 700px
  font-size: 28px;
  line-height: 1;
  margin: 0;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

span {
  fons-weight: 300px
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 1px;
  text-transform: uppercase;
}
`;


export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  .react-select-container {
    width: 250px;
  }
  .react-select__control {
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    &:hover {
      border-color: rgba(255, 255, 255, 0.5);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }
    &.react-select__control--is-focused {
      border-color: #667EEA;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
    }
  }
  .react-select__placeholder {
    color: rgba(255, 255, 255, 0.7);
    font-weight: 400;
    font-size: 16px;
  }
  .react-select__value-container {
    padding: 8px 16px;
  }
  .react-select__single-value {
    color: white;
    font-weight: 500;
  }
  .react-select__input-container {
    color: white;
  }
  .react-select__menu {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }
  .react-select__option {
    color: #333;
    padding: 12px 16px;
    &:hover {
      background: rgba(102, 126, 234, 0.1);
    }
    &.react-select__option--is-focused {
      background: rgba(102, 126, 234, 0.2);
    }
  }
`;