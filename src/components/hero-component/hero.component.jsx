import { Container } from "react-bootstrap";
import FrontDesk from "../../images/savewell-hero.webp";

import "./hero.component.css";
import { Link } from "react-router-dom";

const HeroComponent = () => {
  return (
    <>
      <Container fluid={true} className="white-background">
        <Container>
          <div className="">
            <div className="hero-container full-height p-1 pb-3">
              <div className="hero-text">
                <h1 className="h1 display-3 text-black fw-bold">
                  Luxury is Affordable, <br /> Let's help you SaveWell
                </h1>
                <p className="text-black">
                  Browse through our project catalogue for the property that
                  suits your need
                </p>
                <Link
                  to={"/projects"}
                  className="btn btn-lg text-white main-background hero-link color-red"
                >
                  Projects
                </Link>
              </div>
              <div className="hero-image">
                <img
                  className="hero-image-img"
                  src={FrontDesk}
                  alt="Organization Front Desk"
                />
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default HeroComponent;
