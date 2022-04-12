import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import WeatherSearch from "./WeatherSearch";
import reportWebVitals from "./reportWebVitals";

function App() {
  return (
    <div className="App">
      <WeatherSearch />
      <footer>
        <a
          href="https://github.com/mrsMacAlister/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourced
        </a>{" "}
        on GitHub, created by mrs.macAlister
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
