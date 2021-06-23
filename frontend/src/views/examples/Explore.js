import React, { useState, useEffect }  from "react";

// reactsdtap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import SectionExplore from "views/index-sections/SectionExplore.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import Sidebar from "views/examples/Sidebar.js";
import axios from "axios";

function Explore() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("explore-page");
    return function cleanup() {
      document.body.classList.remove("explore-page");
    };
  });

  return (
    <>
      <IndexNavbar />
      <div style={{"margin-top":"200px"}}>
      <Container>
       <Row>
        <Col md="3" >
            <table style={{"position":"fixed", "text-align": "left",
                            "padding": "0.25rem"," top":" 0"}}>
            <tr><a className="lesCat"> All Events </a></tr>
            <br/>
            <tr><a className="lesCat"> Categories </a></tr>
            <table style={{"margin-left":"20px"}}>
            <tr>  <a className="lesCat" > Kids </a></tr>
            <tr>  <a className="lesCat" > Gastronomy </a></tr>
            <tr>  <a className="lesCat" > Innovation </a></tr>
            <tr>  <a className="lesCat" > Charity </a></tr>
            </table>
            </table>

        </Col>
        <Col md="9">
        <SectionExplore />
        </Col>
        </Row>
      </Container>
      </div>
      <DemoFooter />

    </>
  );
}

export default Explore;