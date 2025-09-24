import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 90%;
    background-color: #b1bebe45;
    margin: 0 auto;
    margin-top: 4px;
    border-radius: 2em;
    position: fixed;
    margin-top: 8px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`

export const Wrapper = styled.div`
    width: 100%;
    padding: 10px 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
    
export const Left = styled.div``

export const Right = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
`

export const Logo = styled.div`
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    transition: ease-in-out 0.5s;

    &:hover {
        color: black;
    }
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

