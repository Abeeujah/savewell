import { Container } from "react-bootstrap";
import "./pages-hero.component.css";

const PagesHero = ({ heroProps }) => {
  const { image, header, message, white } = heroProps;

  const divStyle = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
  };

  return (
    <>
      <Container fluid={true} className="white-background full-height text-black place-center" style={divStyle}>
        <Container>
          <div className="pages-hero-container place-center">
            <div className={`text-center text-capitalize ${white}`}>
                <h1 className="text-capitalize">{header}</h1>
                <p>{message}</p>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default PagesHero;
