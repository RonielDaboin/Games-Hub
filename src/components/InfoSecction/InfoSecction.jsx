import { FeaturedGames } from "./InfoGames/FeaturedGames";
import { InfoCountry } from "./infoCountry/infoCountry";
import { BuySection } from "./buy/buySection";
import { SellSectionStyle } from "./sell/SellSectionStyle";
import { SupportSection } from "./support/SupportSection";
import { AboutUsSection } from "./aboutUs/AboutUsSection";


export const InfoSecction = () => {
  return (
    <>
        <FeaturedGames />
        <BuySection />
        <SellSectionStyle />
        <InfoCountry />
        <SupportSection />
        <AboutUsSection />
    </>
  )
}
