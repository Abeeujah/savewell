import HeroComponent from "../../components/hero-component/hero.component";
import Portfolio from "../../components/portfolio/portfolio.component";
import Proposition from "../../components/proposition/propositon.component";
import Testimonial from "../../components/testimonial-component/testimonial.component";
import "./home.component.css";

const Home = () => {
  document.title = "SaveWell Luxury Homes";
  
  return (
    <>
      <HeroComponent />
      <Portfolio />
      <Proposition />
      <Testimonial />
    </>
  );
};

export default Home;
