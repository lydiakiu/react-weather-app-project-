import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import "./Weather.css";
import Formatdate from "./Formatdate";
import axios from "axios";

export default function Weather(props) {
  const [data, setData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultcity);

  function handleResponse(response) {
    setData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      maxtemp: response.data.main.temp_max,
      mintemp: response.data.main.temp_min,
    });
  }
  function search() {
    const apiKey = "8aaa27a8220932bbfcccd9f6036dc58b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (data.ready) {
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="col-7">
              <input
                type="text"
                id="city-input"
                className="form-control shadow-sm w-100"
                placeholder="Search City"
                autoFocus="on"
                autocomplete="off"
                onChange={updateCity}
              />
            </div>
            <button
              type="submit"
              className="btn btn-outline-secondary shadow-sm"
            >
              <i className="fas fa-search"></i>
            </button>
            <div className="col-4">
              <button
                type="button"
                className="btn btn-outline-secondary shawdow-sm w-100"
              >
                My Location
              </button>
            </div>
          </div>
        </form>

        <h1>{data.city}</h1>

        <div className="row">
          <div className="col-3">
            <Formatdate />
          </div>

          <div className="col-3">
            <ul>
              <li>{Math.round(data.temperature)}°C</li>
              <li className="text-capitalize">
                <h2>{data.description}</h2>
              </li>
            </ul>
          </div>

          <div className="col-2">
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="rain"
            />
          </div>
          <div className="col-4">
            <ul>
              <li>Humidity: {data.humidity} %</li>
              <li>Wind Speed: {Math.round(data.wind)} km/h</li>
              <li>Min Temp: {Math.round(data.mintemp)} °C</li>
              <li>Max Temp:{Math.round(data.maxtemp)} °C</li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
