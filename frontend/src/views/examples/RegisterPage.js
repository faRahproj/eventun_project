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
import React, { useState } from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col, Alert } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import { useHistory } from "react-router-dom";

function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
const[email, setEmail]=useState('')
const[password, setPassword]=useState('')
//   const [inputs, setInputs] = useState({
//     email: '',
//     password: ''
// });
// const { email, password } = inputs;
   const submitHandler = e => { e.preventDefault()
                                alert("helloooo "+ email)
                           }

// const [state , setState] = useState({
//   email : "",
//   password : ""
// })
// const handleChange = (e) => {
//   const {id , value} = e.target   
//   setState(prevState => ({
//       ...prevState,
//       [id] : value
//   }))
// }

  return (
    <>
      <div
        className="page-header"
      >
        <div className="filter"  />
        <Container className="themed-container" style={{"margin-top":"-10px"}}>
          <Row>
            <Col className="ml-auto mr-auto" lg="8">
              <Card className="card-register ml-auto mr-auto" style={{background:"#FEF5DA"}}>
              
                <a href="/index" style={{"font-weight":"bold","font-size":"600","color":"#3A668C","margin-top":"-10px"}} className="title mx-auto"><h2>EvenTun</h2></a>
                <h3 className="title mx-auto" style={{color:"gray"}}>Welcome</h3>
                <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="facebook"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="google"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon"
                    color="twitter"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div>
                <Form className="register-form" onSubmit={submitHandler} style={{color:"gray"}}>
                  <label>Email</label>
                  <Input defaultValue={email}
                           onChange={e =>setEmail(e.target.value)}   placeholder="Email" type="text" style={{color:"gray"}} />
                  <label>Password</label>
                  <Input defaultValue={password}
                           onChange={e =>setPassword(e.target.value)}   placeholder="Password" type="password" />
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                  <Button block className="btn-round" color="danger">
                    Register
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="/signup-page"
                  >
                    singup
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default RegisterPage;
