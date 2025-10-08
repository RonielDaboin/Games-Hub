import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffff;
    background: linear-gradient(190deg, #008C45,#161616);
    width: 100%;
    height: auto;
    padding: 2rem 0rem ;
    border-top: 10px solid;
    border-image: linear-gradient(90deg, #f0e804, #5501ff) 1;
`
export const HeaderMain = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
`

export const Title = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
`

export const Subtitle = styled.p`
    font-size: 1.4rem ;
    font-weight: 500;
    margin-bottom: 1rem;
    max-width: 600px;
    line-height: 1.5;
    font-style: italic;
`
export const Content = styled.div`
    font-size: 1.3rem ;
    font-weight: 400;
    margin-bottom: 1rem;
    max-width: 600px;
    line-height: 1.5;
`

export const Right = styled.div`
    width: auto;
    height: auto;
`
export const Left = styled.div`
    width: auto;
    height: auto;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export const Image = styled.img`
    width: 60%;
    height: auto;
    transition: all 0.3s ease-in-out;
    animation: pulseSell 3s infinite;
    border-radius: 20px;
    filter: drop-shadow(0 0 50px rgba(45, 238, 151, 0.9)); 
    transform: perspective(1000px) rotateY(-10deg); 

    &:hover {
        transform: perspective(1000px) rotateY(10deg) scale(1.05);
        filter: drop-shadow(0 0 70px #59f5a4);
    }
`
export const Button = styled.button`
  border: none;
  color: #ffffff;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 2rem;
  margin-right: 1em;
  background-color: #ffffff60;
  backdrop-filter: blur(5px) Brightness(200%);
  -webkit-backdrop-filter: blur(5px);
  &:hover {
    background: linear-gradient(90deg, #858484, #38d750, #454443 );
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(255, 138, 0, 0.6);
  }
`;