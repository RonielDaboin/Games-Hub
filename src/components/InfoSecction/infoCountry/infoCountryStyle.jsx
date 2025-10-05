import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffff;
    /* background: linear-gradient(190deg, #0d0d0d,#3700ff); */
    background: radial-gradient(circle at center, rgba(0, 128, 255, 0.15), #000 80%);
    width: 100%;
    height: auto;
    padding: 2rem 0rem ;
    
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

export const ImgCountry = styled.img`
    width: 5%;
    height: auto;
    margin-right: 0.5rem;
    vertical-align: middle;
`

export const Image = styled.img`
    width: 100%;
    height: auto;
    transition: all 0.3s ease-in-out;
    border-radius: 20px;
    filter: drop-shadow(0 0 50px rgba(0, 128, 255, 0.9)); 
    transform: perspective(1000px) rotateY(-10deg); 

    &:hover {
        transform: perspective(1000px) rotateY(10deg) scale(1.05);
        filter: drop-shadow(0 0 70px rgba(0, 128, 255, 1));
    }
`;
