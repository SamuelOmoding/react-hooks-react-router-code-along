import React from "react";
import { Route, Router } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Router>
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Route>
</Router>
    </div>
  );
}

export default App;