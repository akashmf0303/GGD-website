import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Background3D from "./components/Background3D";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      {/* Main wrapper ensures background is always behind */}
      <div className="relative min-h-screen flex flex-col bg-base text-dark isolate">
        {/* Vanta Fog 3D Background */}
        <Background3D />

        {/* Navbar fixed at the top */}
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>

        {/* Main content */}
        <main className="flex-1 relative z-10 px-4 md:px-8 lg:px-16 pt-24 pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer stays on top of background */}
        <footer className="relative z-10">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
