import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffff;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: auto;
  padding: 2rem 0rem;
  background-image: url('https://res.cloudinary.com/dra09b3f9/image/upload/v1760234228/pixelcut-export_-_2025-10-11T225645.044_vi8ggn.png');
  /* background: linear-gradient(150deg, #8c8d8f, #020202); */

  @media (max-width: 1024px) {
    padding: 1.8rem 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem 1rem;
    width: 92%;
  }
`;

export const TitleSection = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 2rem;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px) brightness(0.8);
  border-top: 1px solid #ffffff9b;
  border-bottom: 1px solid #ffffff9b;
  border-radius: 2em;
  width: fit-content;
  padding: 0.5rem 1.5rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    padding: 0.4rem 1.2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    padding: 0.3rem 1rem;
  }
`;

export const HeaderMain = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  font-weight: 200;
  margin-bottom: 1rem;
  max-width: 600px;
  line-height: 1.5;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 90%;
    margin: 0 auto 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

export const Content = styled.div`
  font-size: 1.1rem;
  font-weight: 200;
  margin-bottom: 1rem;
  max-width: 600px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 90%;
    margin: 0 auto 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

export const Left = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

export const Right = styled.div`
  width: 30%;
  margin-right: 5rem;
  height: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px) brightness(0.8);
  border-top: 1px solid white;
  border-bottom: 2px solid white;
  border-radius: 2em;

  @media (max-width: 1024px) {
    width: 60%;
    padding: 1rem 2rem;
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 1rem;
    margin: 0;
  }
`;

export const ImageBuy = styled.img`
  width: 50%;
  height: auto;
  transition: all 0.3s ease-in-out;
  animation: pulseBuy 3s infinite;
  margin-bottom: 1rem;

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

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 480px) {
    width: 85%;
  }
`;

const buttonStyle = `
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
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
    padding: 8px 16px;
  }
`;

export const InstagramButton = styled.a`
  ${buttonStyle}
  background: linear-gradient(
    45deg,
    #feda75 0%,
    #fa7e1e 25%,
    #d62976 50%,
    #9c49a6 75%,
    #515bd4 100%
  );
  &:hover {
    box-shadow: 0 5px 15px rgba(250, 126, 30, 0.6);
  }
`;

export const WhatsappButton = styled.a`
  ${buttonStyle}
  background-color: #25d366;
  &:hover {
    box-shadow: 0 5px 15px rgba(37, 211, 102, 0.6);
  }
`;

export const DiscordButton = styled.a`
  ${buttonStyle}
  background-color: #5865f2;
  &:hover {
    box-shadow: 0 5px 15px rgba(88, 101, 242, 0.6);
  }
`;

export const RRSS = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;
