import React from "react";

export default function ForecastComponent(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  return (
    <div className="col">
      <strong>{hours()}</strong>
      <img
        src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
      />
      {Math.round(props.data.main.temp)}°C
    </div>
  );
}
