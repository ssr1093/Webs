import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />

      {/* Floating Apply Now Button */}
      <a href="#contact" className="apply-now-button">
        <h3> Apply Now</h3>
      </a>
    </>
  );
}

export default App;
