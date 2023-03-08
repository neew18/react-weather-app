import React from "react";

function CurrentCity(props) {
  return (
    <div className="currentCity">
      <div className="text-center mt-5">
        <h1>{props.weatherData.city}</h1>
        <h5>Last updated at {props.weatherData.date}</h5>
        <p className="text-capitalize">{props.weatherData.description}</p>
        <div className="row mt-4">
          <div className="col-6">
            <img src={props.weatherData.iconUrl} alt="weather icon" />
          </div>
          <div className="col-6 position-relative">
            <h2 className="d-inline">
              {Math.round(props.weatherData.temperature)}°
            </h2>
            <small className="position-absolute">C | F</small>
          </div>
        </div>
        <ul className="mt-5">
          <li>Humidity: {props.weatherData.humidity}%</li>
          <li>Wind: {props.weatherData.wind}km/h</li>
        </ul>
      </div>
    </div>
  );
}

export default CurrentCity;
