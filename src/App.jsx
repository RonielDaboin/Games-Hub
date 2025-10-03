import { HeaderEx } from "./components/header/Navbar/NavBar";
import { Hero } from "./components/hero/hero";
import { FeaturedGames } from "./components/InfoSecction/InfoGames/FeaturedGames";

function App() {
  return (
    <>
      <HeaderEx />
      <Hero />
      <FeaturedGames />
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
