import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faThermometer,
  faTemperatureLow,
  faDroplet,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ readyStatus: false });

  function showWeatherData(response) {
    console.log(response.data);
    setWeatherData({
      readyStatus: true,
      description: "rainy",
      city: "Athens",
      date: "Tuesday, Oct 30th 2022",
      time: "20:27",
      temperature: response.data.main.temp,
      icon: "faSun",
      feelsLike: response.data.main.feels_like,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.readyStatus) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col">
            <ul>
              <li className="weather-description">{weatherData.description}</li>
              <li className="city-searched">{weatherData.city}</li>
              <li className="current-date">{weatherData.date}</li>
              <li className="time-now">
                last updated at <span className="time">{weatherData.time}</span>
              </li>
            </ul>
            <ul>
              <li className="temperature-now">
                <span>{Math.round(weatherData.temperature)}</span>
                <span>°C</span>
              </li>
              <li className="unit-switch">
                switch to
                <a href="/" className="fahreneit-switch">
                  °F
                </a>{" "}
                |{" "}
                <a href="/" className="celsius-switch">
                  °C
                </a>
              </li>
              <li className="weather-now-icon">
                <FontAwesomeIcon icon={faSun} />
              </li>
            </ul>
            <div className="d-none d-sm-block">
              <div className="SearchForm">
                <form>
                  <input type="search" placeholder="Search city..." />
                  <input type="submit" value="Go" />
                </form>
              </div>
            </div>
          </div>
          <div className="col right-section">
            <ul>
              <li className="weather-additions">
                Feels like{" "}
                <span className="additions-icon">
                  <FontAwesomeIcon icon={faThermometer} />
                </span>
              </li>
              <li className="additions-values" id="feels-like-temp">
                {Math.round(weatherData.feelsLike)}°C
              </li>

              <li className="weather-additions">
                Min/Max{" "}
                <span className="additions-icon">
                  <FontAwesomeIcon icon={faTemperatureLow} />
                </span>
              </li>
              <li className="additions-values">
                <span>{Math.round(weatherData.minTemp)}°C</span>/
                <span>{Math.round(weatherData.maxTemp)}°C</span>
              </li>
              <li className="weather-additions">
                Humidity{" "}
                <span className="additions-icon">
                  <FontAwesomeIcon icon={faDroplet} />
                </span>
              </li>
              <li className="additions-values" id="humidity">
                {weatherData.humidity}%
              </li>

              <li className="weather-additions">
                Wind speed{" "}
                <span className="additions-icon">
                  <FontAwesomeIcon icon={faWind} />
                </span>
              </li>
              <li className="additions-values wind" id="wind">
                {Math.round(weatherData.wind)}km/h
              </li>
            </ul>
          </div>
        </div>
        <div className="ps-1 d-block d-sm-none mobile-search">
          <div className="SearchForm">
            <form>
              <input type="search" placeholder="Search city..." />
              <input type="submit" value="Go" />
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `8ab309e4a4e70d87797e059fab1f65dd`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeatherData);
    return <p>Loading...</p>;
  }
}
