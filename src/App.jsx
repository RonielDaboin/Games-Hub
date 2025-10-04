import { HeaderEx } from "./components/header/Navbar/NavBar";
import { Hero } from "./components/hero/hero";
import { InfoSecction } from "./components/InfoSecction/InfoSecction";

function App() {
  return (
    <>
      <HeaderEx />
      <Hero />
      <InfoSecction />
      <a
        href="https://wa.me/12127365000?text=Hola,%20quiero%20más%20info!"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        WhatsApp
      </a>
    </>
  );
}

export default App;
