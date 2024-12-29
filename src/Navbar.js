import React from 'react'
import {Navbar,Nav,Container,Button} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Navbar_1 = (prop) => {
  const product_ids=useSelector(state => state.Product_ids)
  const array_ids=(product_ids !='')?product_ids.split(','):product_ids


  return (
    <div className='App'>
      
    
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Ecomm</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
              {/*<Link to="/Home">Home</Link>*/}
             <Nav.Link href="/Home" >
              Home
            </Nav.Link>
            
            <Nav.Link href="#action2">Service</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
            <Nav.Link href="#" >
              Contact
            </Nav.Link>
            <Nav.Link href="#" >
              About
            </Nav.Link>
          </Nav>
{/* <Link to="/">Home</Link>*/}
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
            <Button className='me-3' variant="outline-danger">logout</Button>
            <Link to="/cart"> <a  className='btn btn-success'> Cart <sup>{array_ids.length}</sup></a></Link>
          {/* </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbar_1
