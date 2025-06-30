import React, { useEffect, useState } from 'react'

// utils폴더에는 비동기처리나 데이터를 모은다
export const useTime = (refreshCycle = 1000) => {
  const [now, setNow] = useState(getTime());

  //setInterval: 주기적을 실행 할 때 사용
  // 여기서 시간함수를 가져와 1분마다 바뀌는걸 왼쪽 메인화면을 보여줌
  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(getTime())
    }, refreshCycle)

    return () => clearInterval(intervalId);
  }, [refreshCycle])

  return now;
}

export const getTime = () =>{
  return new Date();
}