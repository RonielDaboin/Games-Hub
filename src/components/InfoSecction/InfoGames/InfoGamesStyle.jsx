import styled from "styled-components";

export const Section = styled.section`
  color: #fff;
  background: linear-gradient(150deg, #8c8d8f, #020202);
  padding: 3rem 5%;
  border-top: 10px solid;
  border-image: linear-gradient(90deg, #b1afaf, #211e27) 1;

  @media (max-width: 1024px) {
    padding: 2.5rem 4%;
  }

  @media (max-width: 768px) {
    padding: 2rem 3%;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 3%;
    width: 94vw;
  }
`;

export const Title = styled.h2`
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

export const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;

  button {
    background: #243447;
    color: #fff;
    border: none;
    padding: 0.4rem 1rem;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: 0.3s;

    &:hover {
      background: #3a556e;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
      padding: 0.3rem 0.8rem;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(220px, 1fr));
  gap: 1.5rem;

  @media (max-width: 1024px) {
    gap: 1.2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 0.8rem;
  }
`;

export const Card = styled.div`
  position: relative;
  background: #1c2a3a;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 410px;
    object-fit: cover;
    display: block;

    @media (max-width: 768px) {
      height: 250px;
    }

    @media (max-width: 480px) {
      height: 200px;
    }
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background: ${(props) => (props.type === "nuevo" ? "#00c853" : "#2962ff")};
  color: #fff;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 4px 10px;
  border-radius: 6px;

  @media (max-width: 480px) {
    font-size: 0.65rem;
    padding: 3px 8px;
  }
`;

export const Info = styled.div`
  padding: 0.8rem;

  h3 {
    font-size: 1rem;
    font-weight: 700;

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  p {
    font-size: 0.80rem;
    color: #e0f5ff;
    margin-top: 4px;

    @media (max-width: 480px) {
      font-size: 0.7rem;
    }
  }
`;

export const Price = styled.span`
  position: relative;
  top: 0px;
  left: 40%;
  background: ${(props) => (props.type === "nuevo" ? "#00c853" : "#2962ff")};
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 4px 10px;
  border-radius: 6px;
  transition: ease-in-out 0.5s;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px) brightness(0.8);

  &:hover {
    background-color: #2962ff;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 3px 8px;
    left: 35%;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 2px 6px;
    left: 30%;
  }
`;
