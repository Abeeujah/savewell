import ContactForm from "../../components/contact-form.jsx/contact-form.component";
import ContactGallery from "../../components/contact-gallery/contact-gallery.component";
import PagesHero from "../../components/pages-hero/pages-hero.component";

import Image from "../../images/contact-hero.webp";

import "./contact.component.css";

const heroProps = {
  image: Image,
  header: "get in touch with us",
  message: "we're here to help",
  white: "text-white",
};

const Contact = () => {
  document.title = "Contact - SaveWell Luxury Homes";
  
  return (
    <>
      <PagesHero heroProps={heroProps} />
      <ContactForm />
      <ContactGallery />
    </>
  );
};

export default Contact;
