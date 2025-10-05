import {
  Container,
  HeaderMain,
  Subtitle,
  Title,
  Left,
  Right,
  Image,
  Content,
} from "./SellSectionStyle";

export const SellSection = () => {
  return (
    <>
      <Container>
        <Left>
          <HeaderMain>
            Convierte tu oro y saldo de Blizzard en dinero real
          </HeaderMain>
          <Title>De forma segura y confiable</Title>
          <Content>
            Si tienes oro de World of Warcraft, tiempo de juego o saldo de
            Blizzard, ahora puedes transformarlo en dinero real de manera
            sencilla y segura. Nuestro servicio está diseñado para ofrecerte
            tranquilidad, rapidez y soporte en todo el proceso, ayudándote a
            monetizar tus recursos de juego con confianza.
          </Content>
          <Subtitle>
            En Games Hub te ofrecemos una plataforma confiable para que
            transformes tus productos digitales en efectivo. 
          </Subtitle>
        </Left>
        <Right>
          <Image
            src="https://res.cloudinary.com/dra09b3f9/image/upload/v1759626535/pixelcut-export_-_2025-10-04T220843.178_wfovsa.png"
            alt="sell section"
          />
        </Right>
      </Container>
    </>
  );
};
