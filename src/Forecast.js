import React, { useState } from "react";
import ForecastComponent from "./ForecastComponent";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  const [load, setLoad] = useState(false);
  const [weatherForecast, setWeatherForecast] = useState(null);

  function handleForecast(response) {
    setWeatherForecast(response.data);
    setLoad(true);
  }

  if (load) {
    return (
      <div className="WeatherForecast row">
        {weatherForecast.list.slice(0, 5).map(function (forecastitem) {
          return <ForecastComponent data={forecastitem} />;
        })}
      </div>
    );
  } else {
    let apiKey = "8aaa27a8220932bbfcccd9f6036dc58b";
    let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(forecastUrl).then(handleForecast);
    return "not loaded";
  }
}
