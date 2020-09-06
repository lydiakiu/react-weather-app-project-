import React from "react";
import Temperature from "./Temperature";
import Formatdate from "./Formatdate";

export default function Weatherinfo(props) {
  return (
    <div>
      <div className="row">
        <div className="col-8">
          <h1>{props.weatherdata.city}</h1>
        </div>
        <div className="col-4">
          <img src={props.weatherdata.icon} alt="rain" />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <Formatdate date={props.weatherdata.date} />
        </div>

        <div className="col-4">
          <ul>
            <li>
              <Temperature celsius={props.weatherdata.temperature} />
            </li>
            <li className="text-capitalize">
              <h2>{props.weatherdata.description}</h2>
            </li>
          </ul>
        </div>

        <div className="col-4">
          <ul className="properties">
            <li>Humidity: {props.weatherdata.humidity} %</li>
            <li>Wind Speed: {Math.round(props.weatherdata.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
