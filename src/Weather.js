import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather() {
  let apiKey = "117c16c8e34c1f00f925ddb4052594d6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=${apiKey}`;

  function handleResponse(response) {
    alert("The Weather is Good");
  }
  axios.get(apiUrl).then(handleResponse);

  return (
    <div>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
}
