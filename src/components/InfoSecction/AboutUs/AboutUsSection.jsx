import {
  Container,
  Left,
  Right,
  HeaderMain,
  Title,
  Subtitle,
  Content,
  RRSS,
  InstagramButton,
  WhatsappButton,
  DiscordButton,
} from "./AboutUsSectionStyle";

import React from "react";

export const AboutUsSection = () => {
  return (
    <>
      <Container>
        <Right>
          <HeaderMain>Sobre Games Hub</HeaderMain>
          <Title>🛡️Un espacio seguro y confiable para jugadores como tú</Title>
          <Subtitle>
            En Games Hub creemos que la comunidad gamer merece un lugar donde
            pueda intercambiar sus productos digitales de manera sencilla,
            rápida y segura.
          </Subtitle>
          <Content>
            Nuestra plataforma conecta a jugadores que desean vender sus
            recursos con quienes buscan comprarlos, todo bajo un entorno
            confiable y transparente.
          </Content>
        </Right>
        <Left>
        <Title>✨Nos apasiona crear un mercado donde cada usuario pueda:</Title>
          <Content>
            <strong>💰Acceder a las mejores ofertas digitales.</strong>
          </Content>
          <Content>
            <strong>🛡️Vender sus productos con total seguridad.</strong>
          </Content>
          <Content>
            <strong>🌍Ser parte de una comunidad gamer en crecimiento.</strong>
          </Content>
          <Content>
            <strong>🤝 Contar con nuestra ayuda en todo momento.</strong>
          </Content>
          <Subtitle> Estamos aquí para ayudarte en todo momento. </Subtitle>
          <Subtitle>
            Porque en Games Hub, más que un marketplace, somos un punto de
            encuentro para gamers que comparten la misma pasión. 🎮✨
          </Subtitle>
        </Left>  
      </Container>
    </>
  );
};

{/* <RRSS>
  <InstagramButton
    href="https://www.instagram.com/gameshub.oficial/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Instagram
  </InstagramButton>
  <WhatsappButton
    href="https://wa.me/573053606634"
    target="_blank"
    rel="noopener noreferrer"
  >
    WhatsApp
  </WhatsappButton>
  <DiscordButton
    href="https://discord.gg/4ZtHhYvG"
    target="_blank"
    rel="noopener noreferrer"
  >
    Discord
  </DiscordButton>
</RRSS> */}