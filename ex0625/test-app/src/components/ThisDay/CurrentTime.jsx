
import { useTime } from '../../utils/useTime'

const CurrentTime = () => {
  const currentTime = useTime(1000);

  const time = new Intl.DateTimeFormat("ko-KR",
    {
      hour: "numeric",
      minute: "numeric",
    }
  ).format(currentTime);

  return <div>{time}</div>

}
export default CurrentTime