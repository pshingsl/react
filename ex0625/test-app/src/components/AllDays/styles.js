import styled from "styled-components"

import { Container } from "../../Containers";

export const AllDaysWrapper = styled(Container)`
  border-radius: 25px;
  padding: 30px;
  min-height: 200px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  gap: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease
`
export const DayWrapper = styled.div`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  transition: all 0.3s ease;
`
export const TopPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
    flex: 1;
    h2 {
      font-weight: 600;
      font-size: 20px;
      line-height: 1;
      color: white;
      margin: 0;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
    h3 {
      font-weight: 400;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.8);
      margin: 0;
    }
  }
  img {
    width: 50px;
    height: 50px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
    transition: transform 0.3s ease;
  }
`
export const BottomPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding-top: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  color:white;
  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 1;
    color: white;
    margin: 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  h3 {
    font-weight: 500;
    font-size: 20px;
    line-height: 1;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
  }
`;