
import {  Container, HeaderMain, Subtitle, Title, Left, Right, ImageBuy, Content, Button } from "./buySectionStyle"
import { Element } from "react-scroll";



export const BuySection = () => {
  return (
    <>
    <Element name="buy" />
      <Container>
        <Left>
          <ImageBuy src="https://res.cloudinary.com/dra09b3f9/image/upload/v1759619805/pixelcut-export_-_2025-10-04T201639.332_gvainu.png" alt="buy section" />
        </Left>
        <Right>
        <HeaderMain>Compra Juegos, Tiempo de Juego y Oro para World of Warcraft</HeaderMain>
        <Title>Todo lo que necesitas para llevar tu experiencia de juego al siguiente nivel</Title>
        <Content> <strong>Videojuegos oficiales</strong> – Consigue las últimas expansiones y títulos para disfrutar de todo el contenido disponible. </Content>
        <Content> <strong>Tiempo de juego</strong>  – Renueva tu suscripción de manera rápida y segura, sin complicaciones. </Content>
        <Content> <strong>Oro dentro del juego</strong> – Aumenta tus recursos y alcanza tus objetivos más rápido con oro 100% confiable. </Content>
        <Subtitle> En Games Hub ponemos a tu disposición una selección completa de productos digitales para World of Warcraft </Subtitle>
        </Right>
        <Button>Video Explicativo</Button>
      </Container> 
    </>
  )
}
