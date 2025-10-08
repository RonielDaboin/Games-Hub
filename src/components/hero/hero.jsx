import {
  Container,
  Wrapper,
  Title,
  Subtitle,
  HeroVideo,
  Overlay,
} from "./heroStyles";
import { Element } from "react-scroll";

export const Hero = () => {
  return (
    <Element name="hero">
      <Container>
        <HeroVideo>
          <video
            className="video"
            src="https://res.cloudinary.com/dra09b3f9/video/upload/v1758849906/ghub_xfn3nn.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <Overlay />
        </HeroVideo>
        <Wrapper>
          <Title> El mejor lugar para realizar tus compras o ventas </Title>
          <Subtitle> Rápido y seguro </Subtitle>
        </Wrapper>
      </Container>
    </Element>
  );
};
