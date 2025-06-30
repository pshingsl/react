import styled from "styled-components";
export const ThisDayInfoWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 350px;
  padding: 25px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  gap: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
  > div {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    align-items: center;
    padding: 10px;
    gap: 15px;
    color: white;
    h2 {
      font-weight: 600;
      font-size: 18px;
      margin: 0;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
  }
  > div:nth-child(3) {
    flex: 1;
    p {
      font-weight: 400;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.9);
      margin: 0;
      line-height: 1.4;
    }
  }
  @media (max-width: 768px) {
    max-width: 100%;
    height: fit-content;
    gap: 15px;
    padding: 20px;
    text-align: center;
    > div {
      justify-items: center;
      padding: 5px;
      gap: 20px;
      h2 {
        font-weight: 500;
        font-size: 16px;
      }
    }
    > div:nth-child(2) {
      flex: 1;
    }
    > div:nth-child(3) {
      p {
        font-weight: 400;
        font-size: 14px;
      }
    }
  }
`;
export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 15px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
  img {
    width: 30px;
    height: 30px;
    filter: brightness(0) invert(1);
  }
`;