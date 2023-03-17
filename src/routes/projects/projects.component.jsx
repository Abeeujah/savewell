import ContactGallery from "../../components/contact-gallery/contact-gallery.component";
import PagesHero from "../../components/pages-hero/pages-hero.component";
import ProjectGallery from "../../components/projects-gallery/projects-gallery.component";

import Image from "../../images/projects-hero.webp";

import "./projects.component.css";

const heroProps = {
  image: Image,
  header: "saveWell luxury homes",
  message: "Live in luxury, live in style",
  white: "text-white",
};

const propertyText = `own a property today`;

const Projects = () => {
  document.title = "Projects - SaveWell Luxury Homes";

  return (
    <>
      <PagesHero heroProps={heroProps} />
      <ProjectGallery />
      <ContactGallery propertyText={propertyText} />
    </>
  );
};

export default Projects;
