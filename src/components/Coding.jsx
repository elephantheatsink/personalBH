import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

class Coding extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Container
            style={{
              backgroundColor: "#717C7150",
              borderRadius: "5px",
              width: "530px",
              padding: "30px",
              marginTop: "20px",
            }}
          >
            <a href="/">
              Back to Home
              <br></br>
            </a>
            <br></br>
            This page is about coding
            <br></br>
            <br></br>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}
export default Coding;
