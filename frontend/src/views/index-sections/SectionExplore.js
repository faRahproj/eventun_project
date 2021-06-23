import React, { useState, useEffect }  from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col,CardBody,CardTitle,CardSubtitle,CardText } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

import DemoFooter from "components/Footers/DemoFooter.js";
import axios from "axios";


function SectionExplore() {


    
    const [stateCustomer, setCustomerState] = useState([]);
    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(5);

    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);


      
    useEffect(() => {
      getCustomer();
    }, []);
    const getCustomer = () => {
    axios
      .get("http://localhost:8092/api/v1/events")
      .then(data => {
        setCustomerState(data.data);
      })
      .catch(err => alert(err));
    };
    const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
    };

    const pages = [];
    for (let i = 1; i <= Math.ceil(stateCustomer.length / itemsPerPage); i++) {
      pages.push(i);
    }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = stateCustomer.slice(indexOfFirstItem, indexOfLastItem);

    const renderPageNumbers = pages.map((number) => {
      return(
       <li
          key={number}
          id={number} onClick={handleClick}           className={currentPage == number ? "active" : null}>
          {number}
        </li>
      );
    });

  return (
    <>
      <div>
        <Row>
        <Col>
        <ul className="pageNumbers">
        {renderPageNumbers}</ul>
        </Col>
        <Col>
        </Col>
        <Col>
          <h5 style={{"cursor":"pointer"}}> Online Events </h5>
        </Col>
        <Col>
          <h5 style={{"cursor":"pointer"}}> Inperson Events </h5>
        </Col>
        </Row>
        {console.log(currentItems)}

          {currentItems.map(d => (
              <Card style={{"width": "50%","float":"left"}}>
                    <CardBody>
                        <img
                        alt="..."
                        className="img-rounded img-responsive"
                        src={d.image}
                        />
                        <div className="img-details">
                        <div className="author">
                            <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={
                                require("assets/img/faces/user.png").default
                            }
                            />
                        </div>
                        </div>
                        <CardTitle tag="h5">{d.title}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{d.location}</CardSubtitle>
                        <CardText>{d.description}</CardText>
                        <Button href="details-page">Details</Button>
                    </CardBody>
                </Card>
                ))}
        <ul className="pageNumbers">
        {renderPageNumbers}</ul>
      </div>
      
    </>
  );
}

export default SectionExplore;