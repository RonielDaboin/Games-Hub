import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  background-image: url("https://res.cloudinary.com/dra09b3f9/image/upload/v1759710489/pixelcut-export_-_2025-10-05T212803.230_kprpcu.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: auto;
  padding: 5rem 0.15rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 4rem 1rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
    width: 92%;
  }
`;

export const HeaderMain = styled.h2`
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

  @media (max-width: 768px) {
    font-size: 1.7rem;
    padding: 0.4rem 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 0.3rem 0.8rem;
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
    max-width: 90%;
    font-size: 1rem;
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
    max-width: 90%;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

export const Left = styled.div`
  width: auto;
  height: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const Right = styled.div`
  width: auto;
  height: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
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

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px) brightness(0.8);
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  border-radius: 2em;
  padding: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;
