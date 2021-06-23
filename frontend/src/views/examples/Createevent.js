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
import React,{Component} from "react";
import ReactDatetime from "react-datetime";
import classnames from "classnames";
// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col,FormGroup,InputGroup ,InputGroupAddon,InputGroupText,
          NavItem, NavLink, Nav, Navbar, NavbarBrand} from "reactstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";


class Createevent extends Component {
  state = {
    files:null
   
  }

  useEffect = () => {
    document.body.classList.add("create-page");
    return function cleanup() {
      document.body.classList.remove("create-page");
    };
  };

    handleFile(e){
      let file = e.target.files[0];
      this.setState({files: file});
    }
    async handleupload(e){
      try{
        let file = this.state.files;
        let formdata = new FormData();
        formdata.append('image',file);
        const res= await axios({
          url:'http://localhost:8092/api/v1/upload',
          method: "POST",
          data:formdata
        })
        return res.data;
      }catch (e){
        return ""
      }
     
    }
    submit = async (e) => {
    let title = e.target[0].value;
    let description = e.target[1].value;
    let nbrticket = e.target[2].value;
    let location = e.target[3].value;
    let family = e.target[4].value;
    let prix = e.target[5].value;
    let dateStart = e.target[7].value;
    let dateEnd = e.target[8].value;
    
    
    const fileName = await this.handleupload(e);
    let image = "http://localhost:8092/api/v1/files/"+fileName;
    let data = {
      title,
      description,
      nbrticket,
      location,
      family,
      prix,
      image,
      dateStart,
      dateEnd
    };
    this.postEvent(data);
    
  };
   upload = data => {
    axios
      .post("http://localhost:8092/api/upload", data)
      .then(d => {
        console.log(d);
      })
      .catch(err => alert(err));
  };
     postEvent = data => {
    axios
      .post("http://localhost:8092/api/v1/events", data)
      .then(d => {
        console.log(d);
      })
      .catch(err => alert(err));
  };
render(){


  return (
    <>
                <Navbar className={classnames("fixed-top")} expand="lg" style={{"height":"50px","background-color":"#3A668C"}}>
      <Container>
        <div>
          <NavbarBrand
            style={{"margin-left":"-200px"}}
            href="/index"
          >
            PitchForum
          </NavbarBrand>
        </div>
        <div className="visually-hidden"  >
          <FormGroup>
          <InputGroup>
            {/* <Input style={{background:'transparent'}} placeholder="Search for events" type="text" />
            <InputGroupAddon addonType="append" style={{background:'transparent'}}>
                <InputGroupText style={{background:'transparent'}}>
                    <i aria-hidden={true} class="nc-icon nc-zoom-split" />
                  </InputGroupText>
                </InputGroupAddon> */}
          </InputGroup>
          </FormGroup>
        </div>
          <Nav navbar>
            <NavItem>
              <NavLink
                href="https://demos.creative-tim.com/paper-kit-react/#/documentation?ref=pkr-index-navbar"
                target="_blank"
              > Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://demos.creative-tim.com/paper-kit-react/#/documentation?ref=pkr-index-navbar"
                target="_blank"
              > Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/index"
                target="_blank"
              > Logout
              </NavLink>
            </NavItem>
          </Nav>
      </Container>
    </Navbar>

        <Container className="themed-container" style={{marginTop:"100px"}} >
              <Card body className="text-center" style={{background:"#FEF5DA"}}>
              <a href="/index" style={{"font-weight":"bold","font-size":"600","color":"#3A668C"}}><h2>EvenTun</h2></a> 
                <h3 className="title mx-auto" style={{color:"gray"}} >create an event</h3>
                <Form className="register-form" onSubmit={e => { e.preventDefault();
                                                                 this.submit(e);}}>
                  <br/>
                  l<label>Name of the event</label>
                  <Input placehoder="event" type="text" />
                  <br/>
                  <label>Description</label>
                  <Input placeholder="Description" type="textarea" />
                  <br/>
                  <label>number of tickets</label>
                  <Input placeholder="Number" type="text" />
                  <br/>
                  {/* <label>location</label>
                  <Input type="text" /> */}

                            <Row><Col>
                            <label for="exampleSelectMulti">Location</label>
                            <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                              <option>Tunis</option>
                              <option>Ariana</option>
                              <option>Beja</option>
                              <option>Ben Arous</option>
                              <option>Bezert</option>
                              <option>Gabes</option>
                              <option>Gafsa</option>
                              <option>Jandouba</option>
                              <option>Kairouen</option>
                              <option>Kasserine</option>
                              <option>Kabeli</option>
                              <option>Le Kef</option>
                              <option>Mahdia</option>
                              <option>La Manouba</option>
                              <option>Medenine</option>
                              <option>Monastir</option>
                              <option>Nabeul</option>
                              <option>Sfax</option>
                              <option>Sidi BouZid</option>
                              <option>Siliana</option>
                              <option>Sousse</option>
                              <option>Tataouin</option>
                              <option>Tozeur</option>
                              <option>Zaghouen</option>
                            </Input></Col><Col>
                          {/* </FormGroup>
                  <label>location</label>
                  <Input type="text" /> 
                          <FormGroup style={{"width":"150px","margin-left":"100px"}}> */}
                            <label for="exampleSelectMulti">Category</label>
                            <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                              <option>Kids</option>
                              <option>Business</option>
                              <option>Volunteering</option>
                              <option>Art</option>
                              <option>Charity</option>
                              <option>Innovation</option>
                              <option>Gastronomy</option>
                              <option>Fiminism</option>
                              <option>Culture</option>
                            </Input></Col></Row>
                  <br/>
                  <label>price of the ticket</label>
                  <Input  type="text" />        
                  <br/>
                  <label>image</label>
                  <Input  type="file" onChange={(e)=>this.handleFile(e)} />        
                  <br/>      
                  <Row style={{marginLeft:"20px",marginTop:"10px"}}>
                  <Col md="6">
                    <Row>                      
                      <label >strat time</label>
                    </Row>
                    <Row>
                      <Col sm="6">
                        <FormGroup>
                          <InputGroup className="date" id="datetimepicker">
                            <ReactDatetime
                              inputProps={{
                                placeholder: "Datetime Picker Here",
                              }}
                            />
                            <InputGroupAddon addonType="append">
                              <InputGroupText>
                                <span className="glyphicon glyphicon-calendar">
                                  <i aria-hidden={true} className="fa fa-calendar" />
                                </span>
                              </InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                  <Col md="6">
                    <Row>                      
                      <label >end time</label>
                    </Row>
                    <Row>
                      <Col sm="6">
                        <FormGroup>
                          <InputGroup className="date" id="datetimepicker">
                            <ReactDatetime
                              inputProps={{
                                placeholder: "Datetime Picker Here",
                              }}
                            />
                            <InputGroupAddon addonType="append">
                              <InputGroupText>
                                <span className="glyphicon glyphicon-calendar">
                                  <i aria-hidden={true} className="fa fa-calendar" />
                                </span>
                              </InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                  </Row>
                  <br/>
                  <Button block className="btn-round" onclick={(e)=>this.handleupload(e)} color="#FF724F" >
                    create the event
                  </Button>
                </Form>
                </Card>
                </Container>

    </>
  );}
}

export default Createevent;