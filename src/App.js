import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
// import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
// import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Confirmation from './pages/Confirmation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
// import './styles/App.css'; // Global styles


function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
