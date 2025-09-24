import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #c02217c7;
    height: 700px;
    width: 100%;
    position: relative;
    overflow: hidden;
    z-index: 1;
    
`

export const Wrapper = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 2em;
    
    
`

export const Title = styled.div`
    font-size: 3em;
    font-weight: 700;

    
`

export const Subtitle = styled.div`
    font-size: 2.5em;
    font-weight: 500;
    
`

export const HeroVideo = styled.div`
    width: 100%;
    height: 150%;
    object-fit: cover;
    position: absolute;
    z-index: 1;
    background: rgba(0, 0, 0, 0.745);
        
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.346); /* oscuridad extra para que el texto se lea */
  z-index: 2;
`;