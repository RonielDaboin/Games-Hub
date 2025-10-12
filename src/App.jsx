import { Link } from "react-scroll";
import { Footer } from "./components/footer/Footer";
import { HeaderEx } from "./components/header/Navbar/NavBar";
import { Hero } from "./components/hero/hero";
import { InfoSecction } from "./components/InfoSecction/InfoSecction";
import { InstagramButton } from "./components/InfoSecction/support/SupportSectionStyle";

function App() {
  return (
    <>
      <HeaderEx />
      <Hero />
      <InfoSecction />
      <Footer />
      <a
        href="https://wa.me/12127365000?text=Hola,%20quiero%20más%20info!"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"/>
      <a
        target="_blank" href="https://www.instagram.com/gameshublatam/"
        rel="noopener noreferrer"
        className="Instagram-button"/>
      <a
        target="_blank" href="https://discord.gg/G4Btf7nm"
        rel="noopener noreferrer"
        className="Discord-button"/>
      <Link
        to="hero"
        smooth={true}
        rel="noopener noreferrer"
        className="Up-button"/>
      <Link
        to="footer"
        smooth={true}
        rel="noopener noreferrer"
        className="down-button"/>
    </>
  );
}

export default App;
