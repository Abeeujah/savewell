import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHelmetSafety,
  faSignal,
  faBuildingCircleCheck,
  faCity,
  faToolbox,
  faFileContract,
  faHouseChimneyUser,
  faPeopleRoof,
  faSackDollar,
  faBed,
} from "@fortawesome/free-solid-svg-icons";

import Developer from "../../images/estate-developer.webp";
import Facility from "../../images/facility-manager.webp";
import Property from "../../images/realtor-image.webp";

import "./proposition.component.css";

const developerArray = [
  {
    id: 1,
    icon: faHelmetSafety,
    text: "team of experts",
  },
  {
    id: 2,
    icon: faSignal,
    text: "excellence driven",
  },
  {
    id: 3,
    icon: faBuildingCircleCheck,
    text: "attention to details",
  },
  {
    id: 4,
    icon: faCity,
    text: "unparalled service",
  },
];

const managerArray = [
  {
    id: 1,
    icon: faToolbox,
    text: "maintenance and repairs",
  },
  {
    id: 2,
    icon: faFileContract,
    text: "manage client contracts",
  },
  {
    id: 3,
    icon: faHouseChimneyUser,
    text: "your home our priority",
  },
  {
    id: 4,
    icon: faPeopleRoof,
    text: "trust us to handle it all",
  },
];

const realtorArray = [
  {
    id: 1,
    icon: faBed,
    text: "your dream home with ease",
  },
  {
    id: 2,
    icon: faFileContract,
    text: "exceeding your expectations, always",
  },
  {
    id: 3,
    icon: faHouseChimneyUser,
    text: "personalized service, exceptional results",
  },
  {
    id: 4,
    icon: faSackDollar,
    text: "best price on the market",
  },
];

const serviceProposition = [
  {
    id: 1,
    image: Developer,
    muted: "Estate Developer",
    header: "Premier Real Estate Developer",
    paragraph: `Our team, consisting of architects, designers, and construction
    professionals, collaborate closely to ensure that our properties
    are aesthetically pleasing, functional, and also built to the
    highest quality and craftsmanship standards.`,
    tagLines: developerArray,
    ctaText: "Projects",
  },
  {
    id: 2,
    image: Facility,
    muted: "Facility Manager",
    header: "Facility Management At Its Finest",
    paragraph: `From overseeing regular maintenance and repairs to managing
    vendor contracts and relationships, our facility managers are
    committed to ensuring that our clients enjoy the highest levels
    of safety, comfort, and efficiency in their homes.`,
    tagLines: managerArray,
    ctaText: "Facilities",
  },
  {
    id: 3,
    image: Property,
    muted: "Realtor",
    header: "Your Real Estate Journey Made Simple",
    paragraph: `From identifying your needs to finding your dream home and negotiating the
    best deals, our realtors with deep understanding of the luxury real estate
    market work tirelessly to ensure that your experience with us is smooth,
    efficient, and satisfying.`,
    tagLines: realtorArray,
    ctaText: "Properties",
  },
];

const Proposition = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <Container fluid={true} className="white-background py-2">
        <Container>
          {serviceProposition.map((service) => (
            <div key={service.id} className="hero-container gap-5 py-3">
              <div>
                <img
                  className="hero-image-img rounded-4 shadow"
                  src={service.image}
                  alt="Estate Developer"
                />
              </div>
              <div
                className={classNames(
                  service.id % 2 === 0 ? "negative-order" : "",
                  "hero-text py-1"
                )}
              >
                <p className="text-muted">{service.muted}</p>
                <h3 className="mb-3 fw-bold">{service.header}</h3>
                <p className="mb-3">{service.paragraph}</p>
                {service.tagLines.map(({ id, icon, text }) => (
                  <h4 key={id} className="h5 fw-bold text-capitalize py-1 mb-3">
                    {" "}
                    <FontAwesomeIcon icon={icon} /> {text}
                  </h4>
                ))}
                <Link
                  className="btn btn-lg text-white main-background hero-link color-red"
                  to={"/projects"}
                >
                  {service.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </Container>
      </Container>
    </>
  );
};

export default Proposition;
