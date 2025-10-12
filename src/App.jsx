import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Footer } from "./components/footer/Footer";
import { HeaderEx } from "./components/header/Navbar/NavBar";
import { Hero } from "./components/hero/hero";
import { InfoSecction } from "./components/InfoSecction/InfoSecction";
import { RRSS } from "./components/GeneralButtons/RRSS/RRSS";
import "./index.css"; 

function App() {
  const [showButton, setShowButton] = useState(false);
  const pxParaMostrar = 300;

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > pxParaMostrar);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <HeaderEx />
      <Hero />
      <InfoSecction />
      <Footer />
      <RRSS />
      <Link
        to="hero"
        smooth={true}
        rel="noopener noreferrer"
        className={`Up-button ${showButton ? "visible" : ""}`}
        aria-label="Ir arriba"
      >
        <span className="sr-only">Ir arriba</span>
      </Link>
    </>
  );
}

export default App;
