import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import {
  Container,
  Wrapper,
  Left,
  Logo,
  Right,
  MenuItem,
  Middle,
  Img,
  Hamburger,
  MobileMenu,
  MenuIconOpen,
  MenuIconClose,
} from "./NavbarStyle";

export const HeaderEx = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Link to="hero" smooth={true} duration={600} offset={-80}>
              <Logo>
                <Img
                  src="https://res.cloudinary.com/dra09b3f9/image/upload/v1759532761/pixelcut-export_-_2025-10-03T200556.362_nm20xj.png"
                  alt="Logo Games Hub"
                />
              </Logo>
            </Link>
          </Left>

          <Middle>
            <Link to="hero" smooth={true} duration={1000} offset={-80}>
              <MenuItem>Home</MenuItem>
            </Link>
            <Link to="buy" smooth={true} duration={1000} offset={-80}>
              <MenuItem>Comprar</MenuItem>
            </Link>
            <Link to="sell" smooth={true} duration={1000} offset={-80}>
              <MenuItem>Vender</MenuItem>
            </Link>
            <Link to="products" smooth={true} duration={1000} offset={-80}>
              <MenuItem>Productos</MenuItem>
            </Link>
            <Link to="support" smooth={true} duration={1000} offset={-80}>
              <MenuItem>Soporte</MenuItem>
            </Link>
            <Link to="aboutUs" smooth={true} duration={1000} offset={-80}>
              <MenuItem>Nosotros</MenuItem>
            </Link>
          </Middle>

          <Right>
            <Link to="countries" smooth={true} duration={600} offset={-80}>
              <MenuItem>Países Disponibles</MenuItem>
            </Link>
          </Right>


          <Hamburger onClick={toggleMenu}>
            {menuOpen ? <MenuIconClose /> : <MenuIconOpen />}
          </Hamburger>
        </Wrapper>
      </Container>


      <MobileMenu $open={menuOpen}>
        <Link onClick={toggleMenu} to="hero" smooth={true} duration={1000} offset={-80}>
          <MenuItem>Home</MenuItem>
        </Link>
        <Link onClick={toggleMenu} to="buy" smooth={true} duration={1000} offset={-80}>
          <MenuItem>Comprar</MenuItem>
        </Link>
        <Link onClick={toggleMenu} to="sell" smooth={true} duration={1000} offset={-80}>
          <MenuItem>Vender</MenuItem>
        </Link>
        <Link onClick={toggleMenu} to="products" smooth={true} duration={1000} offset={-80}>
          <MenuItem>Productos</MenuItem>
        </Link>
        <Link onClick={toggleMenu} to="support" smooth={true} duration={1000} offset={-80}>
          <MenuItem>Soporte</MenuItem>
        </Link>
        <Link onClick={toggleMenu} to="aboutus" smooth={true} duration={1000} offset={-80}>
          <MenuItem>Nosotros</MenuItem>
        </Link>
        <Link onClick={toggleMenu} to="countries" smooth={true} duration={600} offset={-80}>
          <MenuItem>Países Disponibles</MenuItem>
        </Link>
      </MobileMenu>
    </>
  );
};
