import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <form>
        <div className="form-row">
          <div className="col-5">
            <input
              type="text"
              id="city-input"
              className="form-control shadow-sm"
              placeholder="Search City"
              autofocus="on"
              autocomplete="off"
            />
          </div>
          <button type="submit" className="btn btn-outline-secondary shadow-sm">
            <i className="fas fa-search"></i>
          </button>
          <div className="col-4">
            <button
              type="button"
              className="btn btn-outline-secondary shawdow-sm"
            >
              My location
            </button>
          </div>
        </div>
      </form>

      <h1>City</h1>

      <div className="row">
        <div className="col-3">
          <h2>Thursday 12:00</h2>
        </div>

        <div className="col-3">
          <ul>
            <li>20°C</li>
            <li>Clear</li>
          </ul>
        </div>

        <div class="col-2">
          <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="rain" />
        </div>
        <div class="col-4">
          <ul>
            <li>Humidity:20%</li>
            <li>Wind Speed:10km/h</li>
            <li>Min Temp:12°C</li>
            <li>Max Temp:22°C</li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}
