
import { Container, Wrapper, MenuItem } from './LowDownBarStyles'

export const LowDownBar = () => {
  return (
    <Container>
      <Wrapper>
        <MenuItem>Home</MenuItem>
        <MenuItem>Comprar</MenuItem>
        <MenuItem>Vender</MenuItem>
        <MenuItem>Productos</MenuItem>
        <MenuItem>Promociones / Ofertas</MenuItem>
        <MenuItem>Soporte</MenuItem>
        <MenuItem>Nosotros</MenuItem>
      </Wrapper>
    </Container>
  );
};
