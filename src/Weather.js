import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">

      <div className= "nameCity" id="name">
       <h3>
        {props.data.city}
      </h3>
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
            {props.data.temperature}
          </span>
          <span className="unit">
            <strong>°C</strong>
          </span>
        </div>
        <div className="col-6">
          <ul id="weather-list" className="weather-list">
            <li>
              <span id="description" className="description">{props.data.description}</span>
              
            </li>
            <li>
              humidity: <span id="humidity" className="humidity">{props.data.humidity}</span>%
              
            </li>
            <li>
              wind: <span id="wind" className="wind">{props.data.wind}</span>km/h
              
            </li>
          </ul>
        </div>
      </div>
      <p>
        {" "}
        Last updated:{" "}
        <span id="update-time" className="update">
          {" "}
          <FormattedDate date={props.data.date}/> {" "}
        </span>{" "}
      </p>
    </div>
  );
} 