import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Description.css";
import Time from "./Time";

export default function Description(props) {
  console.log(props.weather);
  if (props.weather == null) {
    return <p> Please Search for a City</p>;
  } else {
    let temperature = Math.round(props.weather.main.temp * 10) / 10;
    return (
      <Row className="row">
        <Col>
          <div id="city">{props.weather.name}</div>
          <Time />
          <ul>
            <li id="weather-description">
              {props.weather.weather[0].description}
            </li>
            <li>{props.weather.main.humidity}%</li>
            <li>{props.weather.wind.speed}m/s</li>
          </ul>
        </Col>
        <Col>
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`}
              alt={props.weather.weather[0].description}
            />
          </div>
          <div id="temperature">{temperature}</div>
          <span>ºC |ºF </span>
        </Col>
      </Row>
    );
  }
}
