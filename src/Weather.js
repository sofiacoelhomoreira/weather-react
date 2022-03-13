import React from "react";
import axios from "axios";

import "./Weather.css";
export default function Weather() {
  let apiKey= "fa1fc144426a6842b1f023d4da2157de";
  let apiUrl= `http://api.openweathermap.org/data/2.5/weather?${city}&appid=${apiKey}`
  let data = {
    city: "São Paulo",
    temperature: 20,
    update: "Saturday 10:00",
    description: "Sunny",
    icon: "https://ssl.gstatic.com/onebox/weather/48/sunny.png",
    humidity: 50,
    wind: 16
  };
  return (
    <div className="Weather">
      <div id="city" className="city">
        {data.city}
      </div>

      <div className="row">
        <div className="col-3">
          <div className="weather-icon">
            <img
              src={data.icon}
              alt="dataicon"
              id="weather-icon"
              className="float-left"
            />
          </div>
        </div>

        <div class="col-3">
          <span className="temperature" id="temp">
            {data.temperature}
          </span>
          <span className="unit">
            <strong>°C</strong>
          </span>
        </div>
        <div className="col-6">
          <ul id="weather-list" className="weather-list">
            <li>
              <span id="description" className="description"></span>
              {data.description}
            </li>
            <li>
              humidity: <span id="humidity" className="humidity"></span>%
              {data.humidity}
            </li>
            <li>
              wind: <span id="wind" className="wind"></span>km/h
              {data.wind}
            </li>
          </ul>
        </div>
      </div>
      <p>
        {" "}
        Last updated:{" "}
        <span id="update-time" className="update">
          {" "}
          {data.update}{" "}
        </span>{" "}
      </p>
    </div>
  );
}
