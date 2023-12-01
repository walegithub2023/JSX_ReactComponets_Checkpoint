//import App.css
import './App.css';

//import React and React bootstrap
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

//import container, nav, navbar and navdropdown from react-boostrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


//import row and col components from react-boostrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import button, card  and form components from react boostrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

//import all the created components
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

import Name2 from './Name2';
import Price2 from './Price2';
import Description2 from './Description2';
import Image2 from './Image2';

import Name3 from './Name3';
import Price3 from './Price3';
import Description3 from './Description3';
import Image3 from './Image3';



// Declaration of variables
let firstName = prompt("Enter firstname");
let message = "";



//A function that returns content of the App component
function App() {
  return (
    <>
    <div className="App">
  
      {/* create navbar */}
      <Navbar expand="lg" className="bg-primary p-4 text-light mb-2 mb-lg-0" style={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px"}}>
                  <Container>
                        <Navbar.Brand href="#home" className="h1 text-light" style={{fontSize:"180%", fontWeight:"bold", marginTop:"10px"}}>DEMO</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                          <Nav className="me-auto text-light">
                            <Nav.Link href="#home" className="text-light">Home</Nav.Link>
                            <Nav.Link href="#produts" className="text-light">Produts</Nav.Link>
                            <Nav.Link href="#help" className="text-light">Help</Nav.Link>
                            <Nav.Link href="#aboutUs" className="text-light">About us</Nav.Link>
                          </Nav>
                          <Form className="d-flex">
                          <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            style={{borderRadius:"0px"}}
                          />
                        <Button variant="outline-light" style={{borderRadius:"0px"}}>Search</Button>
                        </Form>
                        </Navbar.Collapse>
                  </Container>
      </Navbar>



            {/* card section where other components are called */}
            <Container  className="mt-5">
                  <Row>
                    <Col xs>
                    <Card className="p-4" style={{ 
                            width: '23rem', 
                            boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px",
                            borderRadius:"0px"
                            }}>
                            
                              {firstName? (message="Hello,"+" "+firstName, <Image />): message="Hello,"+" "+"there!"}
                        

                          <Card.Body style={{padding:"", height:""}}>
                          
                          <Card.Title style={{
                            textAlign:"center",
                            
                            }}>
                              <Name />
                          </Card.Title>

                          <Card.Text style={{
                          paddingTop:"10px",
                          }}>
                            <Description />
                            <Price />
                          </Card.Text>
                          </Card.Body>
                          </Card>
              
                    </Col>

        
                    <Col xs>
                          <Card className="p-4" style={{ 
                            width: '23rem', 
                            boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px",
                            borderRadius:"0px"
                            }}>
                            
                              {firstName? (message="Hello,"+" "+firstName, <Image2 />): message="Hello,"+" "+"there!"}
                        

                          <Card.Body style={{padding:"", height:""}}>
                          
                          <Card.Title style={{
                            textAlign:"center",
                            
                            }}>
                              <Name2 />
                          </Card.Title>

                          <Card.Text style={{
                          paddingTop:"10px",
                          }}>
                            <Description2 />
                            <Price2 />
                          </Card.Text>
                          </Card.Body>
                          </Card>
                    </Col>

                    
                    
                    <Col xs>
                    <Card className="p-4" style={{ 
                            width: '23rem', 
                            boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px",
                            borderRadius:"0px"
                            }}>
                            
                              {firstName? (message="Hello,"+" "+firstName, <Image3 />): message="Hello,"+" "+"there!"}
                        

                          <Card.Body style={{padding:"", height:""}}>
                          
                          <Card.Title style={{
                            textAlign:"center",
                            
                            }}>
                              <Name3 />
                          </Card.Title>

                          <Card.Text style={{
                          paddingTop:"10px",
                          }}>
                            <Description3 />
                            <Price3 />
                          </Card.Text>
                          </Card.Body>
                          </Card>
                
                    </Col>
                  </Row>

            </Container>



                 {/* Message section */}
                <Container  className="mt-3">
                  <Row>
                    <Col xs>
                    <Card className="p-4 " style={{ 
                            width: '23rem', 
                            boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px",
                            borderRadius:"0px"
                            }}>
                    
                          <Card.Body className="" style={{
                            padding:"10px",
                            }}>

                          <Card.Title style={{
                            textAlign:"center",
                            textTransform:"capitalize",
                            fontWeight:"normal"
                          }}>

                            {message}

                            </Card.Title>

                          </Card.Body>
                          </Card>
                        
                    </Col>

          
        
                    <Col xs>
                          <Card className="p-4 " style={{ 
                            width: '23rem', 
                            boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px",
                            borderRadius:"0px"
                            }}>
                    
                          <Card.Body className="" style={{
                            padding:"10px",
                            }}>

                          <Card.Title style={{
                            textAlign:"center",
                            textTransform:"capitalize",
                            fontWeight:"normal"
                          }}>

                            {message}

                            </Card.Title>

                          </Card.Body>
                          </Card>
                    </Col>

                    
                    
                    <Col xs>
                    <Card className="p-4 " style={{ 
                            width: '23rem', 
                            boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px",
                            borderRadius:"0px"
                            }}>
                    
                          <Card.Body className="" style={{
                            padding:"10px",
                            }}>

                          <Card.Title style={{
                            textAlign:"center",
                            textTransform:"capitalize",
                            fontWeight:"normal"
                          }}>

                            {message}

                            </Card.Title>

                          </Card.Body>
                    </Card>
                
                    </Col>
                  </Row>
            </Container>


  </div>

<div className="bg-primary text-light text-center" style={{height:"300px", marginTop:"50px", paddingTop:"20px"}}>Copyright @ DEMO 2023</div>
</> 
  );
}

export default App;
