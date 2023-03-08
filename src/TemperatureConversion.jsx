import React, { useState } from "react";

function TemperatureConversion(props) {
  const [unit, setUnit] = useState("Celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("Celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }

  if (unit === "Celsius") {
    return (
      <>
        <div className="temperatureConversion">
          <h2>{Math.round(props.celsius)}°</h2>
          <small>
            C |{" "}
            <a href="/" onClick={showFahrenheit}>
              F
            </a>
          </small>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="temperatureConversion">
          <h2>{Math.round((props.celsius * 9) / 5 + 32)}°</h2>
          <small>
            <a href="/" onClick={showCelsius}>
              C
            </a>{" "}
            | F
          </small>
        </div>
      </>
    );
  }
}

export default TemperatureConversion;
