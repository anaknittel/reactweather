import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Description.css";

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
          <div id="date">Tuesday, May 19</div>
          <ul>
            <li id="weather-description">
              {props.weather.weather[0].description}
            </li>
            <li>{props.weather.main.humidity}%</li>
            <li>{props.weather.wind.speed}m/s</li>
          </ul>
        </Col>
        <Col>
          <div id="image">*sun*</div>
          <div id="temperature">{temperature}</div>
          <span>ºC |ºF </span>
        </Col>
      </Row>
    );
  }
}
