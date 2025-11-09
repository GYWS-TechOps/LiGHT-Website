import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Centers from "./pages/Centers";
import ContactUs from "./pages/ContactUs";
import Initiatives from "./pages/Initiatives";
import JoinUs from "./pages/JoinUs";
import Members from "./pages/Members";
import MediaCoverage from "./pages/MediaCoverage";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";

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