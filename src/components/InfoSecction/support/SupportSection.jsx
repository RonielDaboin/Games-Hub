import {
  Container,
  Left,
  Right,
  ImageBuy,
  HeaderMain,
  Title,
  Content,
  Subtitle,
  InstagramButton,
  WhatsappButton,
  DiscordButton,
  RRSS,
} from "./SupportSectionStyle";
import { Element } from "react-scroll";
export const SupportSection = () => {
  return (
    <>
        <Element name="support"/>
      <Container>
        <Left>
          {/* <ImageBuy src="https://res.cloudinary.com/dra09b3f9/image/upload/v1759637983/ChatGPT_Image_5_oct_2025_01_15_29_vf8c28.png" alt="buy section" /> */}
          {/* <ImageBuy src="" alt="buy section" /> */}
        </Left>
        <Right>
          <HeaderMain>Soporte y Atención al Cliente</HeaderMain>
          <Title>Siempre disponibles para ayudarte</Title>
          <Subtitle>
            En Games Hub, tu tranquilidad es lo más importante.
          </Subtitle>
          <Content>
            Nuestro equipo de soporte está disponible para resolver tus dudas,
            guiarte durante el proceso de compra / venta y asegurarte una
            experiencia rápida y sin complicaciones.
          </Content>
          <Title>¿Necesitas ayuda?</Title>
          <Content>
            <strong> 💳 Estados de pago o transferencias.</strong>
          </Content>
          <Content>
            <strong> 🪙 Detalles de compra de oro o saldo Blizzard.</strong>
          </Content>
          <Content>
            <strong>✅ Verificación de cuentas y métodos de pago.</strong>
          </Content>
          <Content>
            <strong>🤝 Soporte técnico y asistencia personalizada.</strong>
          </Content>
          <Subtitle> Estamos aquí para ayudarte en todo momento. </Subtitle>
          <Subtitle>
            {" "}
            Ya sea que necesites confirmar una transacción o resolver un
            detalle, nuestro equipo te responderá con la rapidez y seguridad que
            mereces.{" "}
          </Subtitle>
        <RRSS>
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
        </RRSS>
        </Right>
      </Container>
    </>
  );
};
