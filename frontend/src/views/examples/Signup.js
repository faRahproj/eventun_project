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

import axios from "axios";
import { withRouter } from "react-router-dom";
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";


function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("signup-page");
    return function cleanup() {
      document.body.classList.remove("signup-page");
    };
  });

    const submit = e => {
    let firstName = e.target[0].value;
    let lastName = e.target[1].value;
    let email = e.target[2].value;
    let password = e.target[3].value;
    let country = e.target[4].value;
    let gender = e.target[5].value;
    let data = {
      firstName,
      lastName,
      email,
      password,
      country,
      gender
    };
    console.log(data);
    postUser(data);
  };

    const postUser = data => {
    axios
      .post("http://localhost:8092/secure/test/users/register", data)
      .then(d => {
        console.log(d);
      })
      .catch(err => alert(err));
  };


  return (
    <>
      <div
        className="page-header"
      >
        <div/>
        <Container style={{"margin-top":"10px"}}>

              <Card className="card-register ml-auto mr-auto " style={{background:"#FEF5DA"}}>
                <a href="/index" style={{"font-weight":"bold","font-size":"600","color":"#3A668C","margin-top":"-10px"}} className="title mx-auto"><h2>EvenTun</h2></a>
                <h3 className="text-center" style={{color:"gray"}}>Welcome</h3>
                <Form className="register-form"         onSubmit={e => {
          e.preventDefault();
          submit(e);
        }}>
                  <Row>
                    <Col>
                    <label style={{color:"gray"}}>firstName</label>
                    <Input placeholder="First Name" type="text" />
                    </Col>
                    <Col>
                    <label style={{color:"gray"}}>lastName</label>
                    <Input placeholder="Last Name" type="text" />
                    </Col>
                  </Row>
                  <label style={{color:"gray"}}>Email</label>
                  <Input placeholder="Email" type="text" />
                  <label style={{color:"gray"}}>Password</label>
                  <Input placeholder="Password" type="password" />
                  <label style={{color:"gray"}}>Country</label>
                  <Input placeholder="Country" type="text" />
                  <label style={{color:"gray"}}>Gender</label>
                  <Input placeholder="Gender" type="text" />
                  <Button block className="btn-round" color="danger" href="create-page" >
                    Sign up 
                  </Button>
                </Form>

              </Card>

        </Container>
      </div>
    </>
  );
}

export default RegisterPage;
