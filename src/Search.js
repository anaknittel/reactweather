import React, { useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import "./Search.css";

export default function Search(props) {
  let apiKey = "117c16c8e34c1f00f925ddb4052594d6";
  let [cityName, setCityName] = useState("Lisbon");
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  function handleSearch(event) {
    event.preventDefault();
    axios.get(apiUrl).then(getWeather);
  }

  function handleCityChange(event) {
    setCityName(event.target.value);
  }

  function handleCurrentPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);
  }

  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(handleCurrentPosition);
  }

  function getWeather(response) {
    props.setWeather(response.data);
    console.log(response.data);
  }

  return (
    <div>
      <Form onSubmit={handleSearch}>
        <input id="search-engine" type="text" onChange={handleCityChange} />
        <br />
        <input id="button" type="submit" value="Search" />
        <input
          id="button"
          type="submit"
          value="Current Place"
          onClick={getCurrentPosition}
        />
      </Form>
    </div>
  );
}
