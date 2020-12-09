import React from 'react'
import { BrowserRouter as Router,Switch,Route,useParams,} from 'react-router-dom';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';

export class App extends React.Component {

  render(){
    return (
      <div>
         <div className="row">
          <div className="col-md-12">
          <Router>
            <Navbar bg="dark" variant="dark" extend="lg" sticky="top">
              <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about-us">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Navbar>
          </Router>
          </div>  
        </div> 
      </div>
    )
  
export default App;