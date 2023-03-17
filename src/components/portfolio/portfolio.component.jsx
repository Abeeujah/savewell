import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

import Image from "../../images/projects-showcase.webp";
import ImageM from "../../images/project-showcase.webp";

import "./portfolio.component.css";

const Portfolio = () => {
  return (
    <>
      <Container fluid={true} className="black-background">
        <Container>
          <div className="pt-4">
            <div className="row">
              <div className="col-xs-12 col-lg-2 centroid mb-3">
                <h2 className="rotate-header text-white">
                  Our <br className="d-md-none d-lg-block" /> Projects
                </h2>
                <Link
                  className="btn btn-lg main-background text-white port-link color-red"
                  aria-label="Projects"
                  to={"/projects"}
                >
                  <FontAwesomeIcon icon={faCircleArrowRight} />
                </Link>
              </div>
              <div className="col-xs-12 col-md-6 col-lg-5 mb-3 rounded-4 img-wrapper">
                <img
                  className="rounded-4 no-fit"
                  src={Image}
                  alt="Project One"
                />
              </div>
              <div className="col-xs-12 col-md-6 col-lg-5 mb-3 rounded-4 img-wrapper">
                <img
                  className="rounded-4 no-fit"
                  src={ImageM}
                  alt="Project Two"
                />
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Portfolio;
