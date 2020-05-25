import React, { useState } from "react";
import "./App.css";
import Search from "./Search";
import Description from "./Description";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Forecast from "./Forecast";

export default function App() {
  let [weather, setWeather] = useState();
  return (
    <div>
      <h1>Weather App!</h1>
      <Container id="container">
        <div>
          <Search setWeather={setWeather} />
          <p />
          <Description weather={weather} />
          <p />
          <Forecast weather={" "} />
        </div>
      </Container>
    </div>
  );
}
