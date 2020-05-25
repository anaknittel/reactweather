import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Description.css";
import Time from "./Time";
//simport Units from "./Units";
import Forecast from "./Forecast";

export default function Description(props) {
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
                <strong>{props.weather.weather[0].description}</strong>
              </li>
              <li>
                <strong>Humidity: </strong>
                {props.weather.main.humidity}%
              </li>
              <li>
                <strong>Wind Speed: </strong> {props.weather.wind.speed}
                m/s
              </li>
            </ul>
          </Col>
          <Col>
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`}
                alt={props.weather.weather[0].description}
                id="icon"
              />
            </div>
            <div>
              <strong id="temperature">{temperature}</strong>
            </div>
          </Col>
        </Row>
 
        <Row className="Forecast">
            <Col>hello</Col>
        </Row>
    );
  }
}
