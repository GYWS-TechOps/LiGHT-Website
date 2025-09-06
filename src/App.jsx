import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Centers from "./pages/Centers";
import Contactus from "./pages/Contactus";
import Initiatives from "./pages/Initiatives";
import JoinUs from "./pages/JoinUs";
import Members from "./pages/Members";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
<<<<<<< HEAD
      <div className="p-0">
=======
      <div >
>>>>>>> origin/Home
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/centers" element={<Centers />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
