import { LowDownBar } from '../Lowbar/LowDownBar';
import { LowDownBarChannels } from '../Lowbar Channels/LowDownBarChannels';
import { Container, Wrapper, Left, Logo, Right, MenuItem } from './NavbarStyle';


export const HeaderEx = () => {
  return (
    <>
      <Container>
          <Wrapper>
              <Left>
                  <Logo>
                    <h3> Games Hub</h3>
                  </Logo>
              </Left>
                    <h1>Games</h1>
                    <h1>Services</h1>
                    <h1>Support</h1>
              <Right>
                  <MenuItem>Register</MenuItem>
                  <MenuItem>Sign In</MenuItem>
              </Right>
          </Wrapper>
      </Container>
      <LowDownBar/>
      {/* <LowDownBarChannels /> */}
    </>
  )
}
