import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Description(props) {
  //let temperature = props.weather;
  console.log(props.weather);
  if (props.weather == null) {
    return <p> Please Search for a City</p>;
  } else {
    let temperature = Math.round(props.weather.main.temp);
    return (
      <Container fluid>
        <Row>
          <Col>
            <div id="city">Lisbon</div>
            <div id="date">Tuesday, May 19</div>
            <ul>
              <li>Description</li>
              <li>Humidity</li>
              <li>Wind</li>
            </ul>
          </Col>
          <Col>
            <div id="image">*sun*</div>
            <div id="temperature">{temperature}</div>
            <span>ºC |ºF </span>
          </Col>
        </Row>
      </Container>
    );
  }
}
