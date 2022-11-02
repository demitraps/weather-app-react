import React, { useState } from "react";
import axios from "axios";
import { SpinnerRoundFilled } from "spinners-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThermometer,
  faTemperatureLow,
  faDroplet,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import FormattedIcon from "./FormattedIcon";
import Footer from "./Footer";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ readyStatus: false });

  function showWeatherData(response) {
    setWeatherData({
      readyStatus: true,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      icon: response.data.weather[0].icon,
      feelsLike: response.data.main.feels_like,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = `8ab309e4a4e70d87797e059fab1f65dd`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeatherData);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.readyStatus) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col">
            <ul>
              <li className="weather-description">{weatherData.description}</li>
              <li className="city-searched">{weatherData.city}</li>
              <li className="current-date">
                <FormattedDate dateInfo={weatherData.date} />
              </li>
              <li className="time-now">
                last updated at{" "}
                <span className="time">
                  <FormattedTime dateInfo={weatherData.date} />
                </span>
              </li>
            </ul>
            <ul>
              <li className="temperature-now">
                <span>{Math.round(weatherData.temperature)}</span>
                <span>°C</span>
              </li>
              <li className="unit-switch">
                switch to{" "}
                <a href="/" className="fahreneit-switch text-white">
                  °F
                </a>{" "}
                |{" "}
                <a href="/" className="celsius-switch text-white">
                  °C
                </a>
              </li>
              <li className="weather-now-icon">
                <FormattedIcon iconId={weatherData.icon} />
              </li>
            </ul>
            <div className="d-none d-sm-block">
              <div className="SearchForm">
                <form onSubmit={handleSubmit}>
                  <input
                    type="search"
                    placeholder="Search city..."
                    onChange={handleCityChange}
                  />
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
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Search city..."
                onChange={handleCityChange}
              />
              <input type="submit" value="Go" />
            </form>
          </div>
        </div>
        <Footer iconId={weatherData.icon} />
      </div>
    );
  } else {
    search();
    return (
      <div className="pt-5 mt-5 d-flex justify-content-center align-items-center">
        <SpinnerRoundFilled
          size={200}
          thickness={180}
          speed={100}
          color="rgba(255, 255, 255, 1)"
        />
      </div>
    );
  }
}
