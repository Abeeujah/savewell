import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import "./navbar-component.css";
import { useRef } from "react";

const NavigationBar = () => {
  const expand = "md";

  const offCanvasRef = useRef();

  const closeOffCanvas = () => offCanvasRef.current.backdrop.click();
  
  return (
    <>
      <Navbar
        key={expand}
        expand={expand}
        ref={offCanvasRef}
        // bg="dark"
        variant="dark"
        collapseOnSelect
        className="black-background"
      >
        <Container>
          <Navbar.Brand
            as={Link}
            to={"/"}
            className="nav-white navbar-brand"
          >
            SaveWell
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            className="main-background"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="text-white" id={`offcanvasNavbarLabel-expand-${expand}`}>
                SaveWell
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link
                  as={Link}
                  to={"/projects"}
                  className="nav-white"
                  onClick={closeOffCanvas}
                >
                  Projects
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={"/about"}
                  className="nav-white"
                  onClick={closeOffCanvas}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={"/contact"}
                  className="nav-white"
                  onClick={closeOffCanvas}
                >
                  Contact
                </Nav.Link>
              </Nav>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to={"/projects"}
                    className="btn btn-lg black-background nav-cta"
                    onClick={closeOffCanvas}
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
