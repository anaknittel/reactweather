import React, { useState } from "react";
import "./App.css";
import Search from "./Search";
import Description from "./Description";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  let [weather, setWeather] = useState();
  return (
    <Container id="container">
      <div>
        <h1>Weather App!</h1>
        <Search setWeather={setWeather} />
        <p />
        <Description weather={weather} />
      </div>
    </Container>
  );
}
