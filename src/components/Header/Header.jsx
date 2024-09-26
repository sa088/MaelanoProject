import React, { useState } from 'react';
import { Navbar, Nav, Button, Container, Row, Col, Dropdown, InputGroup, Input, DropdownToggle, DropdownMenu, DropdownItem, NavbarBrand, NavbarToggler, NavItem, NavLink, Collapse } from 'reactstrap';
import styles from './Header.module.scss';
import MaelanoIcon from '../../assets/icons/MaelanoIcon.png';
import dropdownData from './headerOptionsData';
import CartIcon from '../../assets/icons/CartIcon.png';

const Header = () => {
  // States for handling dropdowns
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  // Toggle functions for dropdowns
  const toggleLanguageDropdown = () => setLanguageDropdownOpen(!languageDropdownOpen);
  const toggleCurrencyDropdown = () => setCurrencyDropdownOpen(!currencyDropdownOpen);
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // Toggle dropdowns individually
  const toggleDropdown = (index) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <>
      {/* Top bar */}
      <Container fluid className={`py-1 ${styles.headerTopBar}`}>
        <Row className="justify-content-between align-items-center">
          <Col className="d-flex">
            <span>Welcome to MAELANO, Have Happy Shopping</span>
          </Col>

          <Col className="d-flex justify-content-end">
            {/* Language Dropdown */}
            <Dropdown isOpen={languageDropdownOpen} toggle={toggleLanguageDropdown} className="mx-2">
              <DropdownToggle tag="a" caret className={`p-0 text-body text-decoration-none ${styles.customDropdown}`}>
                ENGLISH
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="#">English</DropdownItem>
                <DropdownItem href="#">Spanish</DropdownItem>
                <DropdownItem href="#">French</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            {/* Currency Dropdown */}
            <Dropdown isOpen={currencyDropdownOpen} toggle={toggleCurrencyDropdown} className="mx-2">
              <DropdownToggle tag="a" caret className={`p-0 text-body text-decoration-none ${styles.customDropdown}`}>
                US DOLLARS
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="#">US Dollars</DropdownItem>
                <DropdownItem href="#">Euro</DropdownItem>
                <DropdownItem href="#">British Pound</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
      </Container>

      {/* Main Navigation */}
      <Navbar color="dark" dark expand="lg" className={styles.headerNavbar}>
        <Container fluid className={styles.headerContainer}>
          <NavbarBrand href="#" className="p-0">
            <img src={MaelanoIcon} alt="Logo" className="bg-white p-2 px-1 rounded-3" />
          </NavbarBrand>

          <NavbarToggler onClick={toggle} />
          
          <Collapse isOpen={isOpen} navbar className={styles.navbarCollapse}>
            <Nav className={`${styles.navbarDropdowns}`} navbar >
              {dropdownData?.map((dropdown, index) => (
                <Dropdown 
                  nav
                  inNavbar
                  key={index}
                  isOpen={dropdownOpen[index] || false}
                  toggle={() => dropdown?.items?.length > 0 && toggleDropdown(index)}
                >
                  <DropdownToggle 
                    nav 
                    caret={dropdown?.items?.length > 0} // Only show caret if items exist
                    className={styles.customDropdown}
                  >
                    {dropdown?.title}
                  </DropdownToggle>
                  {dropdown?.items?.length > 0 && (
                    <DropdownMenu>
                      {dropdown?.items?.map((item, itemIndex) => (
                        <DropdownItem href={item?.link} key={itemIndex}>
                          {item?.label}
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  )}
                </Dropdown>
              ))}
            </Nav>

            <Nav className={styles.headerIcons} navbar>
              <NavItem>
                <NavLink href="#" className={styles.headerNavLinks}>
                  <i className="fa fa-solid fa-user"></i> Login/Register
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className={styles.headerNavLinks}>
                  <i className="fa fa-solid fa-truck"></i> Track your Order
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className={styles.headerNavLinkLast}>
                  <i className="fa fa-solid fa-phone"></i> Helpline +3-111-222-333
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>

      {/* Categories Bar */}
      <Container fluid className={`d-flex align-items-center justify-content-between py-0 text-white ${styles.headerCategories}`}>
        <Button color="dark" className={styles.categoryBtn}>
          <i className="fa fa-solid fa-list"></i> 
          <span>CATEGORIES</span>
        </Button>

        <InputGroup className={styles.inputGrp}>
          <Input
            type="text"
            placeholder="Looking for something specific?"
            className={styles.searchField}
          />
          <Button color="dark" className={styles.searchBtn}>
            <i className="fa fa-search d-block"></i>
          </Button>
        </InputGroup>

        <Nav className={styles.categoriesBarIcons}>
          <NavItem>
            <NavLink href="#" className="py-0 px-2 text-white">
              <i className="fa fa-regular fa-bell"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="py-0 px-2 text-white">
              <i className="fa fa-solid fa-gift"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="py-0 px-2 text-white">
              <i className="fa fa-heart"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className={styles.cartLink}>
              <div className={styles.cartIconWrapper}>
                <img src={CartIcon} alt="Cart Icon" className={styles.cartIconImg} />
                <span className={styles.cartAmount}>$00.00</span>
              </div>
              <p className={styles.cardText}>Cart</p>
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </>
  );
};

export default Header;
