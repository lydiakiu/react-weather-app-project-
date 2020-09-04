import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        Coded by Lydia K, Open-sourced on{" "}
        <a href="https://github.com/lydiakiu/react-weather-app-project-">
          Git Hub
        </a>
      </footer>
    </div>
  );
}

export default App;
