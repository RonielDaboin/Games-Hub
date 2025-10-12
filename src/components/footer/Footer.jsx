import { Link } from "react-scroll";
import {
  Container,
  Copyright,
  Left,
  Right,
  Middle,
  Logo,
  WhatsApp,
  Discord,
  Tiktok,
  Instagram,
  Img,
  FooterBackground
} from "./FooterStyle";

export const Footer = () => {
  return (
    <>
    <FooterBackground>
      <Container id="footer">
        <Logo>
        <Link to="hero" smooth={true} duration={600} offset={-80}>
          <Img
            src="https://res.cloudinary.com/dra09b3f9/image/upload/v1759532761/pixelcut-export_-_2025-10-03T200556.362_nm20xj.png"
            alt="Logo Games Hub"
          />
        </Link>
          <div>
            Games Hub es una plataforma gamer segura donde puedes comprar,
            vender o intercambiar oro, tiempo de juego y saldo Blizzard.
            Conectamos jugadores de toda Latinoamérica con transacciones
            confiables, soporte personalizado y la mejor tasa del mercado.
          </div>
        </Logo>
        <Left>
          <h1>Navegación rápida</h1>
          <Link to="hero" smooth={true} duration={600} offset={-80}>
          <WhatsApp> Inicio </WhatsApp>
          </Link>
          <Link to="buy" smooth={true} duration={600} offset={-80}>
          <WhatsApp> Comprar </WhatsApp>
          </Link>
          <Link to="sell" smooth={true} duration={600} offset={-80}>
          <WhatsApp> Vender </WhatsApp>
          </Link>
          <Link to="products" smooth={true} duration={600} offset={-80}>
          <WhatsApp> Productos </WhatsApp>
          </Link>
          <Link to="support" smooth={true} duration={600} offset={-80}>
          <WhatsApp> Soporte </WhatsApp>
          </Link>
          <Link to="aboutUs" smooth={true} duration={600} offset={-80}>
          <WhatsApp> Nosotros </WhatsApp>
          </Link>
        </Left>
        <Middle>
          <h1>Soporte & Ayuda</h1>
          <h3>¿Necesitas ayuda?</h3>
          <Instagram> 💬 WhatsApp Soporte</Instagram>
          <Instagram> 💳 Estados de pago o transferencias </Instagram>
          <Instagram> 🪙 Detalles de compra/venta</Instagram>
          <Instagram> ✅ Verificación de cuentas</Instagram>
          <Instagram> 🤝 Asistencia personalizada</Instagram>
        </Middle>
        <Right>
          <h1>Síguenos</h1>
          <h3>Síguenos y únete a la comunidad</h3>
          <Instagram target="_blank" href="https://www.instagram.com/gameshublatam/"> Instagram – @gameshub</Instagram>
          <Instagram target="_blank" href="https://discord.gg/G4Btf7nm" > Discord – Comunidad oficial</Instagram>
          <Instagram target="_blank" href="https://www.tiktok.com/@gameshublatam" > TikTok – Tips y novedades</Instagram>
          <Instagram> WhatsApp – Soporte directo</Instagram>
        </Right>
      </Container>
      {/* <p>Privacy Policy | Terms of Service</p> */}
      <Copyright>
        <p>&copy; {new Date().getFullYear()} Games Hub. All rights reserved.</p>
        <p style={{cursor:'pointer'}}>Política de Privacidad | Términos de Servicio</p>
      </Copyright>
      </FooterBackground>
    </>
  );
};
