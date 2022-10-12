import { Button } from 'react-bootstrap';
import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Register from './Pages/Auth/register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

<>
{/* <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Another action
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            Separated link
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> */}
{/* <div className='container'>
<div className='row'>
  <h1>Juki</h1>
  <Button type ='submit' variant='danger' style={{width: 60}}>LOGIN</Button> 
</div>  
</div>     */}
</>