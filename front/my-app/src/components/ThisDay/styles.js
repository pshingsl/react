import styled from "styled-components";

export const ThisDayWrapper = styled.div`
    width: 100%;
    max-width: 450px;   
    min-height: 350px;
    padding:  30px;
    background: rgba(255, 255, 255, 0.15);
    background-filter: blur(20px); 
    border-radius: 25px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    transtion: transform: 0.3s ease, box-shadow 0.3s ease;
`;

export const Top = styled.div`
    display:flex;
    justify-content: space-between;
    align--items: center;

    gap: 30px;
     >div { 
    display: flex;
    flex-direction:column;
    justify-content: center;
    gap:10px;
    h2{
      font-weight: 300;
      font-size: 80px;
      line-height: 1;
      color: white;
      text-shadow:0 4px 8px rgba(0, 0, 0, 0.3);
      marign: 0;
    }
    h3{
      font-weight: 400;
      font-size: 24px;
      color: rgba(255, 255, 255, 0.9);
      margin: 0;
    }
  }
  img{
    width: 120px;
    height: 120px;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.1);
    }
  }
`;

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 20px;
    padding-top:20px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.9);
`;