import { Link } from "react-scroll";
import { Footer } from "./components/footer/Footer";
import { HeaderEx } from "./components/header/Navbar/NavBar";
import { Hero } from "./components/hero/hero";
import { InfoSecction } from "./components/InfoSecction/InfoSecction";
import { InstagramButton } from "./components/InfoSecction/support/SupportSectionStyle";
import { RRSS } from "./components/GeneralButtons/RRSS/RRSS";

function App() {
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
        className="Up-button"/>
      {/* <Link
        to="footer"
        smooth={true}
        rel="noopener noreferrer"
        className="down-button"/> */}
    </>
  );
}

export default App;
