/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container,Row,Col,
         Button } from "reactstrap";
import { Link} from "react-scroll";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/img1-01.png").default + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Row margin-left="100px" width="100px">
            <Col sm={{ size: 4, order: 2, offset: 1 }}>
                  <h1 className="presentation-title" className="text-center">EvenTun</h1>
                  <h3 small className="text-center"  >
                    EvenTun is a Tunisia-based event management and ticketing web application.
                     The service allows users to find, create and promote local events.
                  </h3>
                  <Row style={{"margin-top":"30px"}} >
                    <Col>
                      <Button  className="btn-round" target="_blank" 
                      >
                      <Link activeClass="active" to="categories" spy={true} smooth={true} offset={-70} duration={500}
                        >explore events
                      </Link> 
                      </Button>
                    </Col>
                    <Col>
                      <Button  className="btn-round" target="_blank" 
                      >
                      <Link activeClass="active" to="create" spy={true} smooth={true} offset={-70} duration={500}
                        >create your events
                      </Link> 
                      </Button>
                    </Col>
                  </Row>
            </Col>
          </Row>
        </div>
        </div>
    </>
  );
  

}

export default IndexHeader;
