import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./styles/App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/global/Home";

const About = lazy(() => import("./pages/global/About"));
const Services = lazy(() => import("./pages/global/Services"));
const Portfolio = lazy(() => import("./pages/global/Portfolio"));
const Contact = lazy(() => import("./pages/global/Contact"));
const Mentions = lazy(() => import("./pages/legales/Mentions"));
const Politique = lazy(() => import("./pages/legales/Politique"));
const Termes = lazy(() => import("./pages/legales/Termes"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div className="page-loader"><div className="page-loader-spinner"></div></div>}>
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
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
