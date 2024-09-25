import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_key = "13f6f0db34d1b2f92ed0c089b6f05ecc";

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q= ${city}&appid=${API_key}&units=metric`
    );
    let Json_Response = await response.json();
    console.log(Json_Response);
    let result = {
      city: city,
      feels_like: Json_Response.main.feels_like,
      grnd_level: Json_Response.main.grnd_level,
      humidity: Json_Response.main.humidity,
      pressure: Json_Response.main.pressure,
      sea_level: Json_Response.main.sea_level,
      temp: Json_Response.main.temp,

      temp_max: Json_Response.main.temp_max,

      temp_min: Json_Response.main.temp_min,
      weather: Json_Response.weather[0].description,
    };

    console.log(result);
    return result;
  };
  let handleChange = (event) => {
    setCity(event.target.value);
  };
  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
  };
  return (
    <>
      <div className="mainContainer">
        <div className="SearchBox">
          <form onSubmit={handleSubmit}>
            <TextField
              id="city"
              label="City Name"
              variant="outlined"
              required
              value={city}
              onChange={handleChange}
            />
            <br></br>
            <br></br>
            <Button variant="contained" type="submit">
              Search
            </Button>
            <br></br>
            <br></br>
          </form>
        </div>
      </div>
    </>
  );
}
