import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faLocationDot,
  faSignHanging,
} from "@fortawesome/free-solid-svg-icons";

import "./project-component.css";

const ProjectComponent = ({ projectsProps }) => {
  return (
    <>
      {projectsProps.map(({ id, image, price, plot, name, location }) => (
        <div
          key={id}
          className="project-component-container col-md-6 col-lg-4 mb-3"
        >
          <div className="rounded-2 img-wrapper">
            <img
              className="rounded-2 proj-img mb-1"
              src={image}
              alt="Real Estate Property"
            />
          </div>
          <h3 className="h4 fw-bold mb-1">₦{price}</h3>
          <p className="mb-1 text-capitalize">
            <FontAwesomeIcon icon={faSignHanging} /> plot size {plot}
          </p>
          <p className="mb-1 text-capitalize">
            <FontAwesomeIcon icon={faCity} /> {name}
          </p>
          <p className="mb-1 text-capitalize">
            <FontAwesomeIcon icon={faLocationDot} /> {location}
          </p>
        </div>
      ))}
    </>
  );
};

export default ProjectComponent;
