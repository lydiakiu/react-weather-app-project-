import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import "./Weather.css";
import Weatherinfo from "./Weatherinfo";
import Forecast from "./Forecast";
import axios from "axios";

export default function Weather(props) {
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [city, setCity] = useState(props.defaultcity);

  function handleResponse(response) {
    setData({
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setLoaded(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "8aaa27a8220932bbfcccd9f6036dc58b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
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
                autoComplete="off"
                onChange={updateCity}
              />
            </div>
            <button
              type="submit"
              className="btn btn-outline-secondary shadow-sm"
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
        <Weatherinfo weatherdata={data} />
        <hr />

        <Forecast city={data.city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
