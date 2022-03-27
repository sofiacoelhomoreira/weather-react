import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import "./Search.css";


export default function Search(props) {

  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);


  function handleResponse(response){
  
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon
    });
  }

  function updateCitySearch(){
    const apiKey= "fa1fc144426a6842b1f023d4da2157de";
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
  }

function handleSubmit(event){
  event.preventDefault();
  updateCitySearch();
}


function handleCityChange(event){
  console.log(event.target.value);
setCity(event.target.value);
}


if (weatherData.ready){
  return (
    <div className="Form">
      <form id="search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="type a city .."
          id="search-text-input"
          className="type-city"
          onChange={handleCityChange}
        />
        <input
          type="submit"
          id="search-press"
          className="click-search"
          title="Search city"></input>
        
      </form>

      <Weather data={weatherData} />
    </div>
  );
} else {
  
  updateCitySearch();
  return "Loading...";
  }
}
