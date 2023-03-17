import { Routes, Route } from "react-router-dom";

import NavigationBar from "./components/navbar-component/navbar-component";
import FooterNavigation from "./components/footer-component/footer.component";
import Home from "./routes/home/home.component";
import Contact from "./routes/contact/contact.component";
import About from "./routes/about/about.component";
import Projects from "./routes/projects/projects.component";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ScrollTop from "./scrollTop";

function App() {
  return (
    <div>
      <NavigationBar />
      <ScrollTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </ScrollTop>
      <FooterNavigation />
    </div>
  );
}

export default App;
