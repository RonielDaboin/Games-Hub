import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffff;
  /* background: linear-gradient(350deg, #4F9CFF , #C0C0C0    ); */
  background-image: url("https://res.cloudinary.com/dra09b3f9/image/upload/v1759637983/ChatGPT_Image_5_oct_2025_01_15_29_vf8c28.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: auto;
  padding: 2rem 0rem;
`;
export const HeaderMain = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 1rem;
  max-width: 600px;
  line-height: 1.5;
  font-style: italic;
`;
export const Content = styled.div`
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 1rem;
  max-width: 600px;
  line-height: 1.5;
`;

export const Left = styled.div`
  width: auto;
  height: auto;
`;
export const Right = styled.div`
  width: auto;
  height: auto;
  padding: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px) brightness(0.8);
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  border-radius: 2em;
`;

export const ImageBuy = styled.img`
  width: 60%;
  height: auto;
  transition: all 0.3s ease-in-out;
  animation: pulseBuy 3s infinite;

  @keyframes pulseBuy {
    0% {
      transform: scale(1);
      filter: drop-shadow(0 4px 6px rgba(255, 255, 255, 0.996)) saturate(150%);
    }
    50% {
      transform: scale(1.08);
      filter: drop-shadow(0 6px 12px rgba(92, 91, 91, 0.575)) saturate(130%);
    }
    100% {
      transform: scale(1);
      filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2)) saturate(110%);
    }
  }
`;

export const InstagramButton = styled.a`
  background: linear-gradient(
    45deg,
    #feda75 0%,
    #fa7e1e 25%,
    #d62976 50%,
    #9c49a6 75%,
    #515bd4 100%
  );
  text-decoration: none;
  color: white;
  font-size: 1.1em;
  font-weight: bold;
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);

  &:hover {
    transform: translateY(-2px);

    box-shadow: 0 5px 15px rgba(250, 126, 30, 0.6);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

export const WhatsappButton = styled.a`
  background-color: #25d366;
  text-decoration: none;
  color: white;
  font-size: 1.1em;
  font-weight: bold;
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(37, 211, 102, 0.6);
  }
  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

export const DiscordButton = styled.a`
  background-color: #5865f2;
  text-decoration: none;
  color: white;
  font-size: 1.1em;
  font-weight: bold;
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(88, 101, 242, 0.6);
  }
  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

export const RRSS = styled.div`
  display: flex;
    gap: 1rem;
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
`;