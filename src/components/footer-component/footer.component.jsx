import { Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

import "./footer.component.css";
import { Link } from "react-router-dom";

const FooterNavigation = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Container fluid={true} className="black-background py-3">
        <Container>
          <footer>
            <div className="footer-container footer-container-column">
              <div>
                <Nav.Link as={Link} to={"/"} className="text-white footer-link">
                  SaveWell
                </Nav.Link>
              </div>
              <div className="footer-container">
                <Nav.Link as={Link} to={"/projects"} className="p-1 text-white footer-link">
                  Projects
                </Nav.Link>
                <Nav.Link as={Link} to={"/about"} className="p-1 text-white footer-link">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to={"/contact"} className="p-1 text-white footer-link">
                  Contact
                </Nav.Link>
              </div>
              <div className="footer-container">
                <a
                  href="mailto:savewell@gmail.com"
                  className="p-1 text-white footer-link"
                >
                  <FontAwesomeIcon size="2x" icon={faEnvelope} />
                </a>
                <a
                  href="https://goo.gl/maps/QLbiH3VQ9irJxnYj6"
                  target="_blank"
                  rel="noreferrer"
                  className="p-1 text-white footer-link"
                >
                  <FontAwesomeIcon size="2x" icon={faLocationDot} />
                </a>
                <a href="tel:+2349078989425" className="p-1 text-white footer-link">
                  <FontAwesomeIcon size="2x" icon={faPhoneAlt} />
                </a>
              </div>
              <div className="footer-container text-white text-center">
                <p>Copyright &copy; {year} SaveWell Luxury Homes</p>
              </div>
            </div>
          </footer>
        </Container>
      </Container>
    </>
  );
};

export default FooterNavigation;
