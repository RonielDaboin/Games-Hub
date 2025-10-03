import { LowDownBar } from '../Lowbar/LowDownBar';
import { Container, Wrapper, Left, Logo, Right, MenuItem, Middle, SearchInput } from './NavbarStyle';
import { useEffect, useRef, useState  } from 'react';



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
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  


  return (
    <>
      <Container>
          <Wrapper>
              <Left>
                  <Logo>
                    <h3> Games Hub </h3>
                  </Logo>
              </Left>
              <Middle>
                    {/* <MenuItem>Home</MenuItem>
                    <MenuItem>Comprar</MenuItem>
                    <MenuItem>Vender</MenuItem>
                    <MenuItem>Productos</MenuItem>
                    <MenuItem>Promociones / Ofertas</MenuItem>
                    <MenuItem>Soporte</MenuItem>
                    <MenuItem>Nosotros</MenuItem> */}
              </Middle>
              <Right ref={searchContainerRef}>
                <MenuItem onClick={handleSearchClick}>Buscar</MenuItem>
                <SearchInput
                  ref={searchInputRef}
                  show={showSearch}
                  placeholder="Escribe aquí..."
                />
                <MenuItem>Mi Cuenta</MenuItem>
                <MenuItem>Carrito</MenuItem>
                <MenuItem>Idioma / Moneda</MenuItem>
              </Right>
          </Wrapper>
      </Container>
      <LowDownBar/>
    </>
  ) 
}
