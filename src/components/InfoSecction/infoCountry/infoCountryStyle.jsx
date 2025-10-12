import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  background: radial-gradient(circle at center, rgba(0, 128, 255, 0.15), #000 80%);
  width: 100%;
  height: auto;
  padding: 2rem 0rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;
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

  @media (max-width: 768px) {
    font-size: 1.7rem;
    padding: 0.4rem 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 0.3rem 0.8rem;
  }
`;

export const HeaderMain = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  backdrop-filter: blur(10px) brightness(0.8);
  -webkit-backdrop-filter: blur(10px) brightness(0.8);
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  border-radius: 2em;
  padding: 2.5rem 3rem;

  @media (max-width: 1024px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

export const Right = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  

  @media (max-width: 1024px) {
    margin-top: 2rem;
  }
`;

export const ImgCountry = styled.img`
  width: 5%;
  height: auto;
  margin-right: 0.5rem;
  vertical-align: middle;

  @media (max-width: 768px) {
    width: 7%;
  }

  @media (max-width: 480px) {
    width: 10%;
  }
`;

export const Image = styled.img`
  width: 80%;
  height: auto;
  transition: all 0.3s ease-in-out;
  border-radius: 20px;
  filter: drop-shadow(0 0 50px rgba(0, 128, 255, 0.9));
  transform: perspective(1000px) rotateY(-10deg);

  &:hover {
    transform: perspective(1000px) rotateY(10deg) scale(1.05);
    filter: drop-shadow(0 0 70px rgba(0, 128, 255, 1));
  }

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 70%;
  }
`;
