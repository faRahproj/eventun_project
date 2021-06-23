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
import React from "react";

// reactstrap components
import { Button, Container, Row, Col,  Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from "reactstrap";

// core components

function SectionEvents() {
  return (
    <>
        <section id="events">
      <div id="images">
          <Container>
            <div className="title">
                <Row>
                    <Col>
                        <h3  className="text-center">in person events</h3>
                    </Col>
                    <Col>
                        <h3  className="text-center">online events</h3>
                    </Col>
                </Row>
            </div>
            <Row>
            <Col className="mr-auto ml-auto" md="3" sm="6">

                <Card>
                    <CardBody>
                        <img
                        alt="..."
                        className="img-rounded img-responsive"
                        src={require("assets/img/uriel-soberanes.jpg").default} 
                        />
                        <div className="img-details">
                        <div className="author">
                            <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={
                                require("assets/img/faces/joe-gardner-2.jpg").default
                            }
                            />
                        </div>
                        </div>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
              </Col>
              <Col className="mr-auto ml-auto" md="3" sm="6">
                <Card>
                    <CardBody>
                        <img
                        alt="..."
                        className="img-rounded img-responsive"
                        src={require("assets/img/uriel-soberanes.jpg").default}
                        />
                        <div className="img-details">
                        <div className="author">
                            <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={
                                require("assets/img/faces/joe-gardner-2.jpg").default
                            }
                            />
                        </div>
                        </div>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
              </Col>
              <Col className="mr-auto ml-auto" md="3" sm="6">
                <Card>
                    <CardBody>
                        <img
                        alt="..."
                        className="img-rounded img-responsive"
                        src={require("assets/img/uriel-soberanes.jpg").default}
                        />
                        <div className="img-details">
                        <div className="author">
                            <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={
                                require("assets/img/faces/joe-gardner-2.jpg").default
                            }
                            />
                        </div>
                        </div>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        </section>
    </>
  );
}

export default SectionEvents;
