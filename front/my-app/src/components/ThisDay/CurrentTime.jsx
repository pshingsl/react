import React from 'react'

const CurrentTime = () => {
    const time = new Intl.DateTimeFormat("ko-KR",
        {
            hour: "numeric",
            minute: "numeric",
        }
    ).format(
        new Date()
    );

  return <div>{time}</div>
  
}

export default CurrentTime