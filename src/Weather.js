import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";
export default function Weather(props) {
    
    const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: "Sunday 20:00",
    });
  }

  if (weatherData.ready) {

  return (
    <div className="Weather">
      <div id="city" className="city">
        {weatherData.city}
      </div>

      <div className="row">
        <div className="col-3">
          <div className="weather-icon">
            <img
              src={"https://ssl.gstatic.com/onebox/weather/48/sunny.png"}
              alt="dataicon"
              id="weather-icon"
              className="float-left"
            />
          </div>
        </div>

        <div class="col-3">
          <span className="temperature" id="temp">
            {weatherData.temperature}
          </span>
          <span className="unit">
            <strong>°C</strong>
          </span>
        </div>
        <div className="col-6">
          <ul id="weather-list" className="weather-list">
            <li>
              <span id="description" className="description">{weatherData.description}</span>
              
            </li>
            <li>
              humidity: <span id="humidity" className="humidity">{weatherData.humidity}</span>%
              
            </li>
            <li>
              wind: <span id="wind" className="wind">{weatherData.wind}</span>km/h
              
            </li>
          </ul>
        </div>
      </div>
      <p>
        {" "}
        Last updated:{" "}
        <span id="update-time" className="update">
          {" "}
          {weatherData.date} {" "}
        </span>{" "}
      </p>
    </div>
  );
} else {

let apiKey= "fa1fc144426a6842b1f023d4da2157de";
let apiUrl= `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

return "Loading...";
}
}