import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import Image from "../../images/vision-image.webp";

import "./vision.component.css";

const Vision = () => {
  return (
    <>
      <Container fluid={true} className="white-background pb-5">
        <Container>
          <div className="vision-mobile-container mb-3">
            <div className="vision-mobile-img rounded-2 img-wrapper mb-3">
              <img className="vision-image rounded-2 no-fit" src={Image} alt="Company Vision" />
              <h4 className="text-capitalize fw-bold">our vision</h4>
            </div>
            <div className="vision-mobile-text mb-3">
              <p className="text-capitalize">
                our vision is to revolutionize the home building industry by
                making luxury homes affordable and accessible to everyone,
                helping people realize their dreams of owning a beautiful and
                high-quality home, without compromising on affordability and
                sustainability.
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
            <div className="vision-text">
              <h4 className="text-capitalize fw-bold">our vision</h4>
              <p className="text-capitalize">
                our vision is to revolutionize the home building industry by
                making luxury homes affordable and accessible to everyone,
                helping people realize their dreams of owning a beautiful and
                high-quality home, without compromising on affordability and
                sustainability.
              </p>
              <Link
                className="btn btn-lg text-white main-background hero-link color-red"
                to={"/contact"}
              >
                Contact Us
              </Link>
            </div>
            <div className="vision-img img-wrapper rounded-4 shadow mb-3">
              <img className="vision-image no-fit rounded-4" src={Image} alt="Company Vision" />
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Vision;
