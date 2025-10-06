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
        href="https://wa.me/12127365000?text=Hola,%20quiero%20más%20info!"
        target="_blank"
        rel="noopener noreferrer"
        className="Instagram-button"/>
      <a
        href="https://wa.me/12127365000?text=Hola,%20quiero%20más%20info!"
        target="_blank"
        rel="noopener noreferrer"
        className="Discord-button"/>
    </>
  );
}

export default App;
