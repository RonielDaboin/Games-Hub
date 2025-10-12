import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  text-align: center;
  color: #fff;
  background-image: url("https://res.cloudinary.com/dra09b3f9/image/upload/v1760221814/pixelcut-export_-_2025-10-11T192956.880_chlu4d.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  width: 100%;
  padding: 4rem 0rem;

  @media (max-width: 1200px) {
    gap: 2.5rem;
    padding: 3rem 2rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem 1rem;
  }

  @media (max-width: 600px) {
    padding: 2rem 0.5rem;
    gap: 1.5rem;
    width: 96%;
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
    margin-bottom: 1.5rem;
    padding: 0.4rem 1.2rem;
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
  width: 40%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 1200px) {
    width: 45%;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  backdrop-filter: blur(10px) brightness(0.8);
  -webkit-backdrop-filter: blur(10px) brightness(0.8);
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  border-radius: 2em;
  padding: 2.5rem 3rem;
  max-width: 600px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.3);

  @media (max-width: 1024px) {
    padding: 2rem;
  }

  @media (max-width: 900px) {
    width: 90%;
    padding: 2rem 1.5rem;
  }

  @media (max-width: 600px) {
    width: 90%;
    padding: 1.5rem 0rem;
  }
`;

export const ImageBuy = styled.img`
  width: 50%;
  height: auto;
  transition: all 0.3s ease-in-out;
  animation: pulseBuy 3s infinite;
  margin-left: 2rem;

  @keyframes pulseBuy {
    0% {
      transform: scale(1);
      filter: drop-shadow(0 4px 6px rgba(255, 255, 255, 0.996))
        saturate(150%);
    }
    50% {
      transform: scale(1.08);
      filter: drop-shadow(0 6px 12px rgba(92, 91, 91, 0.575))
        saturate(130%);
    }
    100% {
      transform: scale(1);
      filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))
        saturate(110%);
    }
  }

  @media (max-width: 1200px) {
    width: 55%;
  }

  @media (max-width: 900px) {
    width: 70%;
    margin-left: 0;
  }

  @media (max-width: 600px) {
    width: 50%;
  }
`;

export const Button = styled.img`
  width: 10%;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  margin-top: 2rem;
  margin-right: 1em;
  z-index: 10;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 900px) {
    width: 20%;
    margin-right: 0;
  }

  @media (max-width: 600px) {
    width: 30%;
  }
`;
