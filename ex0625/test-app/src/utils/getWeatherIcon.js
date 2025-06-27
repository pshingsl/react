
const getWeatherIcon = (icon) => {
  switch (icon) {
    case "Clear":
      return "clear-sky.svg";
    case "Clouds":
      return "few-clouds-sky.svg";
    case "Atmosphere":
      return "mist.svg"; // 'mist.svg' 파일이 실제 폴더에 있는지 확인하세요.
    case "Rain":
      return "rain.svg";
    case "Snow":
      return "snow.svg";
    case "Thunderstorm": // 오타 수정: 'ThunderStrom' -> 'Thunderstorm'
      return "thunderstrom.svg";
  }
}

export default getWeatherIcon;