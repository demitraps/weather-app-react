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
import WeatherForecast from "./WeatherForecast";
import WeatherForecastFahreneit from "./WeatherForecastFahreneit";
import Footer from "./Footer";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ readyStatus: false });
  const [temperature, setTemperature] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [unit, setUnit] = useState("°C");
  const [click, setClick] = useState(0);
  const [celsiusDisplayToggle, setCelsiusDisplayToggle] =
    useState("display-on");
  const [fahreneitDisplayToggle, setFahreneitDisplayToggle] =
    useState("display-off");

  function showWeatherData(response) {
    setTemperature(response.data.main.temp);
    setFeelsLike(response.data.main.feels_like);
    setMinTemp(response.data.main.temp_min);
    setMaxTemp(response.data.main.temp_max);
    setWeatherData({
      readyStatus: true,
      description: response.data.weather[0].description,
      city: response.data.name,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
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

  function switchToFahreneit(event) {
    event.preventDefault();
    if (click === 0) {
      setClick(click + 1);
      console.log(click);
      setUnit("°F");
      setTemperature((temperature * 9) / 5 + 32);
      setFeelsLike((feelsLike * 9) / 5 + 32);
      setMinTemp((minTemp * 9) / 5 + 32);
      setMaxTemp((maxTemp * 9) / 5 + 32);
      setCelsiusDisplayToggle("display-off");
      setFahreneitDisplayToggle("display-on");
    }
  }

  function switchToCelsius(event) {
    event.preventDefault();
    if (click === 1) {
      setClick(0);
      setUnit("°C");
      setTemperature(((temperature - 32) * 5) / 9);
      setFeelsLike(((feelsLike - 32) * 5) / 9);
      setMinTemp(((minTemp - 32) * 5) / 9);
      setMaxTemp(((maxTemp - 32) * 5) / 9);
      setCelsiusDisplayToggle("display-on");
      setFahreneitDisplayToggle("display-off");
    }
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
                <span>{Math.round(temperature)}</span>
                <span>{unit}</span>
              </li>
              <li className="unit-switch">
                switch to{" "}
                <a
                  href="/"
                  className="fahreneit-switch text-white"
                  onClick={switchToFahreneit}
                >
                  °F
                </a>{" "}
                |{" "}
                <a
                  href="/"
                  className="celsius-switch text-white"
                  onClick={switchToCelsius}
                >
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
                {Math.round(feelsLike)}
                {unit}
              </li>

              <li className="weather-additions">
                Min/Max{" "}
                <span className="additions-icon">
                  <FontAwesomeIcon icon={faTemperatureLow} />
                </span>
              </li>
              <li className="additions-values">
                <span>
                  {Math.round(minTemp)}
                  {unit}
                </span>
                /
                <span>
                  {Math.round(maxTemp)}
                  {unit}
                </span>
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
        <div className={celsiusDisplayToggle}>
          <WeatherForecast coordinates={weatherData.coordinates} unit="C" />
        </div>
        <div className={fahreneitDisplayToggle}>
          <WeatherForecastFahreneit
            coordinates={weatherData.coordinates}
            unit="F"
          />
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
