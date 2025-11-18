import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Mission from "./pages/OurMission";
// import HowWeHelp from "./pages/HowWeHelp";
// import Testimonials from "./pages/Testimonials";
import Contact from "./pages/ContactUs";



function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/mission" element={<Mission />} />
        {/* <Route path="/how-we-help" element={<HowWeHelp />} /> */}
        {/* <Route path="/testimonials" element={<Testimonials />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
