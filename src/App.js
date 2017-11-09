import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import guitarist from './img/guitarist.gif';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import MyNavbar from './MyNavbar';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="container">
      <MyNavbar />
      <Grid>
   <Row className="show-grid">
     <Col xs={12} md={4}>
     <div id="header">
     <img src={guitarist} alt="Jay Skript and the Domsters"/>
     </div>
     </Col>
     <Col xs={6} md={8}>
     <div id="content">
       <h1>Welcome</h1>
       <p id="intro">Welcome to the official website of Jay Skript and the Domsters. Here, you can <a href="about.html">learn more about the band</a>, view <a href="photos.html">photos of the band</a>, find out about <a href="live.html">tour dates</a> and <a href="contact.html">get in touch with the band</a>.</p>
     </div>
     </Col>
   </Row>
</Grid>




      </div>
    );
  }
}

export default App;
