import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./Search Box";

//Parent Component
export default function WeatherApp() {
  const [weatherInfo, setweatherInfo] = useState({
    city: "Mysore",
    feels_like: 24.85,
    grnd_level: 906,
    humidity: 82,
    pressure: 1007,
    sea_level: 1007,
    temp: 24.23,
    temp_max: 24.9,
    temp_min: 23.51,
    weather: "broken clouds",
  });

  let updateWeather = (newInfo) => {
    setweatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        <i>Cloud Aware App</i>
      </h1>
      <SearchBox updateInfo={updateWeather} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
