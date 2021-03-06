import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import "./FormattedDate.js";

function WeatherSearch(prop) {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({ready: false});

  function displayWeather(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      time: new Date(response.data.dt*1000),
      day: new Date(response.data.dt*1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
    console.log(event.target.value);
  }

  if(weather.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="card">
  
            <form id="search-form" onSubmit={displayWeather}>
              <div className="row search-line">
                <div id="search-bar" className="col-9 form-el">
                  <input
                    id="city-search"
                    type="text"
                    placeholder="Enter your city"
                    autoComplete="off"
                    onChange={updateCity}
                  />
                </div>
                <div id="search-button" className="col-3 form-el">
                  <button
                    id="search-btn"
                    className="btn btn-warning"
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
            <div className="row information">
              <div className="bla">
                <h1>{weather.city}</h1>
              </div>
            </div>
            <div className="row information">
              <div className="col-2 weather-icon">
                <img id="big-icon" src={weather.icon} alt={weather.description} />
              </div>
              <div id="weather-info" className="col-5">
                <h2 id="big-degrees">
                  <span id="current-temp">{weather.temperature}</span>
                  <span id="temp-units">
                    <span id="celsius" data-ol-has-click-handler="">
                      ??C
                    </span>
                    |
                    <span id="fahrenheits" data-ol-has-click-handler="">
                      ??F
                    </span>
                  </span>
                </h2>
                <ul id="weather-description">
                  <li>
                    Weather: <span id="sky" className="text-capitalize">{weather.description}</span>
                  </li>
                  <li>
                    Humidity: <span id="humidity">{weather.humidity}</span>%
                  </li>
                  <li>
                    Wind: <span id="wind">{weather.wind}</span>{" "}
                    <span id="windUnit">km/h</span>
                  </li>
                </ul>
              </div>
              <div className="col-5">
                <h2>{weather.city}</h2>
                <ul id="time-date">
                  <li id="country">{weather.country}</li>
                  <li id="time">
                    <FormattedDate time={weather.time} />
                    </li>
                  <li id="day">
                    <FormattedDate day={weather.day} /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  } else {
    const apiKey = "4c09ae07987b07a4993b3f7e761af71d";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${prop.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
    
    return "Loading...";
}
  //https://api.openweathermap.org/data/2.5/weather?q=Monaco&appid=4c09ae07987b07a4993b3f7e761af71d&units=metric`;

 

  
}

export default WeatherSearch;
