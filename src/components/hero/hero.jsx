import { Container, Wrapper, Title, Subtitle, HeroVideo, Overlay } from './heroStyles'


export const Hero = () => {
  return (
    <Container>
        <HeroVideo>
            <video className='video' src='https://res.cloudinary.com/dra09b3f9/video/upload/v1758849906/ghub_xfn3nn.mp4' autoPlay loop muted playsInline />
            <Overlay />
        </HeroVideo>
        <Wrapper>
            <Title> The best place to make your purchases or sales</Title>
            <Subtitle>Fast and Safe</Subtitle>
        </Wrapper>
    </Container>
  )
}
