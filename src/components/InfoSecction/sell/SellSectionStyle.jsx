import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  background: linear-gradient(150deg, #8c8d8f, #020202);
  width: 100%;
  height: auto;
  padding: 4rem 0rem;

  @media (max-width: 1024px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 2rem 0.5rem;
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
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 5rem;
  margin-left: 3rem;

  @media (max-width: 1024px) {
    padding: 3rem 2rem;
    margin-left: 1.5rem;
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: 2rem 1rem;
    margin-left: 0;
  }
`;

export const Right = styled.div`
  flex: 1;
  height: auto;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 2rem;
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: 1.5rem 0rem;
  }
`;

export const Image = styled.img`
  width: 43%;
  height: auto;
  transition: all 0.3s ease-in-out;
  animation: pulseSell 3s infinite;
  border-radius: 20px;
  filter: drop-shadow(0 0 50px rgba(239, 239, 239, 0.9));
  transform: perspective(1000px) rotateY(-10deg);

  &:hover {
    transform: perspective(1000px) rotateY(10deg) scale(1.05);
    filter: drop-shadow(0 0 70px #ffffff);
  }

  @media (max-width: 1200px) {
    width: 50%;
  }

  @media (max-width: 900px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 50%;
  }
`;

export const Button = styled.button`
  border: none;
  color: #ffffff;
  padding: 1rem 2rem;
  font-size: 1.3rem;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 2rem;
  background-color: #ffffff60;
  backdrop-filter: blur(5px) brightness(200%);
  -webkit-backdrop-filter: blur(5px);

  &:hover {
    background: linear-gradient(90deg, #858484, #38d750, #454443);
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(255, 138, 0, 0.6);
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0.8rem 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.7rem 1.2rem;
  }
`;
