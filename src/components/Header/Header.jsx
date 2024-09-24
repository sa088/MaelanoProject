import React from 'react';
import { Navbar, Nav, FormControl, Button, Container, Row, Col, Dropdown, InputGroup } from 'react-bootstrap';
import styles from './Header.module.scss';
import MaelanoIcon from '../../assets/icons/MaelanoIcon.png';
import dropdownData from './headerOptionsData';

const Header = () => {
  return (
    <>
      {/* Top bar */}
      <Container fluid className={`py-1 ${styles.headerTopBar}`}>
        <Row className="justify-content-between align-items-center">
          <Col className="d-flex">
            <span>Welcome to MAELANO, Have Happy Shopping</span>
          </Col>
          
          <Col className="d-flex justify-content-end">
            {/* Simple Language Dropdown */}
            <Dropdown className="mx-2">
              <Dropdown.Toggle variant="link" id="dropdown-language" className={`p-0 text-body text-decoration-none ${styles.customDropdown}`}>
                ENGLISH
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">English</Dropdown.Item>
                <Dropdown.Item href="#">Spanish</Dropdown.Item>
                <Dropdown.Item href="#">French</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Simple Currency Dropdown */}
            <Dropdown className="mx-2">
              <Dropdown.Toggle variant="link" id="dropdown-currency" className={`p-0 text-body text-decoration-none ${styles.customDropdown}`}>
                US DOLLARS
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">US Dollars</Dropdown.Item>
                <Dropdown.Item href="#">Euro</Dropdown.Item>
                <Dropdown.Item href="#">British Pound</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>

      {/* Main Navigation */}
      <Navbar bg="dark" variant="dark" expand="lg" className={styles.headerNavbar}>
        <Container fluid>
          <Navbar.Brand href="#" className="p-0">
            <img src={MaelanoIcon} alt="Logo" className="bg-white p-2 px-1 rounded-3" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              {dropdownData?.map((dropdown, index) => (
                <Dropdown as={Nav.Item} key={index}>
                  <Dropdown.Toggle as={Nav.Link} className={styles.customDropdown}>
                    {dropdown?.title}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {dropdown?.items?.map((item, itemIndex) => (
                      <Dropdown.Item href={item?.link} key={itemIndex}>
                        {item?.label}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              ))}
            </Nav>

            <Nav className={`d-flex align-items-center ${styles.headerIcons}`}>
              <Nav.Link href="#" className="py-0 border-end text-white"><i className="fa fa-solid fa-user"></i>Login/Register</Nav.Link>
              <Nav.Link href="#" className="py-0 border-end text-white"><i className="fa fa-solid fa-truck"></i>Track your Order</Nav.Link>
              <Nav.Link href="#" className="py-0 text-white"><i className="fa fa-solid fa-phone"></i>Helpline +3-111-222-333</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Categories Bar */}
      <Container fluid className={`d-flex align-items-center justify-content-between py-0 text-white ${styles.headerCategories}`}>
        <Button variant="dark" className={styles.categoryBtn}>
          <i className="fa fa-solid fa-list"></i>
          CATEGORIES
        </Button>
        <InputGroup className={`me-3 ${styles.inputGrp}`}>  
          <FormControl
            type="text"
            placeholder="Looking for something specific?"
            className={styles.searchField}
          />
          <Button variant="dark" className={styles.searchBtn}>
            <i className="fa fa-search d-block"></i>
          </Button>
        </InputGroup>
        <Nav className={`d-flex align-items-center ${styles.headerIcons}`}>
          <Nav.Link href="#" className="py-0 px-2 text-white"><i className="fa fa-regular fa-bell"></i></Nav.Link>
          <Nav.Link href="#" className="py-0 px-2 text-white"><i className="fa fa-solid fa-gift"></i></Nav.Link>
          <Nav.Link href="#" className="py-0 px-2 text-white"><i className="fa fa-heart"></i></Nav.Link>
          <Nav.Link href="#" className="py-0 px-2 text-white"><i className="fa fa-shopping-cart"></i></Nav.Link>
        </Nav>
        {/* <div className={`d-flex align-items-center ${styles.headerIcons}`}>
            <Nav.Link href="#"><i className="fa fa-heart"></i></Nav.Link>
            <Nav.Link href="#"><i className="fa fa-shopping-cart"></i></Nav.Link>
            <Nav.Link href="#">Login/Register</Nav.Link>
        </div> */}
      </Container>
    </>
  );
};

export default Header;
