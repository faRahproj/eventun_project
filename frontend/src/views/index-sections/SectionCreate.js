import React from 'react';
import { Card, CardTitle, p, CardImg, CardImgOverlay, Col, Row, Container,Button} from 'reactstrap';
import { Link} from "react-scroll";



function SectionCategories() {
  return (
          <>
    <section id="create">

        <div >
                    <Container style={{"margin-top":"20px" }}> <br/>
        <Row>
        <Col>
        <div style={{"height":"20px"}}/>
        <div className="text-center" style={{"margin-bottom":"20px" }}>
            <h2 className="create-event">Have your own events</h2>
        </div><br/>
                <h5 className="about-creation">A successful event takes a good organization! 
                  Give us information on your topic so that we can help you create the perfect event.
                </h5> <br/>
                    <div style={{"text-align":"center"}}>
                      <Button  className="btn-round" target="_blank"  style={{"margin-top":"30px"}}
                      href="/register-page"
                target="_blank"
                        >create my events
                      </Button>
                      <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="/register-page"
                  >
                    Login
                  </Button>
                  <Button
                    className="btn-link"
                    color="danger"
                    href="/signup-page"
                  >
                    Singup
                  </Button>

                </div>
                    </div>
                    

        </Col>
        <Col>
          <img  src={require("assets/img/img8.png").default} width="500" height="500"/>
          </Col></Row>            </Container>
        </div>
    </section>
    </>
  );
};

export default SectionCategories;