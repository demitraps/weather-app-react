import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faThermometer,
  faTemperatureLow,
  faDroplet,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import SearchForm from "./SearchForm";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col">
          <ul>
            <li className="weather-description">Rainy</li>
            <li className="city-searched">Athens</li>
            <li className="current-date">Tuesday, Oct 30th 2022</li>
            <li className="time-now">
              last updated at <span className="time">20:27</span>
            </li>
          </ul>
          <ul>
            <li className="temperature-now">
              <span>18</span>
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
            <SearchForm />
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
              23°C
            </li>

            <li className="weather-additions">
              Min/Max{" "}
              <span className="additions-icon">
                <FontAwesomeIcon icon={faTemperatureLow} />
              </span>
            </li>
            <li className="additions-values">
              <span>12°C</span>/<span>22°C</span>
            </li>
            <li className="weather-additions">
              Humidity{" "}
              <span className="additions-icon">
                <FontAwesomeIcon icon={faDroplet} />
              </span>
            </li>
            <li className="additions-values" id="humidity">
              45%
            </li>

            <li className="weather-additions">
              Wind speed{" "}
              <span className="additions-icon">
                <FontAwesomeIcon icon={faWind} />
              </span>
            </li>
            <li className="additions-values wind" id="wind">
              10km/h
            </li>
          </ul>
        </div>
      </div>
      <div className="ps-1 d-block d-sm-none mobile-search">
        <SearchForm />
      </div>
    </div>
  );
}
