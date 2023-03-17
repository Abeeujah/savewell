import { Container } from "react-bootstrap";
import "./projects-gallery.component.css";
import ProjectComponent from "../project-component/project-component";

import Bluebell from "../../images/bluebell-estate.webp";
import Orchid from "../../images/orchid-estate.webp";
import Daisy from "../../images/daisy-estate.webp";
import Snowdrop from "../../images/snowdrop-estate.webp";
import Lillyville from "../../images/lillyville-estate.webp";

const projectsProps = [
  {
    id: 0,
    image: Bluebell,
    price: `4,200,000`,
    plot: `500Sqm`,
    name: `blueBell estate`,
    location: `idu`,
  },
  {
    id: 1,
    image: Orchid,
    price: `6,000,000`,
    plot: `500Sqm`,
    name: `orchid estate`,
    location: `lugbe`,
  },
  {
    id: 2,
    image: Snowdrop,
    price: `7,000,000`,
    plot: `500Sqm`,
    name: `snowDrop estate`,
    location: `lugbe`,
  },
  {
    id: 3,
    image: Daisy,
    price: `7,500,000`,
    plot: `500Sqm`,
    name: `daisy estate`,
    location: `lugbe`,
  },
  {
    id: 4,
    image: Lillyville,
    price: `20,000,000`,
    plot: `500Sqm`,
    name: `lillyville estate`,
    location: `jabi`,
  },
];

const ProjectGallery = () => {
  return (
    <>
      <Container fluid={true} className="white-background py-3 text-black">
        <Container>
            <h2 className="text-center mb-3 fw-bold">Projects</h2>
            <div className="row justify-content-center">
                <ProjectComponent projectsProps={projectsProps} />
            </div>
        </Container>
      </Container>
    </>
  );
};

export default ProjectGallery;