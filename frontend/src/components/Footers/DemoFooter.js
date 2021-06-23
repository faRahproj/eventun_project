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
import { Row, Container,Col, a, NavItem, } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer" >
      <Container><br/><br/><br/>
        <Row>          <Col>
            <Row>
              <Col>
                <h5 className="styleh5" >EvenTun</h5>
                <br/>
                <p className="styleh5"> Events </p>
                <p className="styleh5"> Account </p>
                <p className="styleh5"> Explore </p>
              </Col>
              <Col>
                <h5 className="styleh5" >Contact Us</h5>
                <br/>
                <p className="styleh5"> Email: event.tun@email.com </p>
                <p className="styleh5"> Facebook </p>
                <p className="styleh5"> Instagram </p>
              </Col>
            </Row>
            </Col><Col style={{"text-align":"center"}}><h5 className="styleh5" >Meet Our Team</h5><br/>

            <Row>
              <Col>
                <div className="avatar">
                  <img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={require("assets/img/faces/sh.PNG").default}
                  />
                    <p className="styleA" > Shaima BEN  HASSINE </p>
              <a className="styleA"
                data-placement="bottom"
                href="https://www.facebook.com/CreativeTim?ref=creativetim"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </a>
              <a className="styleA"
                data-placement="bottom"
                href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </a>
                </div>
              </Col>
              <Col>
                <div className="avatar">
                  <img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={require("assets/img/faces/aya.jpg").default}
                  />
                <p className="styleA" > Aya ISMAIL </p>
              <a className="styleA"
                data-placement="bottom"
                href="https://www.facebook.com/CreativeTim?ref=creativetim"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </a>
              <a className="styleA"
                data-placement="bottom"
                href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </a>
                </div>
              </Col>
              <Col>
                <div className="avatar">
                  <img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={require("assets/img/faces/farah.jpg").default}
                  />
                                      <p className="styleA" > Farah BEN AMOR </p>
              <a className="styleA"
                data-placement="bottom"
                href="https://www.facebook.com/CreativeTim?ref=creativetim"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </a>
              <a className="styleA"
                data-placement="bottom"
                href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </a>
                </div>
              </Col>
              </Row>
            
            </Col> </Row>
        <Row >
          <nav className="footer-nav" >
            <ul style={{"margin-top":"135px"}}>
              <li>
                <a
                  href="https://www.creative-tim.com?ref=pkr-footer"
                  target="_blank"
                >
                  Our team
                </a>
              </li>
              <li>
                <a
                  href="http://blog.creative-tim.com/?ref=pkr-footer"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://www.creative-tim.com/license?ref=pkr-footer"
                  target="_blank"
                >
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto" style={{"margin-top":"135px"}}>
            <span className="copyright" style={{"color":"white"}}>
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> 
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
