import React from "react";
import axios from "axios";
import { useState } from "react";
import CurrentCity from "./CurrentCity";

function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  const [city, setCity] = useState(props.defaultCity);

  function getTemperature(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  function search() {
    const apiKey = "3499ef150985eccadd080ff408a018df";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getTemperature);
  }

  if (weatherData.ready) {
    return (
      <div className="weather ">
        <form
          action="/"
          onSubmit={(e) => {
            e.preventDefault();
            search();
          }}
          className="row"
        >
          <div className="col-9">
            <input
              type="search"
              placeholder="Search for a city..."
              className="form-control"
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </div>
          <div className="col-3">
            <input type="submit" className="form-control" value="Search" />
          </div>
        </form>
        <CurrentCity weatherData={weatherData} />
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}

export default Weather;
