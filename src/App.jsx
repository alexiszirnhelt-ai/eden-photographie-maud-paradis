import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/global/Home";
import About from "./pages/global/About";
import Services from "./pages/global/Services";
import Portfolio from "./pages/global/Portfolio";
import Contact from "./pages/global/Contact";
import Mentions from "./pages/legales/Mentions";
import Politique from "./pages/legales/Politique";
import Termes from "./pages/legales/Termes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<Mentions />} />
        <Route path="/politique-de-confidentialite" element={<Politique />} />
        <Route path="/termes-et-conditions" element={<Termes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
