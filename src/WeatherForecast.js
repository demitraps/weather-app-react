import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [readyStatus, setReadyStatus] = useState(false);
  let [forecast, setForecast] = useState(null);
  let unit = props.unit;

  useEffect(() => {
    setReadyStatus(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setReadyStatus(true);
    setForecast(response.data.daily);
  }

  if (readyStatus) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="forecast-title text-center d-block d-sm-none pt-4 pb-2">
          Daily Forecast
        </div>
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col-sm" key={index}>
                  <WeatherForecastDay data={dailyForecast} unit={unit} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "3dce9b1c66837262a25b3f448d354a76";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
