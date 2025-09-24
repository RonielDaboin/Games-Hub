import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    align-items: center;
    justify-content: space-between;
    height: 8%;
    width: 40%;
    background-color: #c7d5d53f;
    margin: 0 auto;
    margin-top: 4px;
    border-radius: 1rem;
    position: fixed;
    margin-top: 115px;
    left: 50%;
    z-index: 2;
    padding: 0 20px;
    transform: translateX(-50%);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
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
    transition:  ease-in-out 0.5s;
    
    &:hover{
        transform: scale(1.1);
        color: azure;
    }
    
`