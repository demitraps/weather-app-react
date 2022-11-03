import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faCloudSun,
  faCloudMoon,
  faCloud,
  faCloudShowersHeavy,
  faCloudSunRain,
  faCloudMoonRain,
  faCloudBolt,
  faSnowflake,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    return day;
  }

  const codeMapping = {
    "01d": <FontAwesomeIcon icon={faSun} />,
    "01n": <FontAwesomeIcon icon={faMoon} />,
    "02d": <FontAwesomeIcon icon={faCloudSun} />,
    "02n": <FontAwesomeIcon icon={faCloudMoon} />,
    "03d": <FontAwesomeIcon icon={faCloud} />,
    "03n": <FontAwesomeIcon icon={faCloud} />,
    "04d": <FontAwesomeIcon icon={faCloud} />,
    "04n": <FontAwesomeIcon icon={faCloud} />,
    "09d": <FontAwesomeIcon icon={faCloudShowersHeavy} />,
    "09n": <FontAwesomeIcon icon={faCloudShowersHeavy} />,
    "10d": <FontAwesomeIcon icon={faCloudSunRain} />,
    "10n": <FontAwesomeIcon icon={faCloudMoonRain} />,
    "11d": <FontAwesomeIcon icon={faCloudBolt} />,
    "11n": <FontAwesomeIcon icon={faCloudBolt} />,
    "13d": <FontAwesomeIcon icon={faSnowflake} />,
    "13n": <FontAwesomeIcon icon={faSnowflake} />,
    "50d": <FontAwesomeIcon icon={faSmog} />,
    "50n": <FontAwesomeIcon icon={faSmog} />,
  };

  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <div className="forecast-max">
        {Math.round(props.data.temp.max)}°{props.unit}
      </div>
      <div className="forecast-min pe-5">
        {Math.round(props.data.temp.min)}°{props.unit}
      </div>
      <div className="forecast-icon">
        <div>{codeMapping[props.data.weather[0].icon]}</div>
      </div>
    </div>
  );
}
