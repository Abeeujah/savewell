import { Container } from "react-bootstrap";

import Image from "../../images/realtor-image.webp";

import "./testimonial.component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const testimonialData = [
  {
    id: 0,
    image: Image,
    name: "Mikal Bridges",
    feedback: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
    voluptates.`,
  },
  {
    id: 1,
    image: Image,
    name: "Kyle Kuzma",
    feedback: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
    voluptates.`,
  },
  {
    id: 2,
    image: Image,
    name: "Anthony Lamb",
    feedback: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
    voluptates.`,
  },
];

const Testimonial = () => {
  const [count, setCount] = useState(0);

  const countTruth = testimonialData.length;

  const decrementCount = () =>
    count === 0 ? setCount(countTruth - 1) : setCount(count - 1);
  const incrementCount = () =>
    count === countTruth - 1 ? setCount(0) : setCount(count + 1);

  return (
    <>
      <Container fluid={true} className="black-background py-5">
        <Container>
          <div className="text-white">
            <h4 className="fw-bold">What The World Says About US</h4>
            <p className="text-muted">Testimonials</p>
            <div className="testimonial-content">
              <button
                onClick={decrementCount}
                className="btn btn-lg main-background m-1 text-white port-link color-red"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <div className="testimony-container p-3 m-2 first-place">
                {testimonialData
                  .filter((testimony) => testimony.id === count)
                  .map((testimony) => (
                    <div key={testimony.id} className="slim-fit place-center">
                      <div className="m-1 p-1 place-center">
                        <div className="img-container">
                          <img
                            className="rounded-img"
                            src={testimony.image}
                            alt=""
                          />
                        </div>
                      </div>
                      <h5>{testimony.name}</h5>
                      <p className="text-center">
                        <FontAwesomeIcon icon={faQuoteLeft} />
                        {testimony.feedback}
                        <FontAwesomeIcon icon={faQuoteRight} />
                      </p>
                    </div>
                  ))}
              </div>
              <button
                onClick={incrementCount}
                className="btn btn-lg main-background m-1 text-white port-link color-red"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
          <hr className="text-white" />
        </Container>
      </Container>
    </>
  );
};

export default Testimonial;
