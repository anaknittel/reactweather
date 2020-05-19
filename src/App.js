import React, { useState } from "react";
import "./App.css";
import Search from "./Search";
import Description from "./Description";

export default function App() {
  let [weather, setWeather] = useState();
  return (
    <div>
      <h1>Weather App</h1>
      <Search setWeather={setWeather} />
      <p />
      <Description weather={weather} />
    </div>
  );
}
