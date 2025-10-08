// import { LowDownBar } from "../Lowbar/LowDownBar";
import {
  Container,
  Wrapper,
  Left,
  Logo,
  Right,
  MenuItem,
  Middle,
  SearchInput,
  Img,
} from "./NavbarStyle";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

export const HeaderEx = () => {
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(true);
    setTimeout(() => searchInputRef.current?.focus(), 0);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Link
              to="hero"
              smooth={true}
              duration={600}
              offset={-80}
            >
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
            {/* <Link>
              <MenuItem>Promociones / Ofertas</MenuItem>
            </Link> */}
            <Link to="support" smooth={true} duration={1000} offset={-80}>
              <MenuItem>Soporte</MenuItem>
            </Link>
            <Link to="aboutus" smooth={true} duration={1000} offset={-80}>
              <MenuItem>Nosotros</MenuItem>
            </Link>
            
          </Middle>
          <Right ref={searchContainerRef}>
            {/* <MenuItem onClick={handleSearchClick}>Buscar</MenuItem>
            <SearchInput
              ref={searchInputRef}
              $show={showSearch}
              placeholder="Escribe aquí..."
            />
            <MenuItem>Mi Cuenta</MenuItem>
            <MenuItem>Carrito</MenuItem>
            <MenuItem>Idioma / Moneda</MenuItem> */}
            <Link to="countries" smooth={true} duration={600} offset={-80}>
              <MenuItem>Países Disponibles</MenuItem>
            </Link>
          </Right>
        </Wrapper>
      </Container>
      {/* <LowDownBar /> */}
    </>
  );
};
