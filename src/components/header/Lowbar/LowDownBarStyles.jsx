import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8%;
    width: 45%;
    background-color: #c7d5d53f;
    margin: 0 auto;
    border-radius: 1rem;
    position: fixed;
    margin-top: 118px;
    left: 50%;
    z-index: 2;
    padding: 0 0px;
    transform: translateX(-50%);
    backdrop-filter: blur(10px) brightness(1.9);
    -webkit-backdrop-filter: blur(10px);
    border-top: 2px solid white;
    border-bottom: 2px solid white;
`

export const Wrapper = styled.div`
    width: 100%;
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const MenuItem = styled.div`
    margin-left: 25px;
    font-size: 18px;
    cursor: pointer;
    transition: transform 0.3s;
    
    &:hover{
        transform: scale(1.05);
        color: azure;
        text-shadow: 0 4px 10px rgb(0, 0, 0);
    }
`
