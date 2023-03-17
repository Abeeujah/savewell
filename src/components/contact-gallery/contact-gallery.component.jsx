import { Container } from "react-bootstrap";
import "./contact-gallery.component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const galleryItems = [
  {
    id: 0,
    icon: faPhone,
    content: `+2349078989425`,
  },
  {
    id: 1,
    icon: faEnvelope,
    content: `savewell@gmail.com`,
  },
];

const ContactGallery = ({ propertyText }) => {
  return (
    <>
      <Container fluid={true} className="black-background py-3">
        <Container>
          <div className="gallery-container place-center">
            <h3 className="text-capitalize text-white">{propertyText || `need a direct line?`}</h3>
            <div className="gallery-items mb-3">
              {galleryItems.map(({ id, icon, content }) => (
                <div key={id} className="gallery-item gallery-item-color">
                  <FontAwesomeIcon icon={icon} size="2x" />
                  <p>{content}</p>
                </div>
              ))}
            </div>
          </div>
          <hr className="text-white mx-auto form-container" />
        </Container>
      </Container>
    </>
  );
};

export default ContactGallery;
