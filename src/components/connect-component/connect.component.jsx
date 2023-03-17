import { Container } from "react-bootstrap";
import "./connect.component.css";
import { Link } from "react-router-dom";

const ConnectComponent = () => {
  return (
    <>
      <Container fluid={true} className="py-5 white-background">
        <Container>
          <div className="space-between">
            <h5 className="fw-bold text-capitalize">let's make your project the next big thing</h5>
            <Link
              className="btn btn-lg text-white main-background hero-link color-red"
              to={'/contact'}
            >
              Contact us
            </Link>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default ConnectComponent;
