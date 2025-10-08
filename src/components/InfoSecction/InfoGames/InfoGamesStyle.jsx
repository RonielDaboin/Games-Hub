import styled from "styled-components";

export const Section = styled.section`
  color: #fff;
  background: linear-gradient(150deg, #8c8d8f, #020202);
  padding: 3rem 5%;
  color: #fff;
  border-top: 10px solid;
  border-image: linear-gradient(90deg, #f0e804, #5501ff) 1;
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
`;

export const Filters = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

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
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
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
    height: 300px;
    object-fit: cover;
    display: block;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background: ${(props) =>
    props.type === "nuevo" ? "#00c853" : "#2962ff"};
  color: #fff;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 4px 10px;
  border-radius: 6px;
`;

export const Info = styled.div`
  padding: 0.8rem;

  h3 {
    font-size: 1rem;
    font-weight: 700;
  }

  p {
    font-size: 0.79rem;
    color: #b0bec5;
    margin-top: 4px;

  }
`;

export const Price = styled.span`
    position: relative;
    top: 0px;
    left: 40%;
    background: ${(props) =>
      props.type === "nuevo" ? "#00c853" : "#2962ff"};
    color: #fff;
    font-size: 0.80rem;
    font-weight: bold;
    padding: 4px 10px;
    border-radius: 6px;
    transition: ease-in-out 0.5s ;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px) brightness(0.8);

    &:hover{
        background-color: "#2962ff" ;
    }

`