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
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px) brightness(1.9);
    border-top: 2px solid white;
    border-bottom: 2px solid white;
`

export const Wrapper = styled.div`
    width: 100%;
    padding: 10px 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
    
export const Left = styled.h3`

`
export const Middle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

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
    transition: ease-in-out 0.3s;
    padding: 0 20px;
    line-height: 50px;
    border-radius: 2em;
    transition: all 0.2s ease-in-out;
    border-left: 0.3px solid transparent; 
    border-right: 0.3px solid transparent; 

    &:hover {
        transform: scale(1.05);
        border-radius: 2em;
        background-color: #f1f1f196;;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        border-right: 0.3px solid white;
        border-left: 0.3px solid white;

}
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

export const SearchInput = styled.input`
  max-width: ${(props) => (props.show ? '150px' : '0')};
  opacity: ${(props) => (props.show ? '1' : '0')};
  padding: ${(props) => (props.show ? '5px 10px' : '0')};
  margin-left: ${(props) => (props.show ? '10px' : '0')};
  border: 1px solid #ffffff;
  border-radius: 4px;
  transition: max-width 0.3s ease, opacity 0.3s ease, padding 0.3s ease, margin-left 0.3s ease;
  overflow: hidden;
  background-color: #a3a3a3b1;
  
  ::placeholder {
    color: #FFf; 
    opacity: 0;   
    }
`;