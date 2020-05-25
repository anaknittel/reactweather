import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Forecast(props) {
  if (props.weather == null) {
    return <p> </p>;
  } else {
    return (
      <Row>
        <Col>
          <ul>
            <li>after 3h</li>
            <li>
              <span>🔆</span>
            </li>
            <li>15ºC</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>after 6h</li>
            <li>
              <span>🔆</span>
            </li>
            <li>12ºC</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>after 9h</li>
            <li>
              <span>🔆</span>
            </li>
            <li>22ºC</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>after 12h</li>
            <li>
              <span>🔆</span>
            </li>
            <li>30ºC</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>after 15h</li>
            <li>
              <span>🔆</span>
            </li>
            <li>22ºC</li>
          </ul>
        </Col>
      </Row>
    );
  }
}
