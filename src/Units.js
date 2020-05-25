import React, { useState } from "react";
import axios from "axios";

export default function Units(props) {
  let [celsius, setCelsius] = useState();
  let [fahrenheit, setFahrenheit] = useState();

  function celsiusLink() {
    let temperature = props.temperature;
    console.log(temperature);
  }

  function fahrenheitLink() {
    let apiKey = "117c16c8e34c1f00f925ddb4052594d6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.weather.name}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(fahrenheitConvertion);
  }

  function fahrenheitConvertion(response) {
    let fahrenheit = Math.round(response.data.main.temp);
    console.log(fahrenheit);
  }

  return (
    <div>
      <div id="units">
        <a id="celsius-link" href=" " onClick={fahrenheitLink}>
          ºC
        </a>{" "}
        |
        <a id="farhenheit-link" href=" " onClick={celsiusLink}>
          ºF
        </a>{" "}
      </div>{" "}
    </div>
  );
}
