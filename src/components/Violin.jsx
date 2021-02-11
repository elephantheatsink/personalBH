import React, { Component } from "react";
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
//import TextField from 'material-ui/TextField'
//import RaisedButton from 'material-ui/RaisedButton'
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

class Violin extends Component {
  render() {
    return (
      //<MuiThemeProvider>
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
            This page is about violin and music
            <br></br>
            <br></br>
          </Container>
        </div>
      </React.Fragment>
      //</MuiThemeProvider>
    );
  }
}
export default Violin;
