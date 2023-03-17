import { Container } from "react-bootstrap";
import "./about-gallery.component.css";
import { Link } from "react-router-dom";

const exploreItems = [
  {
    id: 0,
    content: "meet our team",
    link: "/team",
  },
  {
    id: 1,
    content: "contact us",
    link: "/contact",
  },
];

const AboutGallery = () => {
  return (
    <>
      <Container fluid={true} className="black-background py-3">
        <Container>
          <div className="gallery-container place-center">
            <h3 className="text-capitalize text-white">keep exploring</h3>
            <div className="gallery-items mb-3">
              {exploreItems.map(({ link, content }) => (
                <Link key={content} to={link} className="gallery-item gallery-item-color text-capitalize text-decoration-none">
                  <p>{content}</p>
                </Link>
              ))}
            </div>
          </div>
          <hr className="text-white mx-auto form-container" />
        </Container>
      </Container>
    </>
  );
};

export default AboutGallery;
