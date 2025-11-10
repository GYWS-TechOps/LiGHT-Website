import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Centers from "./pages/Centers.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Initiatives from "./pages/Initiatives.jsx";
import JoinUs from "./pages/JoinUs.jsx";
import Members from "./pages/Members.jsx";
import MediaCoverage from "./pages/MediaCoverage.jsx";
import Gallery from "./pages/Gallery.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/centers" element={<Centers />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="/members" element={<Members />} />
          <Route path="/mediacoverage" element={<MediaCoverage />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;