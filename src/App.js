import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultcity="Amsterdam" />
      <footer>
        Coded by Lydia K, open sourced on{" "}
        <a href="https://github.com/lydiakiu/react-weather-app-project-">
          Git Hub
        </a>
      </footer>
    </div>
  );
}

export default App;
