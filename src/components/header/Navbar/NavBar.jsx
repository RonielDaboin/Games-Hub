import { LowDownBar } from '../Lowbar/LowDownBar';
import { Container, Wrapper, Left, Logo, Right, MenuItem } from './NavbarStyle';


export const HeaderEx = () => {
  return (
    <>
      <Container>
          <Wrapper>
              <Left>
                  <Logo>
                    <h3> Wow ExChange</h3>
                  </Logo>
              </Left>
                    <h1>Header Component</h1>
              <Right>
                  <MenuItem>Register</MenuItem>
                  <MenuItem>Sign In</MenuItem>
              </Right>
          </Wrapper>
      </Container>
      <LowDownBar/>
    </>
  )
}
