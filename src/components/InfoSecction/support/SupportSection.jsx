
import { Container, Left, Right, ImageBuy, HeaderMain, Title, Content, Subtitle } from './SupportSectionStyle';



export const SupportSection = () => {
  return (
    <>
          <Container>
            <Left>
              <ImageBuy src="https://res.cloudinary.com/dra09b3f9/image/upload/v1759619805/pixelcut-export_-_2025-10-04T201639.332_gvainu.png" alt="buy section" />
            </Left>
            <Right>
            <HeaderMain>Soporte y Atención al Cliente</HeaderMain>
            <Title>Siempre disponibles para ayudarte</Title>
            <Subtitle> En Games Hub, tu tranquilidad es lo más importante. </Subtitle>
            <Content>Nuestro equipo de soporte está disponible para resolver tus dudas, guiarte durante el proceso de compra / venta y asegurarte una experiencia rápida y sin complicaciones.</Content>
            <Title>¿Necesitas ayuda?</Title>
            <Content> <strong> – Estados de pago o transferencias.</strong></Content>
            <Content> <strong> – Detalles de compra de oro o saldo Blizzard.</strong></Content>
            <Content> <strong>– Verificación de cuentas y métodos de pago.</strong></Content>
            <Content> <strong>– Soporte técnico y asistencia personalizada.</strong></Content>
            <Subtitle> Estamos aquí para ayudarte en todo momento. </Subtitle>
            <Subtitle> Ya sea que necesites confirmar una transacción o resolver un detalle, nuestro equipo te responderá con la rapidez y seguridad que mereces. </Subtitle>
            </Right>
          </Container> 
        </>
  )
}
