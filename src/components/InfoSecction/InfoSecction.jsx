import { FeaturedGames } from "./InfoGames/FeaturedGames";
import { InfoCountry } from "./infoCountry/infoCountry";
import { BuySection } from "./buy/buySection";
import { SellSection } from "./sell/SellSection";
import { SupportSection } from "./support/SupportSection";
import { AboutUsSection } from "./AboutUs/AboutUsSection";


export const InfoSecction = () => {
  return (
    <>
        <FeaturedGames />
        <BuySection />
        <SellSection />
        <InfoCountry />
        <SupportSection />
        <AboutUsSection />
    </>
  )
}
