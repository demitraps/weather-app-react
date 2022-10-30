import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <footer className="signature">
        <a
          href="https://github.com/demitraps/react-weather-app"
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >
          Open-source code
        </a>{" "}
        by Demitra Ps
      </footer>
    </div>
  );
}
