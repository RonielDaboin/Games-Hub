
import { Section, Filters, Grid, Title, Card, Badge, Info, Price } from './InfoGamesStyle'
import { Element } from 'react-scroll';


export const FeaturedGames = () => {
  return (
    <Section>
      <Element name='products'/>
      <Title>JUEGOS DISPONIBLES</Title>
       <Filters>
        {/* <button>MÁS VENDIDOS</button>
        <button>NUEVOS</button>
        <button>OFERTA</button> */}
      </Filters> 

      <Grid>
        <Card>
          <Badge type="nuevo">NUEVO</Badge>
          <img src="https://res.cloudinary.com/dra09b3f9/image/upload/v1758852120/Screenshot_21_yw90nj.png" alt="WracraftI" />
          <Info>
            <h3>WarCraft Resmastered</h3>
            <p>ESTRATEGIA EN TIEMPO REAL</p>
            {/* <Price type="nuevo">Comprar 30.99$ </Price> */}
          </Info>
        </Card>

        <Card>
          <Badge type="nuevo">NUEVO</Badge>
          <img src="https://res.cloudinary.com/dra09b3f9/image/upload/v1758852121/Screenshot_20_sjkqap.png" alt="WracraftII" />
          <Info>
            <h3>WarCraft Resmastered II</h3>
            <p>ESTRATEGIA EN TIEMPO REAL</p>
            {/* <Price type="nuevo">Comprar 30.99$ </Price> */}
          </Info>
        </Card>

        <Card>
          <Badge type="nuevo">NUEVO</Badge>
          <img src="https://res.cloudinary.com/dra09b3f9/image/upload/v1758852121/Screenshot_19_auhrkw.png" alt="WracraftIII" />
          <Info>
            <h3>WarCraft Resmastered III</h3>
            <p>ESTRATEGIA EN TIEMPO REAL</p>
          {/* <Price type="nuevo">Comprar 30.99$ </Price> */}
          </Info>
        </Card>

        <Card>
          <Badge type="nuevo">NUEVO</Badge>
          <img src="https://res.cloudinary.com/dra09b3f9/image/upload/v1760242109/pixelcut-export_-_2025-10-12T010822.805_snihhu.png" alt="WracraftI" />
          <Info>
            <h3>World Of Warcraft Midnight</h3>
            <p>MMORPG</p>
            {/* <Price type="nuevo">Comprar 30.99$ </Price> */}
          </Info>
        </Card>

        <Card>
          <Badge type="nuevo">NUEVO</Badge>
          <img src="https://res.cloudinary.com/dra09b3f9/image/upload/v1760242417/pixelcut-export_-_2025-10-12T011331.642_xdspp1.png" alt="WracraftII" />
          <Info>
            <h3>World Of Warcraft: Mists Of Pandaria Classic</h3>
            <p>MMORPG</p>
            {/* <Price type="nuevo">Comprar 30.99$ </Price> */}
          </Info>
        </Card>

         <Card>
          <Badge type="nuevo">NUEVO</Badge>
          <img src="https://res.cloudinary.com/dra09b3f9/image/upload/v1760242490/pixelcut-export_-_2025-10-12T011446.093_mxqwmf.png" alt="WracraftIII" />
          <Info>
            <h3>World Of Warcraft</h3>
            <p>MMORPG</p>
          {/* <Price type="nuevo">Comprar 30.99$ </Price> */}
          </Info>
        </Card>
        <Card>
          <Badge type="nuevo">NUEVO</Badge>
          <img src="https://res.cloudinary.com/dra09b3f9/image/upload/v1760242852/Screenshot_24_qg4gyu.png" alt="WracraftI" />
          <Info>
            <h3>World Of Warcraft: The War Within</h3>
            <p>MMORPG</p>
            {/* <Price type="nuevo">Comprar 30.99$ </Price> */}
          </Info>
        </Card>

        <Card>
          <Badge type="nuevo">NUEVO</Badge>
          <img src="https://res.cloudinary.com/dra09b3f9/image/upload/v1760243345/6ff6232a-b9a5-4828-9dfc-f080effa6c96.png" alt="WracraftII" />
          <Info>
            <h3>Diablo IV: Vessel Of Hatred</h3>
            <p>ROL Y ACCIÓN</p>
            {/* <Price type="nuevo">Comprar 30.99$ </Price> */}
          </Info>
        </Card>

        <Card>
          <Badge type="nuevo">NUEVO</Badge>
          <img src="https://res.cloudinary.com/dra09b3f9/image/upload/v1760243558/ae9e7768-e56c-4c25-8a8f-f77ed94f3fd1.png" alt="WracraftIII" />
          <Info>
            <h3>Diablo III</h3>
            <p>ROL Y ACCIÓN</p>
          {/* <Price type="nuevo">Comprar 30.99$ </Price> */}
          </Info>
        </Card>
        <Card>
          <Badge type="nuevo">NUEVO</Badge>
          <img src="https://res.cloudinary.com/dra09b3f9/image/upload/v1760294955/e2fbcdf5-a4e4-4ece-a5c1-003486fc13f2.png" alt="WracraftI" />
          <Info>
            <h3>Diablo II: Resurrected</h3>
            <p>ROL Y ACCIÓN</p>
            {/* <Price type="nuevo">Comprar 30.99$ </Price> */}
          </Info>
        </Card>

      {/*
        <Card>
          <Badge type="nuevo">NUEVO</Badge>
          <img src="https://res.cloudinary.com/dra09b3f9/image/upload/v1758852121/Screenshot_20_sjkqap.png" alt="WracraftII" />
          <Info>
            <h3>WarCraft Resmastered II</h3>
            <p>ESTRATEGIA EN TIEMPO REAL</p>
            <Price type="nuevo">Comprar 30.99$ </Price>
          </Info>
        </Card>

        <Card>
          <Badge type="nuevo">NUEVO</Badge>
          <img src="https://res.cloudinary.com/dra09b3f9/image/upload/v1758852121/Screenshot_19_auhrkw.png" alt="WracraftIII" />
          <Info>
            <h3>WarCraft Resmastered III</h3>
            <p>ESTRATEGIA EN TIEMPO REAL</p>
          <Price type="nuevo">Comprar 30.99$ </Price>
          </Info>
        </Card> */}
      </Grid>
    </Section>
  );
};
