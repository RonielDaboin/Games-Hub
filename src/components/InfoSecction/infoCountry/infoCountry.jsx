import {
  Container,
  Left,
  Right,
  HeaderMain,
  Title,
  Content,
  Subtitle,
  Image,
  ImgCountry,
  TitleSection,
} from "./infoCountryStyle";
import { Element } from "react-scroll";

export const InfoCountry = () => {
  return (
    <>
    <Element name="countries" />
      <Container>
        <Left>
        <TitleSection>GAMES HUB LATAM</TitleSection>
          <HeaderMain>Países Disponibles para Compra - Venta </HeaderMain>
          <Title>Transacciones rápidas, seguras y sin fronteras</Title>
          <Content>
            En Games Hub, realizamos compras de oro y saldo Blizzard con pagos
            directos y confiables a través de nuestra plataforma de
            transferencias. Actualmente, ofrecemos operaciones en los siguientes
            países:
          </Content>
          <Content>
            <ImgCountry src="https://res.cloudinary.com/dra09b3f9/image/upload/v1759628540/16022959_imrz1g.png" alt='venezuela' /> <strong>Venezuela </strong> – Pagos mediante bolívares,
            transferencias locales o plataformas digitales.
          </Content>
          <Content>
            <ImgCountry src="https://res.cloudinary.com/dra09b3f9/image/upload/v1759628539/5372705_hso0k7.png" alt='colombia' /><strong>Colombia </strong>– Mediante transferencias bancarias en
            pesos colombianos.
          </Content>
          <Content>
            <ImgCountry src="https://res.cloudinary.com/dra09b3f9/image/upload/v1759628718/197586_zadcq0.png" alt='chile' /><strong>Chile </strong>– Pagos rápidos con transferencia en moneda local.
          </Content>
          <Content>
            <ImgCountry src="https://res.cloudinary.com/dra09b3f9/image/upload/v1759628538/323310_xwkjrf.png" alt='eeuu' /><strong>Estados Unidos </strong> – Pagos vía Paypal y otros métodos
            disponibles.
          </Content>
          <Content>
            <ImgCountry alt='peru' src='https://res.cloudinary.com/dra09b3f9/image/upload/v1759628292/197563_ihdqyc.png' /><strong>Perú</strong> – Transferencias bancarias en soles.
          </Content>
          <Content>
            <ImgCountry src="https://res.cloudinary.com/dra09b3f9/image/upload/v1759628539/197588_qxkbym.png" alt='ecuador' /><strong>Ecuador </strong>– Mediante transferencias en 
            moneda local.
          </Content>
          <Content>
            <ImgCountry src="https://res.cloudinary.com/dra09b3f9/image/upload/v1759628539/197504_mhcn3h.png" alt='bolivia' /><strong>Bolivia </strong>– Pagos rápidos con transferencia en moneda local.
          </Content>
          <Subtitle>
            Nos aseguramos de que cada transacción sea segura, verificada y al
            mejor valor del mercado, sin importar desde dónde operes. 📦 ¡Vende
            tu oro y recibe tu dinero real sin complicaciones!
          </Subtitle>
        </Left>
        <Right>
          <Image
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmtiOGVhanExOWhqeTF1Z2xuNXRiMDhlcmxiM25qdG5iZDNuN3kwMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U4FkC2VqpeNRHjTDQ5/giphy.gif"
            alt="sell section"
          />
        </Right>
      </Container>
    </>
  );
};
