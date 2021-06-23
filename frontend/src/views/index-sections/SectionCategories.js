import React from 'react';
import { Card, CardTitle, p, CardImg, CardImgOverlay, Col, Row, Container } from 'reactstrap';
function SectionCategories() {
  return (
    <>
    <section id="categories">

        <div style={{backgroundColor:"#FFFAFB"}} >
        
        <div style={{"height":"20px"}}/>
            <div className="text-center" >
        <h2>Explore Categories and Choose Your Destination</h2><br/>
    </div>
        <Container style={{"margin-top":"20px" }}>
        <Row style={{"margin-top":"20px", "margin-bottom":"20px" }}>
        <Col  style={{"margin-right":"10px", "margin-left":"10px" }}>
        <a href="/explore-page">
        <Card inverse className="card-cat">
            <CardImg className="Cat-Img" src={require("assets/img/innovation-01.png").default}  alt="Card image cap" />
            <CardImgOverlay className="cat-text-col">
            <h3>Innovation</h3><br/>
            <p>Modern technology has become a total phenomenon for civilization, the defining force of a new social order in which efficiency is no longer an option but a necessity imposed on all human activity.</p>
            </CardImgOverlay>
        </Card>
        </a>
        </Col>
        <Col  style={{"margin-right":"10px", "margin-left":"10px" }}>
        <a href="/explore-page">
        <Card inverse className="card-cat">
            <CardImg className="Cat-Img" style={{"max-width": "100%","height":"auto"}} src={require("assets/img/art-01.png").default}  alt="Card image cap" />
            <CardImgOverlay className="cat-text-col">
            <h3>Art</h3><br/>
            <p>Because we believe that every artist was first an amateur , we have put for you a beautiful collection of Art events that are worth discovering. </p>
            </CardImgOverlay>
        </Card>
        </a>
        </Col>
        <Col style={{"margin-right":"10px", "margin-left":"10px" }}>
        <a href="/explore-page">
        <Card inverse className="card-cat">
            <CardImg  className="Cat-Img"  src={require("assets/img/gastronomy-01.png").default}  alt="Card image cap" />
            <CardImgOverlay className="cat-text-col">
            <h3>Gastronomy</h3><br/>
            <p>We have researched the most peculiar gastronomic events or food festivals in the world,
             believe us your heart will be content, your belly full  and you’ll have the time of your life!.</p>
            </CardImgOverlay>
        </Card>
        </a>
        </Col>
        </Row>
         <Row style={{"margin-top":"20px", "margin-bottom":"20px" }}>
        <Col  style={{"margin-right":"10px", "margin-left":"10px" }}>
        <a href="/explore-page">
        <Card inverse className="card-cat">
            <CardImg  className="Cat-Img"  src={require("assets/img/fiminism-01.png").default}  alt="Card image cap" />
            <CardImgOverlay className="cat-text-col">
            <h3>Fiminism</h3><br/>
            <p>feminist, events committed to achieving gender equality, sustainable development and women’s human rights</p>
            </CardImgOverlay>
        </Card>
        </a>
        </Col>
        <Col  style={{"margin-right":"10px", "margin-left":"10px" }}>
        <a href="/explore-page">
        <Card inverse className="card-cat">
            <CardImg  className="Cat-Img"  src={require("assets/img/children-01.png").default}  alt="Card image cap" />
            <CardImgOverlay className="cat-text-col">
            <h3>Kids</h3><br/>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </CardImgOverlay>
        </Card>
        </a>
        </Col>
        <Col style={{"margin-right":"10px", "margin-left":"10px" }}>
        <a href="/explore-page">
        <Card inverse className="card-cat">
            <CardImg  className="Cat-Img"  src={require("assets/img/business-01.png").default}  alt="Card image cap" />
            <CardImgOverlay className="cat-text-col">
            <h3>Business</h3><br/>
            <p>The demand for a business event is driven mainly by organisations choosing it as a forum to communicate messages. So be a part of it</p>
            </CardImgOverlay>
        </Card>
        </a>
        </Col>
        </Row>
         <Row style={{"margin-top":"20px"}}>
        <Col  style={{"margin-right":"10px", "margin-left":"10px" }}>
        <a href="/explore-page">
        <Card inverse className="card-cat">
            <CardImg  className="Cat-Img"  src={require("assets/img/culture-01.png").default}  alt="Card image cap" />
            <CardImgOverlay className="cat-text-col">
            <h3>Culture</h3><br/>
            <p>The greatest of a culture can be found in its festivals, click here to find the mysteries of our wonderful Tunisian culture. </p>
            </CardImgOverlay>
        </Card>
        </a>
        </Col>
        <Col  style={{"margin-right":"10px", "margin-left":"10px" }}>
        <a href="/explore-page">
        <Card inverse className="card-cat"> 
            <CardImg  className="Cat-Img"  src={require("assets/img/charity-01.png").default}  alt="Card image cap" />
            <CardImgOverlay className="cat-text-col">
            <h3>Charity</h3><br/>
            <p>“We rise by lifting others “
Charity is the soul of faith , makes it alive by participating at charity events in which a simple act of kindness, no matter how small , is never wasted.
</p>
            </CardImgOverlay>
        </Card>
        </a>
        </Col>
        <Col style={{"margin-right":"10px", "margin-left":"10px" }}>
        <a href="/explore-page">
        <Card inverse className="card-cat">
            <CardImg  className="Cat-Img"  src={require("assets/img/volunteering-01.png").default}  alt="Card image cap" />
            <CardImgOverlay className="cat-text-col">
            <h3>Volunteering</h3><br/>
            <p>Volunteering can help you make friends, learn new skills, advance your career, and even feel happier and healthier.
             Learn how to find the right volunteer opportunity for you.</p>
            </CardImgOverlay>
        </Card>
        </a>
        </Col>
        </Row>
        </Container>
        </div>
    </section>
    </>
  );
};

export default SectionCategories;