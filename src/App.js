import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route
            path="/ashley-portfolio"
            element={<Home />}
          />
          <Route 
            path="/portfolio"
            element={<Portfolio />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/resume"
            element={<Resume />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App;