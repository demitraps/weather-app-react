import React from "react";
import "./Footer.css";

export default function Footer(props) {
  if (
    props.iconId === "01d" ||
    props.iconId === "03d" ||
    props.iconId === "04d" ||
    props.iconId === "13d" ||
    props.iconId === "13n"
  ) {
    return (
      <div className="Footer">
        <footer className="signature">
          <a
            href="https://github.com/demitraps/react-weather-app"
            target="_blank"
            rel="noreferrer"
            className="dark-grey"
          >
            Open-source code
          </a>{" "}
          by Demitra Ps
        </footer>
      </div>
    );
  } else if (
    props.iconId === "02d" ||
    props.iconId === "50d" ||
    props.iconId === "50n"
  ) {
    return (
      <div className="Footer">
        <footer className="signature">
          <a
            href="https://github.com/demitraps/react-weather-app"
            target="_blank"
            rel="noreferrer"
            className="grey"
          >
            Open-source code
          </a>{" "}
          by Demitra Ps
        </footer>
      </div>
    );
  } else if (props.iconId === "03n" || props.iconId === "04n") {
    return (
      <div className="Footer">
        <footer className="signature">
          <a
            href="https://github.com/demitraps/react-weather-app"
            target="_blank"
            rel="noreferrer"
            className="dark"
          >
            Open-source code
          </a>{" "}
          by Demitra Ps
        </footer>
      </div>
    );
  } else {
    return (
      <div className="Footer">
        <footer className="signature">
          <a
            href="https://github.com/demitraps/react-weather-app"
            target="_blank"
            rel="noreferrer"
            className="light-grey"
          >
            Open-source code
          </a>{" "}
          by Demitra Ps
        </footer>
      </div>
    );
  }
}
