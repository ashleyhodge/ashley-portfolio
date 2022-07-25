import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route 
            path="/portfolio"
            element={<Portfolio />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App;