import React, { useEffect } from "react";
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

export default function FormattedIcon(props) {
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

  useEffect(() => {
    const imageMapping = {
      "01d": `url("https://images.unsplash.com/photo-1502200893034-b7bca90610ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80")`,
      "01n": `url("https://images.unsplash.com/photo-1532978379173-523e16f371f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")`,
      "02d": `url("https://images.unsplash.com/photo-1525490829609-d166ddb58678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80")`,
      "02n": `url("https://images.unsplash.com/photo-1604338140746-e5c59638aeda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")`,
      "03d": `url("https://images.unsplash.com/photo-1543587044-ab01bb69aca9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")`,
      "03n": `url("https://images.unsplash.com/photo-1594887384928-0568e6034b54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1868&q=80")`,
      "04d": `url("https://images.unsplash.com/photo-1543587044-ab01bb69aca9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")`,
      "04n": `url("https://images.unsplash.com/photo-1594887384928-0568e6034b54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1868&q=80")`,
      "09d": `url("https://images.unsplash.com/photo-1511935456800-a6bffda8bb9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80")`,
      "09n": `url("https://images.unsplash.com/photo-1511935456800-a6bffda8bb9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80")`,
      "10d": `url("https://images.pexels.com/photos/1089455/pexels-photo-1089455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
      "10n": `url("https://images.unsplash.com/photo-1501999635878-71cb5379c2d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80")`,
      "11d": `url("https://images.unsplash.com/photo-1576290134419-915a21939122?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")`,
      "11n": `url("https://images.unsplash.com/photo-1576290134419-915a21939122?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")`,
      "13d": `url("https://images.unsplash.com/photo-1422930717940-92ec7c690afc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80")`,
      "13n": `url("https://images.unsplash.com/photo-1422930717940-92ec7c690afc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80")`,
      "50d": `url("https://images.unsplash.com/photo-1603794052293-650dbdeef72c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80")`,
      "50n": `url("https://images.unsplash.com/photo-1603794052293-650dbdeef72c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80")`,
    };

    document.body.style.backgroundImage = imageMapping[props.iconId];

    if (props.iconId === "13d" || props.iconId === "13n") {
      document.body.style.color = "#3a4750";
    } else if (props.iconId === "50d" || props.iconId === "50n") {
      document.body.style.color = "#757a79";
    } else {
      document.body.style.color = "#fff";
    }
  });
  return <div>{codeMapping[props.iconId]}</div>;
}
