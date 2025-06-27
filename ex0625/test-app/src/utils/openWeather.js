import OpenWeather from "openweathermap-ts";

const openWeather = new OpenWeather({
  
  apiKey: "69b67557e93fa93ff399c31286e28b04"
})

openWeather.setUnits("metric")

export default openWeather;