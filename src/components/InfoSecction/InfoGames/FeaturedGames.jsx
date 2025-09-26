
import { Section, Filters, Grid, Title, Card, Badge, Info, Price } from './InfoGamesStyle'


export const FeaturedGames = () => {
  return (
    <Section>
      <Title>JUEGOS DESTACADOS</Title>

      {/* <Filters>
        <button>PC</button>
        <button>CONSOLA</button>
        <button>MÓVIL</button>
      </Filters> */}

      <Grid>
        <Card>
          <Badge type="nuevo">NUEVO</Badge>
          <img src="https://res.cloudinary.com/dra09b3f9/image/upload/v1758852120/Screenshot_21_yw90nj.png" alt="WracraftI" />
          <Info>
            <h3>WarCraft Resmastered</h3>
            <p>ESTRATEGIA EN TIEMPO REAL</p>
          </Info>
        </Card>

        <Card>
          <Badge type="nuevo">NUEVO</Badge>
          <img src="https://res.cloudinary.com/dra09b3f9/image/upload/v1758852121/Screenshot_20_sjkqap.png" alt="WracraftII" />
          <Info>
            <h3>WarCraft Resmastered II</h3>
            <p>ESTRATEGIA EN TIEMPO REAL</p>
          </Info>
        </Card>

        <Card>
          <Badge type="nuevo">NUEVO</Badge>
          <img src="https://res.cloudinary.com/dra09b3f9/image/upload/v1758852121/Screenshot_19_auhrkw.png" alt="WracraftIII" />
          <Info>
            <h3>WarCraft Resmastered III</h3>
            <p>ESTRATEGIA EN TIEMPO REAL</p>
          <Price type="price">Comprar 30.99$ </Price>
          </Info>
        </Card>
      </Grid>
    </Section>
  );
};
