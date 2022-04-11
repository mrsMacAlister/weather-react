import React from "react";
import axios from "axios";
import './App.css';

function App() {
      let weatherData = {
    city: "Taipei",
    country: "TW",
    time: "05:20",
    day: "Thursday",
    temperature: 30,
    description: "Sunny",
    humidity: 55,
    wind: 14,
    imgUrl: "http://openweathermap.org/img/wn/01d@2x.png"
  };
  function handleSubmit(response) {
    return(
      alert("hello")
    )
  }

  function updateCity(response){
    alert("wazzap")
  }

  return (
    <div className="Weather">
      <div className="container">
        <div className="card">
          <form id="search-form" onSubmit={handleSubmit}>
            <div className="row search-line">
              <div id="search-bar" className="col-9 form-el">
                <input
                  id="city-search"
                  type="text"
                  placeholder="Enter your city"
                  autoComplete="off"
                />
              </div>
              <div id="search-button" className="col-3 form-el">
                <button
                  id="search-btn"
                  className="btn btn-warning"
                  type="submit"
                  onChange={updateCity}
                >
                  Search
                </button>
              </div>
            </div>
          </form>
          <div className="row information">
            <div className="col-2 weather-icon">
              <img id="big-icon" src={weatherData.imgUrl} alt="" />
            </div>
            <div id="weather-info" className="col-5">
              <h2 id="big-degrees">
                <span id="current-temp">{weatherData.temperature}</span>
                <span id="temp-units">
                  <span id="celsius" data-ol-has-click-handler="">
                    °C
                  </span>
                  |
                  <span id="fahrenheits" data-ol-has-click-handler="">
                    °F
                  </span>
                </span>
              </h2>
              <ul id="weather-description">
                <li>
                  Weather: <span id="sky">{weatherData.description}</span>
                </li>
                <li>
                  Humidity: <span id="humidity">{weatherData.humidity}</span>%
                </li>
                <li>
                  Wind: <span id="wind">{weatherData.wind}</span>{" "}
                  <span id="windUnit">km/h</span>
                </li>
              </ul>
            </div>
            <div className="col-5">
              <h2>{weatherData.city}</h2>
              <ul id="time-date">
                <li id="country">{weatherData.country}</li>
                <li id="time">{weatherData.time}</li>
                <li id="day">{weatherData.day}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
