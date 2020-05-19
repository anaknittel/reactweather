import React, { useState } from "react";
import axios from "axios";

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

  function getWeather(response) {
    props.setWeather(response.data);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" onChange={handleCityChange} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
