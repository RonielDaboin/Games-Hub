import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffff;
    background: linear-gradient(350deg, #0d0d0d15, #FFC300   );
    width: 100%;
    height: auto;
    padding: 2rem 0rem ;
    border-top: 10px solid;
    border-image: linear-gradient(90deg, #ff8a00, #e52e71) 1;
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

export const Left = styled.div`
    width: auto;
    height: auto;
`
export const Right = styled.div`
    width: auto;
    height: auto;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    /* background-image: url('https://res.cloudinary.com/dra09b3f9/image/upload/v1759707808/Gemini_Generated_Image_1glqrb1glqrb1glq_u6vdvz.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    -webkit-backdrop-filter: blur(50px);
    backdrop-filter: blur(50px) brightness(5); */
`

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
      filter: drop-shadow(0 4px 6px rgba(0,0,0,0.2))saturate(110%);
    }
  }
`