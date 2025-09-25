import { Container, Wrapper, Title, Subtitle, HeroVideo, Overlay } from './heroStyles'


export const Hero = () => {
  return (
    <Container>
        <HeroVideo>
            <video src='/BFAHEROTHH.mp4' autoPlay loop muted playsInline />
            <Overlay />
        </HeroVideo>
        <Wrapper>
            <Title> The best place to make your purchases or sales</Title>
            <Subtitle>Fast and Safe</Subtitle>
        </Wrapper>
    </Container>
  )
}
