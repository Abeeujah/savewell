import "./about.component.css";

import PagesHero from "../../components/pages-hero/pages-hero.component";
import OverView from "../../components/overview-component/overview.component";
import CompanyStats from "../../components/stats/stats.components";
import Vision from "../../components/vision/vision.component";
import Mission from "../../components/mission/mission.component";
import AboutGallery from "../../components/about-gallery/about-gallery.component";

import Image from "../../images/about-hero.webp";

const heroProps = {
  image: Image,
  header: "saveWell luxury homes",
  message: "where luxury meets comfort",
};

const About = () => {
  document.title = "About - SaveWell Luxury Homes";
  
  return (
    <>
      <PagesHero heroProps={heroProps} />
      <OverView />
      <CompanyStats />
      <Mission />
      <Vision />
      <AboutGallery />
    </>
  );
};

export default About;
