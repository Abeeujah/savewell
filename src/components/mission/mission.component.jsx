import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import Image from "../../images/mission-image.webp";

import "./mission.component.css";

const Mission = () => {
  return (
    <>
      <Container fluid={true} className="white-background pt-5 pb-3">
        <Container>
          <div className="vision-mobile-container mb-3">
            <div className="vision-mobile-img rounded-2 img-wrapper mb-3">
              <h4 className="text-capitalize fw-bold">our mission</h4>
              <img className="vision-image rounded-2 no-fit" src={Image} alt="Company Vision" />
            </div>
            <div className="vision-mobile-text mb-3">
              <p className="text-capitalize">
                Our mission is to make luxury homes accessible to everyone,
                regardless of their budget or location, making a difference in
                people's lives without sacrificing quality or luxury.
              </p>
              <Link
                className="btn btn-lg text-white main-background hero-link color-red"
                to={"/contact"}
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="vision-container">
            <div className="vision-img img-wrapper rounded-4 shadow mb-3">
              <img className="vision-image no-fit rounded-4" src={Image} alt="Company Vision" />
            </div>
            <div className="vision-text">
              <h4 className="text-capitalize fw-bold">our mission</h4>
              <p className="text-capitalize">
                Our mission is to make luxury homes accessible to everyone,
                regardless of their budget or location, making a difference in
                people's lives without sacrificing quality or luxury.
              </p>
              <Link
                className="btn btn-lg text-white main-background hero-link color-red"
                to={"/contact"}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Mission;
