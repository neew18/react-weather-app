import React from "react";
import axios from "axios";
import { useState } from "react";
import CurrentCity from "./CurrentCity";

function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

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

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form action="/">
          <input
            type="search"
            placeholder="Search for a city..."
            name=""
            id=""
          />
          <input type="submit" value="Search" />
        </form>
        <CurrentCity weatherData={weatherData} />
      </div>
    );
  } else {
    const apiKey = "3499ef150985eccadd080ff408a018df";
    let city = "Yangon";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getTemperature);
    return <div>Loading...</div>;
  }
}

export default Weather;
