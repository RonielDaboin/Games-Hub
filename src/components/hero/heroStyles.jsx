import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #c02217c7;
    height: 87vh;
    width: 100%;
    position: relative;
    overflow: hidden;
    z-index: 1;
    
`

export const Wrapper = styled.div`
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 2em;
    
    
`

export const Title = styled.div`
    font-size: 3em;
    font-weight: 700;
    text-shadow: 5cap;
    text-shadow: 0 4px 8px rgba(255, 255, 255, 0.506);

    
`

export const Subtitle = styled.div`
    font-size: 2.5em;
    font-weight: 500;
    text-shadow: 0 4px 8px rgba(255, 255, 255, 0.506);
    
`

export const HeroVideo = styled.div`
    width: 100%;
    height: 100%; /* mejor que forzar 108vh */
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 1;

    .video{
        position: absolute;
        top: 50%;
        left: 50%;
        min-width: 100%;
        min-height: 100%;
        transform: translate(-50%, -50%);
        object-fit: cover;
    }
        
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.60);
  z-index: 2;
`;