import { Container } from "react-bootstrap";
import "./overview.component.css";

const OverView = () => {
  return (
    <>
      <Container fluid={true} className="white-background py-3">
        <Container>
          <div className="overview-container text-black">
            <h2 className="fw-bold">SaveWell</h2>
            <p>
              SaveWell Luxury Homes is dedicated to offering affordable luxury
              homes and is recognized as a leading real estate firm in the
              industry. Our goal is to help you find the home of your dreams
              that perfectly fits your budget. Our team of experts takes pride
              in delivering homes that are of the highest quality and exceed
              your expectations.
            </p>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default OverView;
