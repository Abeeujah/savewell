import { useState } from "react";

import { Col, Container, Alert, FormLabel, Row } from "react-bootstrap";

import "./contact-form.component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const defaultFormFields = {
  name: "",
  email: "",
  subject: "",
  phone: "",
  message: "",
};

const ContactForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const { name, email, subject, phone, message } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const messageBody = { name, email, subject, phone, message };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormFields({ ...defaultFormFields });
    try {
      const response = await fetch("/.netlify/functions/send-mail", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageBody),
      });
      const { status } = response;
      if (status === 200) {
        setSuccess(true);
      }
    } catch (err) {
      setFail(true);
    }
  };

  return (
    <>
      <Container fluid={true} className="white-background py-5">
        <Container>
          <div className="contact-form-container place-center">
            <h2 className="text-center text-capitalize">
              let's make your project the next big thing
            </h2>
            <div className="form-container">
              <form onSubmit={handleSubmit} action="">
                {success && (
                  <Alert variant="success">
                    Message Sent <FontAwesomeIcon icon={faCheckCircle} />
                  </Alert>
                )}
                {fail && (
                  <Alert variant="danger">
                    Message Sending Failed{" "}
                    <FontAwesomeIcon icon={faCircleExclamation} />
                  </Alert>
                )}
                <Row>
                  <Col md={6}>
                    <div className="mb-3">
                      <FormLabel>Name</FormLabel>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        required
                        onChange={handleChange}
                        value={name}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <FormLabel>Email</FormLabel>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        required
                        onChange={handleChange}
                        value={email}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <FormLabel>Subject</FormLabel>
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        required
                        onChange={handleChange}
                        value={subject}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <FormLabel>Phone</FormLabel>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        minLength={11}
                        maxLength={14}
                        required
                        onChange={handleChange}
                        value={phone}
                      />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="mb-3">
                      <FormLabel>Message</FormLabel>
                      <textarea
                        className="form-control"
                        name="message"
                        required
                        onChange={handleChange}
                        value={message}
                        rows="5"
                      />
                    </div>
                  </Col>
                </Row>
                <div className="pt-2 text-center">
                  <button
                    className="btn btn-lg text-white main-background hero-link color-red"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default ContactForm;
